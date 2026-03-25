type HealthProps = {
    health: number;
    maxHealth: number;
    onDamage: () => void;
    onHeal: () => void;
};
        
export function HealthBar({health, maxHealth, onDamage, onHeal}: HealthProps) {


    const percentage = (health / maxHealth) * 100;

    return (
        <div style={{ width: "350px",margin: '0 auto' }}>
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
                <button onClick={onDamage}>Take Damage (-10)</button>
                <button onClick={onHeal}>Heal (+10)</button>
            </div>
        </div>
    );
}