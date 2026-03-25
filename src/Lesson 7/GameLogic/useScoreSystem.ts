import { useState } from "react";

export function useScoreSystem() {
    const [score, setScore] = useState<number>(0);

    const addScore = (amount: number) =>
        setScore(s => s + amount);

    const resetScore = () =>
        setScore(0);

    return {
        score,
        addScore,
        resetScore
    };
}