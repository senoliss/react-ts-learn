import { useGame } from "../../Lesson 6/GameContext";
import { RARITY_COLORS } from "../../Lesson 7/GameLogic/lootTypes";
import type { Item } from "../../Lesson 7/GameLogic/types";
import styles from "./InventoryPanel.module.css";

export function InventoryPanel() {
    const { inventory, useItem, removeItem } = useGame();

    return (
        <div className={styles.inventory}>
            <h2>Inventory</h2>

            <div className={styles.grid}>
                {inventory.length === 0 && (
                    <p className={styles.empty}>Empty</p>
                )}

                {inventory.map((item: Item) => (
                    <div key={item.id} className={styles.itemCard}>
                        <div className={styles.icon}>{item.icon ?? "📦"}</div>
                        <div className={styles.name}>
                            <span style={{ color: RARITY_COLORS[item.rarity], fontWeight: "bold" }}>
                            {item.name}
                            </span>
                        </div>
                        <div className={styles.amount}>x{item.amount}</div>

                        <div className={styles.buttons}>
                            <button onClick={() => useItem(item.id, item.effect)}>
                                Use
                            </button>
                            <button
                                className={styles.drop}
                                onClick={() => removeItem(item.id)}
                            >
                                Drop
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}