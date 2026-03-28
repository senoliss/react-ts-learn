import styles from "./PlayerHUD.module.css";
import { HealthBar } from "../../Lesson 4/HealthBar";
import { ManaBar } from "../../Lesson 4/ManaBar";
import { XPBar } from "../../Lesson 4/XPBar";
import { Score } from "../../Lesson 4/Score";

export function PlayerHUD() {
    return (
        <div className={styles.hud}>
            <HealthBar />
            <ManaBar />
            <XPBar />
            {/* <Score /> */}
        </div>
    );
}