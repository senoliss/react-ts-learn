import styles from "./SpellPanel.module.css";
import { useGame } from "../../Lesson 6/GameContext";
import { Tooltip } from 'react-tooltip'

export function SpellPanel() {
    const { spells, cooldowns, castSpell, mana, health, gameMode } = useGame();

    return (
        <div className={styles.panel}>
            <h2>Spellbook</h2>

            <div className={styles.grid}>
                {spells.map((spell: any) => {
                    const cd = cooldowns[spell.id] || 0;
                    const canCast =
                        cd === 0 &&
                        mana >= spell.manaCost &&
                        health > 0 &&
                        gameMode === "combat";

                    return (
                        <div key={spell.id} className={styles.card}>
                            
                            <div className={styles.icon}>
                                <a
                                    data-tooltip-id="spell-tooltip"
                                    data-tooltip-content={`${spell.name}: ${spell.description} (Mana cost: ${spell.manaCost})`}
                                    data-tooltip-place="top"
                                >
                                    {spell.icon}
                                    </a>
                            </div>

                            {/* <div className={styles.name}>{spell.name}</div> */}

                            <div className={styles.cost}>
                                Mana: {spell.manaCost}
                            </div>

                            {cd > 0 && (
                                <div className={styles.cooldown}>
                                    {Math.ceil(cd / 1000)}s
                                </div>
                            )}

                            {/* <div className={styles.desc}>
                                {spell.description}
                            </div> */}

                            <button
                                disabled={!canCast}
                                onClick={() => castSpell(spell)}
                            >
                                {cd > 0 ? "On Cooldown" : "Cast"}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}