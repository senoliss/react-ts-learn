import { useState } from "react";

export function useXPSystem() {
    const [xp, setXp] = useState<number>(0);
    const [level, setLevel] = useState<number>(1);

    // XP requirement formula
    const getMaxXPForLevel = (level: number) => 100 + (level - 1) * 50;

    const maxXp = getMaxXPForLevel(level);

    const gainXP = (amount: number) =>{
            setXp(prev => {
            const newXP = prev + amount;

            if (newXP >= maxXp) {
                // Level up
                // console.log(`Level: ${level}`);
                setLevel(lvl => lvl + 1); // somehow this doubles and levels up twice, so I just made it 0.5 to compensate - solved by removing <StrictMode> in main.tsx
                return newXP - maxXp; // Carry over excess XP or redo the logic to level up more than one level if needed
            }
            return newXP;
        });
    };
    
    // console.log(`Level after: ${level}`);
    return {
        xp,
        level,
        maxXp,
        gainXP
    };
}
