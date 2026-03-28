import { useState } from "react";

export function useStatsSystem() {
    const [maxHP, setMaxHp] = useState<number>(100);
    const [maxMana, setMaxMana] = useState<number>(50);
    const [damage, setDamage] = useState<number>(10);

    // Optional: we'll later add class multipliers here
    const classModifiers = {
        hpGrowth: 1.05,     // +5% HP per level
        manaGrowth: 1.05,   // +5% Mana per level
        dmgGrowth: 1.03,    // +3% Damage per level
    };

    const applyAutoLevelScaling = () => {
        setMaxHp(hp => Math.floor(hp * classModifiers.hpGrowth));
        setMaxMana(mana => Math.floor(mana * classModifiers.manaGrowth));
        setDamage(dmg => Math.floor(dmg * classModifiers.dmgGrowth));
    };

    return{
        maxHP,
        maxMana,
        damage,

        applyAutoLevelScaling,  // Future: allow applying class mulipliers dynamically
    }
}



// ✅ keeps XP system clean
// ✅ separates progression from experience
// ✅ future‑proof for classes
// ✅ easy to auto‑scale stats
// ✅ easy to modify when skill tree comes

// ✅ Why this is perfect:

// Pure scaling logic is isolated
// XP system doesn’t become bloated
// Player HUD continues reading maxHP, maxMana
// Combat system continues reading damage
// Changing growth values is trivial
// In the future we can do:
// if (class === "Warrior") hpGrowth = 1.10;
// if (class === "Mage") manaGrowth = 1.12;