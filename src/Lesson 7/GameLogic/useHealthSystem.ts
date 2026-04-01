import {useState} from 'react';


export function useHealthSystem() {
    const [health, setHealth] = useState<number>(100);

    const takeDamage = (amount: number) =>
        setHealth(h => Math.max(0, h - amount));

    const heal = (amount: number) =>
        setHealth(h => h + amount);

    const drinkPotion = (amount: number = 30) =>
        setHealth(h => h + amount);

    return {
        health,
        takeDamage,
        heal,
        drinkPotion
    };
}