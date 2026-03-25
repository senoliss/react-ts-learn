import { useState } from "react";

export function useXPSystem() {
    const [xp, setXp] = useState<number>(0);

    const gainXP = (amount: number) =>
        setXp(x => Math.min(100, x + amount));

    return {
        xp,
        gainXP
    };
}
