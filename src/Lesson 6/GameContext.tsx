import { createContext, useContext, useState } from "react";

// 1. Game state values
type GameState = {
    health: number;
    mana: number;
    xp: number;
    score: number;
};

// 2. Game actions (functions)
type GameActions = {
    takeDamage: (amount: number) => void;
    heal: (amount: number) => void;
    castSpell: (cost: number) => void;
    regenMana: (amount: number) => void;
    gainXP: (amount: number) => void;
    addScore: (amount: number) => void;
};

// 3. Combine state and actions into a single context type
export type GameContextType = GameState & GameActions;

// 4. Create the context with a default value (can be empty or have default functions)
export const GameContext = createContext<GameContextType | undefined>(undefined);

// 5. Create GameProvider component to provide the context to its children
export function GameProvider({ children }: { children: React.ReactNode }) {

    // --- shared game state ---
    const [health, setHealth] = useState<number>(100);
    const [mana, setMana] = useState<number>(100);
    const [xp, setXp] = useState<number>(0);
    const [score, setScore] = useState<number>(0);

    // --- Game actions ---
    const takeDamage = (amount: number) =>
        setHealth(h => Math.max(0, h - amount));

    const heal = (amount: number) =>
        setHealth(h => Math.min(100, h + amount));

    const castSpell = (cost: number) =>
        setMana(m => Math.max(0, m - cost));

    const regenMana = (amount: number) =>
        setMana(m => Math.min(100, m + amount));

    const gainXP = (amount: number) =>
        setXp(x => Math.min(100, x + amount));

    const addScore = (amount: number) =>
        setScore(s => s + amount);

    // --- Provide state and actions to children ---
    return (
        <GameContext.Provider value={{
            health,
            mana,
            xp,
            score,
            takeDamage,
            heal,
            castSpell,
            regenMana,
            gainXP,
            addScore
        }}>
            {children}
        </GameContext.Provider>
    );
}