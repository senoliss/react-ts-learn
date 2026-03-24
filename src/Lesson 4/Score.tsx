import { useState } from 'react';

export function Score() {
    const [score, setScore] = useState<number>(0);

    // const gainScore = () => setScore(s => s + Math.floor(Math.random() * 10));
    const gainScore = () => setScore(s => s + 10);
    const resetScore = () => setScore(0);

    return (
        <div>
            <h3>Score: {score}</h3>
            <div>
                <button onClick={gainScore}>Gain Score (+10)</button>
                <button onClick={resetScore}>Reset Score</button>
            </div>
        </div>
    );
}


// It should:

// store a score (number) in state
// display an <input type="number" />
// update the score when the user types
// display a message:
//     Your Score: X

// HINT: You must convert input text (string) into a number using:
// Number(e.target.value)