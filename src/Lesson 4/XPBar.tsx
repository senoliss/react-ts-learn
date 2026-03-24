import { useState } from "react";

export function XPBar() {
    const [xp, setXp] = useState<number>(0);
    const maxXp = 100;

    const gainXp = () => setXp(x => Math.min(maxXp, x + 10));
    const spendXp = () => setXp(x => Math.max(0, x - 10));

    const percentage = (xp / maxXp) * 100;

    return (
        <div style={{ width: "350px", margin: '0 auto' }}>
            <h3>Experience Points: {xp} / {maxXp}</h3>

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
                        backgroundColor: "gold",
                        transition: "width 0.34s ease"
                    }}
                />
            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <button onClick={gainXp}>Gain XP (+10)</button>
                <button onClick={spendXp}>Spend XP (-10)</button>
            </div>
        </div>
    );
}