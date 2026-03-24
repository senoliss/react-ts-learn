import {useState} from 'react';

/// a simple component to demonstrate handling user input in React
export function PlayerNameInput() {
    const [name, setName] = useState<string>('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <div>
            <h3>Enter Player Name:</h3>
            <input type="text" value={name} onChange={handleChange} />
            <p>Player Name: {name}</p>
            <br/>
            <p>In this component, we use a controlled input to manage the player's name.</p>
            <p>As you type, the state updates and the UI reflects the current name.</p>
        </div>
    );
}

// 1. Typing events
// React event types must include React.ChangeEvent<HTMLInputElement>
// 2. Controlled components
// State = single source of truth
// Input updates state → UI updates instantly