import {useState} from 'react';


export function useHealthSystem() {
    const [health, setHealth] = useState<number>(100);

    const takeDamage = (amount: number) =>
        setHealth(h => Math.max(0, h - amount));

    const heal = (amount: number) =>
        setHealth(h => Math.min(100, h + amount)); // leave 100 for a moment

    return {
        health,
        takeDamage,
        heal
    };
}