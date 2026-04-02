import styles from "./SpellPanel.module.css";
import { useGame } from "../../Lesson 6/GameContext";
import type { Skill } from "../../Lesson 7/GameLogic/types";

export function SpellPanel() {
    const {
        spells,
        skills,
        cooldowns,
        castSpell,
        mana,
        health,
        gameMode,
        setSelectedItem,
    } = useGame();

    const activeSkillSpells = skills
      .filter((skill: Skill) => skill.type === "active")
      .map((skill: Skill) => ({
        id: skill.id,
        name: skill.name,
        icon: skill.icon,
        manaCost: skill.manaCost || 0,
        cooldown: skill.cooldown || 0,
        type: skill.damage ? "damage" : skill.healing ? "heal" : "damage",
        amount: skill.damage || skill.healing || 0,
        description: skill.description || "",
        unlocked: skill.isUnlocked,
        source: "skill" as const,
      }));

    const visibleSpells = [
      ...spells.map((spell: any) => ({ ...spell, source: "spell" as const, unlocked: true })),
      ...activeSkillSpells,
    ];

    return (
        <div className={styles.panel}>
            <div className={styles.grid}>
                {visibleSpells.map((spell) => {
                    const cd = cooldowns[spell.id] || 0;
                    const canCast =
                        spell.unlocked &&
                        cd === 0 &&
                        mana >= spell.manaCost &&
                        health > 0 &&
                        gameMode === "combat";

                    return (
                        <div
                            key={`${spell.source}-${spell.id}`}
                            className={`${styles.card} ${!spell.unlocked ? "opacity-60" : ""}`}
                            onClick={() => setSelectedItem(spell)}
                        >
                            <div className={styles.icon}>{spell.icon}</div>
                            <div className={styles.body}>
                                <div className={styles.name}>{spell.name}</div>
                                <div className={styles.info}>
                                    {spell.type} • Mana {spell.manaCost}
                                </div>
                            </div>
                            <button
                                className={styles.castButton}
                                disabled={!canCast}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (!spell.unlocked) return;
                                    castSpell({
                                        id: spell.id,
                                        name: spell.name,
                                        icon: spell.icon,
                                        manaCost: spell.manaCost,
                                        cooldown: spell.cooldown,
                                        type: spell.type,
                                        amount: spell.amount,
                                        description: spell.description,
                                    });
                                }}
                            >
                                {cd > 0 ? `${Math.ceil(cd / 1000)}s` : "Cast"}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}