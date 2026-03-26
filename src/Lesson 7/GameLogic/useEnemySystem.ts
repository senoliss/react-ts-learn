import { useEffect, useState } from "react";
import { ENEMIES } from "./enemies";

export function useEnemySystem(takeDamageFromEnemy: (amount: number) => void, playerHealth: number, gameMode: "home" | "combat") {
    const [enemy, setEnemy] = useState(() => generateEnemy());
    const [log, setLog] = useState<string[]>([]);

    function generateEnemy() {
        const e = ENEMIES[Math.floor(Math.random() * ENEMIES.length)];
        return {
            ...e,
            hp: e.maxHP
        };
    }

    const playerAttack = (amount: number) => {
        setEnemy(prev => {
            const newHP = prev.hp - amount;

            if (newHP <= 0) {
                addLog(`${prev.name} is defeated!`);
                return generateEnemy();
            }

            addLog(`You hit the ${prev.name} for ${amount} damage.`);
            return { ...prev, hp: newHP };
        });
    };

    const addLog = (message: string) => {
        const timestamp = new Date().toLocaleTimeString();
        setLog(prev => [`${timestamp} ${message}`, ...prev].slice(0, 200));
        console.log(`${timestamp} ${message}`);
    };

    // ✅ Enemy auto-attack
    useEffect(() => {
        if (gameMode !== "combat") return;
        if (playerHealth <= 0) return;

        const interval = setInterval(() => {

            const dmg =
                enemy.damageMin +
                Math.floor(Math.random() * (enemy.damageMax - enemy.damageMin + 1));

            const flavor =
                enemy.flavor[Math.floor(Math.random() * enemy.flavor.length)];

            addLog(`${flavor} It ${enemy.attackStyle} you for ${dmg} damage!`);

            takeDamageFromEnemy(dmg);
        }, enemy.attackSpeed);

        return () => clearInterval(interval);
    }, [enemy, gameMode, playerHealth, takeDamageFromEnemy]);

    return {
        enemy,
        log,
        playerAttack,
    };
}