import { useGame } from "../../Lesson 6/GameContext";

export function HomePanel() {
    const { setGameMode } = useGame();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Player Home</h1>
            <p>Welcome to your base. Manage inventory, prepare, then head into battle.</p>

            <button 
                onClick={() => setGameMode("combat")}
                style={{ padding: "10px 20px", marginTop: "20px" }}
            >
                Enter Combat
            </button>
        </div>
    );
}