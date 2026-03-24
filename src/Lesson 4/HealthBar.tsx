import {useState} from 'react';
/// a simple component to demonstrate a health bar in React
export function HealthBar() {
    const [health, setHealth] = useState<number>(100);

    const takeDamage = () => setHealth(h => Math.max(0, h - 10));
    const heal = () => setHealth(h => Math.min(100, h + 10));

    return (
        <div>
            <h3>Health: {health}</h3>
            <button onClick={takeDamage}>Take Damage (-10)</button>
            <button onClick={heal}>Heal (+10)</button>
        </div>
    );
}