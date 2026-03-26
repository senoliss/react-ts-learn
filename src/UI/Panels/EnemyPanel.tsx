import { useState } from "react";
import { useGame } from "../../Lesson 6/GameContext";

export function EnemyPanel() {
    const { enemy, log, health } = useGame();
    const [showLog, setShowLog] = useState(false);
    

    const percentage = (enemy.hp / enemy.maxHP) * 100;

    return (
        <div style={{ width: "350px", textAlign: "center" }}>
              
            {health <= 0 &&
                <p style={{ color: "red", fontWeight: "bold", marginBottom: "20px" }}>
                    Heal before fighting again.
                </p>
            }

            <h2>{enemy.name}</h2>
            <p>HP: {enemy.hp} / {enemy.maxHP}</p>
            <p>Attack Style: {enemy.attackStyle}</p>

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
                        backgroundColor: "#e74c3c",
                        transition: "width 0.3s ease"
                    }}
                />
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setShowLog(v => !v)}
                style={{
                    padding: "6px 12px",
                    marginBottom: "10px",
                    cursor: "pointer"
                }}
            >
                {showLog ? "Hide Combat Log ▲" : "Show Combat Log ▼"}
            </button>

            {/* Collapsible Combat Log */}
            {showLog && (
                <div
                    style={{
                        maxHeight: "150px",
                        overflowY: "auto",
                        textAlign: "left",
                        fontSize: "14px",
                        padding: "10px",
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: "6px",
                        border: "1px solid rgba(255,255,255,0.1)"
                    }}
                >
                    {log.length === 0 && <p>No recent actions...</p>}
                    
                    {log.map((entry: string, i: number) => (
                        <div 
                            key={i} 
                            style={{ marginBottom: "4px" }} 
                            dangerouslySetInnerHTML={{ __html: entry }}
                        />
                    ))}

                </div>
            )}
        </div>
    );
}