import { useGame } from "../Lesson 6/GameContext";

export function HealthBar() {
    const { health, maxHP } = useGame();

    const percentage = (health / maxHP) * 100;

    return (
        <div style={{ width: "350px", margin: "0 auto" }}>
            <h3>Health: {health} / {maxHP}</h3>

            <div style={{
                width: "100%",
                height: "20px",
                backgroundColor: "#333",
                borderRadius: "4px",
                overflow: "hidden",
                marginBottom: "10px"
            }}>
                <div
                    style={{
                        width: `${percentage}%`,
                        height: "100%",
                        backgroundColor: "#27ae60",
                        transition: "width 0.34s ease"
                    }}
                />
            </div>
        </div>
    );
}