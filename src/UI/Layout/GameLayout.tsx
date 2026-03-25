import styles from "./GameLayout.module.css";
import { PlayerHUD } from "../Panels/PlayerHUD";
import { ActionBar } from "../Panels/ActionBar";
import { EnemyPanel } from "../Panels/EnemyPanel";

export function GameLayout() {
    return (
        <div className={styles.layout}>
            <div className={styles.hud}>
                <PlayerHUD />
            </div>

            <div className={styles.center}>
                <EnemyPanel />
            </div>

            <div className={styles.actions}>
                <ActionBar />
            </div>
        </div>
    );
}