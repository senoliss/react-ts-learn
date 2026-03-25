import { useGame } from "../Lesson 6/GameContext";


export function XPBar() {
    const { xp, level, maxXp, gainXP } = useGame();

    const percentage = (xp / maxXp) * 100;

    return (
        <div style={{ width: "350px", margin: "0 auto" }}>
            <h3>Level: {level}</h3>
            <p>XP: {xp} / {maxXp}</p>

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
                        backgroundColor: "#f1c40f",
                        transition: "width 0.34s ease"
                    }}
                />
            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <button onClick={() => gainXP(20)}>Gain XP (+20)</button>
            </div>
        </div>
    );
}
