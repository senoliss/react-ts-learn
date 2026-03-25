import { useGame } from "../Lesson 6/GameContext";

export function ManaBar() {
    const { mana, castSpell, regenMana } = useGame();
    const maxMana = 100;

    const percentage = (mana / maxMana) * 100;

    return (
        <div style={{ width: "350px", margin: "20px auto" }}>
            <h3>Mana: {mana} / {maxMana}</h3>

            <div
                style={{
                    width: "100%",
                    height: "20px",
                    backgroundColor: "#333",
                    borderRadius: "4px",
                    overflow: "hidden",
                    marginBottom: "10px",
                    position: "relative"
                }}
            >
                <div
                    style={{
                        width: `${percentage}%`,
                        height: "100%",
                        backgroundColor: "#3498ff",
                        transition: "width 0.34s ease"
                    }}
                />
            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <button onClick={() => castSpell(15)}>Cast Spell (-15)</button>
                <button onClick={() => regenMana(10)}>Regenerate Mana (+10)</button>
            </div>
        </div>
    );
}