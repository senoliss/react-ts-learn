import { createContext, useContext, useState } from "react";
import { useHealthSystem } from "../Lesson 7/GameLogic/useHealthSystem";
import { useManaSystem } from "../Lesson 7/GameLogic/useManaSystem";
import { useScoreSystem } from "../Lesson 7/GameLogic/useScoreSystem";
import { useXPSystem } from "../Lesson 7/GameLogic/useXPSystem";
import { useInventorySystem } from "../Lesson 7/GameLogic/useInventorySystem";
import { useEnemySystem } from "../Lesson 7/GameLogic/useEnemySystem";
import { useSpellSystem } from "../Lesson 7/GameLogic/useSpellSystem";
import { useStatsSystem } from "../Lesson 7/GameLogic/useStatsSystem";
import { type Item, type Skill, type Quest, type Equipment } from "../Lesson 7/GameLogic/types";

// 4. Create the context with a default value (can be empty or have default functions)
export const GameContext = createContext<any>(undefined);

// 5. Create GameProvider component to provide the context to its children
export function GameProvider({ children }: { children: React.ReactNode }) {

    // --- shared game state ---
    const stats = useStatsSystem();
    const healthSystem = useHealthSystem();
    const manaSystem = useManaSystem();
    const xpSystem = useXPSystem(stats.applyAutoLevelScaling);
    const scoreSystem = useScoreSystem();
    const inventorySystem = useInventorySystem();
    const [gameMode, setGameMode] = useState<"home" | "combat">("home");
    const enemySystem = useEnemySystem(
        healthSystem.takeDamage, 
        healthSystem.health, 
        gameMode, 
        xpSystem.gainXP, 
        inventorySystem.addItem);
    const spellSystem = useSpellSystem(
        manaSystem.mana, 
        manaSystem.setMana, 
        healthSystem.health, 
        healthSystem.heal, 
        enemySystem.playerAttack, 
        enemySystem.addLog
    );
    const [selectedItem, setSelectedItem] = useState<Item | Skill | Quest | null>(null);
    const [equipment, setEquipment] = useState<Equipment>({});

    // Mockup data for skills - TODO: replace with player data from backend
    const mockSkills: Skill[] = [
      {
        id: "fireball",
        name: "Fireball",
        type: "active",
        manaCost: 20,
        cooldown: 3000,
        damage: 50,
        icon: "🔥",
        description: "Launches a fireball at the enemy",
        lore: "An ancient spell passed down through generations",
        unlockLevel: 1,
        isUnlocked: true,
      },
      {
        id: "heal",
        name: "Heal",
        type: "active",
        manaCost: 15,
        cooldown: 5000,
        healing: 30,
        icon: "💚",
        description: "Restores health to the player",
        lore: "A gentle spell of restoration",
        unlockLevel: 2,
        isUnlocked: true,
      },
      {
        id: "shield",
        name: "Shield",
        type: "passive",
        icon: "🛡️",
        description: "Increases defense",
        lore: "A protective barrier",
        unlockLevel: 3,
        isUnlocked: false,
      },
    ];
    const [skills, setSkills] = useState<Skill[]>(mockSkills);

    // Mockup data for quests - TODO: replace with player data from backend
    const mockQuests: Quest[] = [
      {
        id: "kill_goblins",
        name: "Slay the Goblins",
        description: "Defeat 5 goblins in the forest",
        objectives: ["Defeat 5 goblins"],
        rewards: { xp: 100, gold: 50, items: [] },
        status: "active",
        lore: "The goblins have been terrorizing the village",
      },
      {
        id: "find_treasure",
        name: "Find the Lost Treasure",
        description: "Locate the hidden treasure in the cave",
        objectives: ["Find the treasure chest"],
        rewards: { xp: 200, gold: 100, items: [] },
        status: "available",
        lore: "Legends speak of a great treasure",
      },
      {
        id: "rescue_villager",
        name: "Rescue the Villager",
        description: "Save the kidnapped villager",
        objectives: ["Rescue the villager"],
        rewards: { xp: 150, gold: 75, items: [] },
        status: "completed",
        lore: "A brave villager awaits rescue",
      },
    ];
    const [quests, setQuests] = useState<Quest[]>(mockQuests);

    // Wrap healing functions to clamp at dynamic maxHP (not hardcoded 100)
    const healClamped = (amount: number) => {
        const effectiveAmount = Math.min(amount, stats.maxHP - healthSystem.health);
        healthSystem.heal(effectiveAmount);
    };

    const drinkPotionClamped = (amount: number = 30) => {
        const effectiveAmount = Math.min(amount, stats.maxHP - healthSystem.health);
        healthSystem.drinkPotion(effectiveAmount);
    };

    const value = {
        gameMode,
        setGameMode,
        selectedItem,
        setSelectedItem,
        skills,
        quests,
        equipment,
        ...healthSystem,
        ...manaSystem,
        ...xpSystem,
        ...scoreSystem,
        ...inventorySystem,
        ...enemySystem,
        ...spellSystem,
        ...stats,
        // Override heal and drinkPotion with clamped versions
        heal: healClamped,
        drinkPotion: drinkPotionClamped,
    };

    // --- Provide state and actions to children ---
    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
}

export function useGame() {
    const context = useContext(GameContext);

    if(!context) {
        throw new Error("useGame must be used inside a GameProvider");  
    }

    return context;
}


// ✅ 1 — The Context (GameContext) = The "Brain" of Your Game
// In real games:

// There is one place where global game data lives.
// UI, enemies, combat, items — they all read/write from that data source.

// In your game, that global place is:
// GameContext.tsx

// This file:
// ✅ Creates all game logic
// ✅ Stores all game state
// ✅ Makes the whole game state accessible anywhere
// ✅ Allows any component to update the game
// It is the one and only global store of truth.
// Everything that needs health/mana/xp/etc reads it from here.
// ✅ Think of GameContext as:
// 🧠 The main brain
// 📡 Broadcasting data to components
// 📥 Receiving updates from components
// ♻️ Keeping the game running