import styles from "./ActionBar.module.css";
import { useGame } from "../../Lesson 6/GameContext";

export function ActionBar() {
    const { takeDamage, heal, castSpell, regenMana, gainXP } = useGame();

    return (
        <div className={styles.actions}>
            <button onClick={() => takeDamage(10)}>Attack Enemy (-10 HP)</button>
            <button onClick={() => castSpell(15)}>Cast Spell (-15 Mana)</button>
            <button onClick={() => heal(10)}>Heal (+10 HP)</button>
            <button onClick={() => regenMana(10)}>Meditate (+10 Mana)</button>
            <button onClick={() => gainXP(25)}>Gain XP (+25)</button>
        </div>
    );
}