import { useState } from "react";
import styles from "../Styles/GamePanel.module.css";

import { HealthBar } from "../Lesson 4/HealthBar";
import { ManaBar } from "../Lesson 4/ManaBar";
import { XPBar } from "../Lesson 4/XPBar";
import { Score } from "../Lesson 4/Score";

export function GamePanel() {

    const [health, setHealth] = useState<number>(100);
    const [mana, setMana] = useState<number>(100);
    const [xp, setXp] = useState<number>(0);
    const [score, setScore] = useState<number>(0);

    const takeDamage = (amount: number) =>
        setHealth(h => Math.max(0, h - amount));

    const heal = (amount: number) =>
        setHealth(h => Math.min(100, h + amount));

    const castSpell = (cost: number) =>
        setMana(m => Math.max(0, m - cost));

    const regenMana = (amount: number) =>
        setMana(m => Math.min(100, m + amount));

    const gainXP = (amount: number) =>
        setXp(x => Math.min(100, x + amount));

    const addScore = (amount: number) =>
        setScore(s => s + amount);

    return (
        <div className={styles.wrapper}>
            <h2>Game Panel</h2>

            <HealthBar
                health={health}
                maxHealth={100}
                onDamage={() => takeDamage(10)}
                onHeal={() => heal(10)}
            />

            <ManaBar
                mana={mana}
                maxMana={100}
                onCastSpell={() => castSpell(15)}
                onRegenerateMana={() => regenMana(10)}
            />

            <XPBar
                xp={xp}
                maxXp={100}
                onGainXp={() => gainXP(10)}
            />

            <Score
                score={score}
                onGainScore={() => addScore(10)}
                onResetScore={() => setScore(0)}
            />
        </div>
    );
}