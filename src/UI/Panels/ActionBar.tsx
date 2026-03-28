import styles from "./ActionBar.module.css";
import { useGame } from "../../Lesson 6/GameContext";

export function ActionBar() {
    const { takeDamage, heal, castSpell, regenMana, gainXP } = useGame();
    const {addItem} = useGame();
    const { health, playerAttack } = useGame();
    const { gameMode, setGameMode } = useGame();
    

    return (
        <div className={styles.actions}>
            
            <button disabled={health <= 0}
                    onClick={() => playerAttack(10)}>
                Attack Enemy (-10 HP)
            </button>
            <button onClick={() => castSpell(15)}
                    disabled={health <= 0}>
                Cast Spell (-15 Mana)
            </button>
            <button onClick={() => heal(10)}>Heal (+10 HP)</button>
            <button onClick={() => regenMana(10)}>Meditate (+10 Mana)</button>
            <button onClick={() => gainXP(100)}>Gain XPs (+25)</button>
            
            <button onClick={() => addItem({
                    id: crypto.randomUUID(),
                    name: "Health Potion",
                    amount: 1,
                    icon: "🧪",
                    type: "consumable",
                    description: "Restores 25 HP when used.",
                    effect: () => heal(25)
                    })}>
                Add Health Potion
            </button>

            <button onClick={() => addItem( {
                    id: crypto.randomUUID(),
                    name: "Item" + Math.floor(Math.random() * 100),
                    amount: 1,
                    icon: "🎲",
                    type: "consumable",
                    effect: () => void(0)
                    })}>
                Add Random Item
            </button>

            
            {gameMode === "combat" && (
                <button onClick={() => setGameMode("home")} style={{ 
                    backgroundColor: "rgba(112, 42, 42, 0.5)",
                    border: "1px solid rgb(255, 132, 132)",
                    color: "rgb(252, 132, 132)"
                    }} >
                    Leave Combat
                </button>
            )}


            

        </div>
    );
}