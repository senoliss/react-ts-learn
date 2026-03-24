import {useState} from 'react';

/// a simple component to demonstrate a mana bar in React
export function ManaBar() {
    const [mana, setMana] = useState<number>(100);

    const castSpell= () => setMana(m => Math.max(0, m - 15));
    const regenerateMana = () => setMana(m => Math.min(100, m + 10));

    return (
        <div>
            <h3>Mana: {mana} / 100</h3>
            <button onClick={castSpell}>Cast Spell (-15)</button>
            <button onClick={regenerateMana}>Regenerate Mana (+10)</button>
        </div>
    );
}