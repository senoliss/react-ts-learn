import styles from "./GameLayout.module.css";
import { PlayerHUD } from "../Panels/PlayerHUD";
import { ActionBar } from "../Panels/ActionBar";
import { EnemyPanel } from "../Panels/EnemyPanel";
import { InventoryPanel } from "../Panels/InventoryPanel";

export function GameLayout() {
    return (
        <div className={styles.layout}>

            {/* TOP HUD */}
            <div className={styles.hud}>
                <PlayerHUD />
            </div>

            {/* MIDDLE CONTENT AREA */}
            <div className={styles.body}>
                
                {/* LEFT: Main gameplay area */}
                <div className={styles.center}>
                    <EnemyPanel />
                </div>

                {/* RIGHT: Inventory sidebar */}
                <aside className={styles.sidebar}>
                    <InventoryPanel />
                </aside>

            </div>

            {/* BOTTOM ACTION BAR */}
            <div className={styles.actions}>
                <ActionBar />
            </div>

        </div>
    );
}
``