import { useState } from 'react';

/// a simple component to demonstrate handling user input in React
export function ScoreInput() {
    const [score, setScore] = useState<number>(0);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setScore(Number(e.target.value));
    };

    return (
        <div>
            <h3>Score Input</h3>
            <input type="number" value={score} onChange={handleChange} />
            <p>Your Score: {score}</p>

            <p>This component will allow users to input their score.</p>
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