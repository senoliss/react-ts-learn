import {useGame} from "../Lesson 6/GameContext";

export function Score() {
    const { score, addScore } = useGame();

    return (
        <div style={{ width: "350px", margin: "0 auto" }}>
            <h3>Score: {score}</h3>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center"  }}>
                <button onClick={() => addScore(10)}>Gain Score (+10)</button>
                <button onClick={() => addScore(-score)}>Reset Score</button>

            </div>
        </div>
    );
}