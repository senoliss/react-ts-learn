import { useEffect, useState } from "react";
import { ENEMIES, type EnemyTemplate } from "./enemies";
import { RARITY_COLORS, type LootRarity } from "./lootTypes";

export function useEnemySystem(takeDamageFromEnemy: (
    amount: number) => void, 
    playerHealth: number, 
    gameMode: "home" | "combat",
    gainXP: (amount: number) => void, 
    addItem: (item: any) => void) {

    const [enemy, setEnemy] = useState(() => generateEnemy());
    const [log, setLog] = useState<string[]>([]);

    function generateEnemy() {
        const e = ENEMIES[Math.floor(Math.random() * ENEMIES.length)];
        return {
            ...e,
            hp: e.maxHP
        };
    }


    const onEnemyDefeated = (dead: EnemyTemplate) => {
    // XP reward
    gainXP(dead.xpReward);
    addLog(`You gained ${dead.xpReward} XP`);

    // Loot drop
    const loot = rollLoot(dead);

    if (loot) {
        addItem({
            id: crypto.randomUUID(),
            name: loot.name,
            icon: loot.icon,
            amount: loot.amount,
            type: "material",
            rarity: loot.rarity
        });
        
        addLog(
            `You looted  
            <span style="color:${RARITY_COLORS[loot.rarity]}; font-weight:bold;">
                ${loot.icon} ${loot.name} x${loot.amount}
            </span>`
        );

    }

    // respawn
    return generateEnemy();
    };

    const playerAttack = (amount: number) => {
        if (playerHealth <= 0) {
                    addLog(
                        `<span style="color: red; 
                               font-weight: bold;">
                            You cannot attack while you are dead!
                         </span>`
                    );
                    return;
                }
        setEnemy(prev => {
            const newHP = prev.hp - amount;

            if (newHP <= 0) {
                addLog(`${prev.name} is defeated!`);
                return onEnemyDefeated(prev);
            }

            addLog(`You hit the ${prev.name} for ${amount} damage.`);
            return { ...prev, hp: newHP };
        });
    };

    const addLog = (message: string) => {
        const timestamp = new Date().toLocaleTimeString();
        setLog(prev => [`${timestamp} ${message}`, ...prev].slice(0, 250));
        console.log(`${timestamp} ${message}`);
    };


    // enmey loot rolling
    function rollLoot(enemy: EnemyTemplate) {
        // calculate total weight
        const total = enemy.lootTable.reduce((sum, entry) => sum + entry.weight, 0);
        const roll = Math.random() * total;

        let cumulative = 0;
        for (const entry of enemy.lootTable) {
            cumulative += entry.weight;
            if (roll <= cumulative) {
                const item = entry.items[Math.floor(Math.random() * entry.items.length)];
                
                return {
                    ...item,
                    rarity: entry.rarity
                };
            }
        }
        return null;
    }


    // ✅ Enemy auto-attack
    useEffect(() => {
        if (gameMode !== "combat") return;
        if (playerHealth <= 0) {
            // addLog(`You have been defeated by the ${enemy.name}...`);
            return;
        }

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
        addLog
    };
}