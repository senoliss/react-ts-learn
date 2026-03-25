import styles from "../Styles/GamePanel.module.css";

import { HealthBar } from "../Lesson 4/HealthBar";
import { ManaBar } from "../Lesson 4/ManaBar";
import { XPBar } from "../Lesson 4/XPBar";
import { Score } from "../Lesson 4/Score";

export function GamePanel() {

    return (
        <div className={styles.wrapper}>
            <h2>Game Panel</h2>

            <HealthBar />

            <ManaBar />

            <XPBar />

            <Score/>
        </div>
    );
}