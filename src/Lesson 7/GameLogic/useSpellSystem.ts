import { useState, useEffect } from "react";
import { SPELLS, type Spell } from "./spells";
import { useGame } from "../../Lesson 6/GameContext";


export function useSpellSystem(
    mana: number,
    setMana: (m: number) => void,
    playerHealth: number,
    healPlayer: (amount: number) => void,
    damageEnemy: (amount: number) => void,
    addLog: (message: string) => void
){
        const [cooldowns, setCooldowns] = useState<Record<string, number>>({});

        // Reduce cooldown timers every 100ms
        useEffect(() => {
            const interval = setInterval(() => {
                setCooldowns(cd => {
                    const updated = { ...cd };
                    Object.keys(updated).forEach(key => {
                        updated[key] = Math.max(0, updated[key] - 100);
                    });
                    return updated;
                });
            }, 100);

            return () => clearInterval(interval);
        }, []);

        const castSpell = (spell: Spell) => {
            if (playerHealth <= 0) {
                addLog(
                    `<span style="color: red; 
                           font-weight: bold;">
                        You cannot cast spells while you are dead!
                     </span>`
                );
                return;
            }

            if(cooldowns[spell.id] > 0) {
                addLog(
                    `<span style="color: orange; 
                           font-weight: bold;">
                        ${spell.name} is on cooldown for ${Math.ceil(cooldowns[spell.id] / 1000)}s!
                     </span>`
                );
                return;
            }

            if (mana < spell.manaCost) {
                addLog(
                    `<span style="color: blue; 
                           font-weight: bold;">
                        Not enough mana for ${spell.name}!
                     </span>`
                );
                return;
            }

            // Deduct mana and apply spell effects
            setMana(mana - spell.manaCost);
            // Start cooldown
            setCooldowns(cd => ({ ...cd, [spell.id]: spell.cooldown }));

            if (spell.type === "heal") {
                healPlayer(spell.amount);
                addLog(`You cast ${spell.name}! You heal ${spell.amount} HP.`);

            } else if (spell.type === "damage") {
                damageEnemy(spell.amount);
                addLog(`You cast ${spell.name}! You deal ${spell.amount} damage.`);
            }
        };

        return {
            spells: SPELLS,
            castSpell,
            cooldowns,
        };
}
