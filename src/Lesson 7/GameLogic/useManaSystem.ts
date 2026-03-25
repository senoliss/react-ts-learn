import { useState } from 'react';

export function useManaSystem() {
    const [mana, setMana] = useState<number>(100);

    const castSpell = (cost: number) =>
        setMana(m => Math.max(0, m - cost));

    const regenMana = (amount: number) =>
        setMana(m => Math.min(100, m + amount));

    return {
        mana,
        castSpell,
        regenMana
    };
}