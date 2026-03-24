import { useState } from "react";

export function ManaBar() {
    const [mana, setMana] = useState<number>(100);
    const maxMana = 100;

    const castSpell = () => setMana(m => Math.max(0, m - 15));
    const regenerateMana = () => setMana(m => Math.min(maxMana, m + 10));

    const percentage = (mana / maxMana) * 100;

    return (
        <div style={{ width: "350px", margin: '20px auto' }}>
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
                <button onClick={castSpell}>Cast Spell (-15)</button>
                <button onClick={regenerateMana}>Regenerate Mana (+10)</button>
            </div>
        </div>
    );
}