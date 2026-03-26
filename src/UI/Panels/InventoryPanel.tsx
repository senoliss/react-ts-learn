import styles from "./InventoryPanel.module.css";
import { useGame } from "../../Lesson 6/GameContext";
import type { Item } from "../../Lesson 7/GameLogic/types";

export function InventoryPanel() {
    const { inventory, useItem, removeItem } = useGame();

    return (
        <div className={styles.inventory}>
            <h2>Inventory</h2>

            <div className={styles.grid}>
                {inventory.length === 0 && (
                    <p className={styles.empty}>Your inventory is empty.</p>
                )}

                {inventory.map((item: Item) =>(
                    <div key={item.id} className={styles.itemCard}>
                        <div className={styles.icon}>{item.icon ?? "📦"}</div>
                        <div className={styles.name}>{item.name}</div>
                        <div className={styles.amount}>x{item.amount}</div>

                        <div className={styles.buttons}>
                            <button onClick={() => useItem(item.id, item.effect)}>
                                Use
                            </button>

                            <button onClick={() => removeItem(item.id)}
                                className={styles.drop}>
                                Drop
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}