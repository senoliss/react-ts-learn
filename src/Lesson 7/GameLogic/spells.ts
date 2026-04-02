export type Spell = {
    id: string;
    name: string;
    icon: string;
    manaCost: number;
    cooldown: number;     // milliseconds
    description: string;
    type: "damage" | "heal";
    amount: number;       // damage or healing amount
};

export const SPELLS: Spell[] = [
    {
        id: "air-gush",
        name: "Air Gush",
        icon: "💨",
        manaCost: 5,
        cooldown: 1000,
        type: "damage",
        amount: 8,
        description: "A basic gust of wind that deals 8 damage."
    },
    {
        id: "fireball",
        name: "Fireball",
        icon: "🔥",
        manaCost: 20,
        cooldown: 3000,
        type: "damage",
        amount: 25,
        description: "Launches a fireball that deals 25 damage."
    },

    {
        id: "ice-lance",
        name: "Ice Lance",
        icon: "❄️",
        manaCost: 15,
        cooldown: 3000,
        type: "damage",
        amount: 18,
        description: "A sharp icicle that deals moderate damage."
    },

    {
        id: "greater-heal",
        name: "Greater Heal",
        icon: "✨",
        manaCost: 25,
        cooldown: 2500,
        type: "heal",
        amount: 30,
        description: "Heals yourself for 30 HP."
    },

    {
        id: "heal",
        name: "Heal",
        icon: "💚",
        manaCost: 15,
        cooldown: 3000,
        type: "heal",
        amount: 30,
        description: "Restores health to the player"
    },

    {
        id: "shield",
        name: "Shield",
        icon: "🛡️",
        manaCost: 10,
        cooldown: 3000,
        type: "heal",
        amount: 20,
        description: "Increases defense"
    },
];