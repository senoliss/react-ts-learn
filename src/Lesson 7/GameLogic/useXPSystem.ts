import { useState } from "react";

export function useXPSystem(applyAutoLevelScaling: () => void) {
    const [level, setLevel] = useState<number>(1);
    const [xp, setXp] = useState<number>(0);
    const [pendingLevelUps, setPendingLevelUps] = useState<number>(0);

    // XP requirement formula - for testing purposes, it starts at 100 and increases by 50 each level, 
    // need to adjust for deployment later to be steady progression instead of linear
    const getMaxXPForLevel = (level: number) => 100 + (level - 1) * 50;
    const maxXp = getMaxXPForLevel(level); // gets current max xp based on level

    const gainXP = (amount: number) =>{
            setXp(prev => {
            const newXP = prev + amount; // Calculates new XP total by adding current xp and amount gained

            if (newXP >= maxXp) {
                // Level up
                // console.log(`Level: ${level}`);
                setLevel(lvl => lvl + 1); 
                setPendingLevelUps(p => p + 1);

                // THIS HSOULD UPGRADE MANA/HEALTH AND GRANT STAT POINTS UPON LEVEL UP
                applyAutoLevelScaling();


                return newXP - maxXp; // Carry over excess XP or redo the logic to level up more than one level if needed
            }
            return newXP;
        });
    };
    

    // Player spends a point
    const spendLevelPoint = () => {
        setPendingLevelUps(p => Math.max(0, p - 1));
    };

    // console.log(`Level after: ${level}`);
    return {
        level,
        xp,
        maxXp,
        pendingLevelUps,
        setPendingLevelUps,
        spendLevelPoint,
        gainXP
    };
}
