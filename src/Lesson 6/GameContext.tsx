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
    const [skills, setSkills] = useState<Skill[]>([]);
    const [quests, setQuests] = useState<Quest[]>([]);

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
        skills: [],
        quests: [],
        equipment: {},
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