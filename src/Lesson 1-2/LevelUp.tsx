import { useState } from 'react';

/// a simple component to demonstrate state management in React
export function LevelUp() {
    const [level, setLevel] = useState(0);
    return (
        <div>
            <p>Level: {level}</p>
            <button onClick={() => setLevel(level + 1)}>
                Level Up
            </button>
        </div>
    );
}