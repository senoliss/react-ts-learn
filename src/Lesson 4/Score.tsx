type ScoreProps = {
    score: number;
    onGainScore: () => void;
    onResetScore: () => void;
};

export function Score({ score, onGainScore, onResetScore }: ScoreProps) {
    return (
        <div style={{ width: "350px", margin: "0 auto" }}>
            <h3>Score: {score}</h3>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center"  }}>
                <button onClick={onGainScore}>Gain Score (+10)</button>
                <button onClick={onResetScore}>Reset Score</button>
            </div>
        </div>
    );
}