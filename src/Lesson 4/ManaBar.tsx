type ManaProps = {
    mana: number;
    maxMana: number;
    onCastSpell: () => void;
    onRegenerateMana: () => void;
};

export function ManaBar({ mana, maxMana, onCastSpell, onRegenerateMana }: ManaProps) {
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
                <button onClick={onCastSpell}>Cast Spell (-15)</button>
                <button onClick={onRegenerateMana}>Regenerate Mana (+10)</button>
            </div>
        </div>
    );
}