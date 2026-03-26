import styles from "./EnemyPanel.module.css";
import { useGame } from "../../Lesson 6/GameContext";

export function EnemyPanel() {
    const { enemyHP, enemyMaxHP, enemyName } = useGame();

    const percentage = (enemyHP / enemyMaxHP) * 100;

    return (
        <div style={{ width: "350px", textAlign: "center" }}>
            <h2>{enemyName}</h2>
            <p>HP: {enemyHP} / {enemyMaxHP}</p>

            <div style={{
                width: "100%",
                height: "20px",
                backgroundColor: "#333",
                borderRadius: "4px",
                overflow: "hidden",
                marginBottom: "10px"
            }}>
                <div style={{
                    width: `${percentage}%`,
                    height: "100%",
                    backgroundColor: "#e74c3c",
                    transition: "width 0.3s ease"
                }} />
            </div>
        </div>
    );
}