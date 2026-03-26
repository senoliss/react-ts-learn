import styles from "./GameLayout.module.css";
import { PlayerHUD } from "../Panels/PlayerHUD";
import { ActionBar } from "../Panels/ActionBar";
import { EnemyPanel } from "../Panels/EnemyPanel";
import { InventoryPanel } from "../Panels/InventoryPanel";
import { useGame } from "../../Lesson 6/GameContext";
import { HomePanel } from "../Panels/HomePanel";

export function GameLayout() {
    const { gameMode } = useGame();
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
                    {gameMode === "home" && <HomePanel />}
                    {gameMode === "combat" && <EnemyPanel />}
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