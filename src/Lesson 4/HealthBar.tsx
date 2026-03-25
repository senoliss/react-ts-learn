import { useGame } from "../Lesson 6/GameContext";

export function HealthBar() {
    const { health, takeDamage, heal } = useGame();
    const maxHealth = 100;

    const percentage = (health / maxHealth) * 100;

    return (
        <div style={{ width: "350px", margin: "0 auto" }}>
            <h3>Health: {health} / {maxHealth}</h3>

            <div
                style={{
                    width: "100%",
                    height: "20px",
                    backgroundColor: "#333",
                    borderRadius: "4px",
                    overflow: "hidden",
                    marginBottom: "10px"
                }}
            >
                <div
                    style={{
                        width: `${percentage}%`,
                        height: "100%",
                        backgroundColor: "#27ae60",
                        transition: "width 0.34s ease"
                    }}
                />
            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <button onClick={() => takeDamage(10)}>Take Damage (-10)</button>
                <button onClick={() => heal(10)}>Heal (+10)</button>
            </div>
        </div>
    );
}