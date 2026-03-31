import type { LootRarity } from "./lootTypes";


export type EnemyTemplate = {
    name: string;
    icon: string;
    maxHP: number;
    attackStyle: string;
    damageMin: number;
    damageMax: number;
    attackSpeed: number;
    flavor: string[];
    xpReward: number;

    lootTable: {
        rarity: LootRarity;
        items: {
            name: string;
            icon: string;
            amount: number;
            type?: string;
            effect?: () => void;
        }[];
        weight: number;
    }[];
};

export const ENEMIES: EnemyTemplate[] = [
    // ---------------------------------------------------------
    // GOBLIN
    // ---------------------------------------------------------
    {
        name: "Goblin",
        icon: "👹",
        maxHP: 50,
        attackStyle: "slashes",
        damageMin: 2,
        damageMax: 5,
        attackSpeed: 1800,
        flavor: [
            "Goblin snarls and leaps!",
            "Goblin swings its dagger!",
            "Goblin lunges forward!"
        ],
        xpReward: 12,

        lootTable: [
            {
                rarity: "common",
                weight: 70,
                items: [
                    { name: "Bone", icon: "🦴", amount: 1 },
                    { name: "Cloth Scrap", icon: "🧵", amount: 1 }
                ]
            },
            {
                rarity: "uncommon",
                weight: 20,
                items: [
                    { name: "Lesser Health Potion", icon: "🧪", amount: 1, type: "consumable" } // need to add healing effect but idk should i do it here or in other place, because then need to import healing function from healt system
                ]
            },
            {
                rarity: "rare",
                weight: 8,
                items: [
                    { name: "Goblin Ear", icon: "👂", amount: 1 }
                ]
            },
            {
                rarity: "epic",
                weight: 2,
                items: [
                    { name: "Goblin's Lucky Charm", icon: "🍀", amount: 1 }
                ]
            }
        ]
    },

    // ---------------------------------------------------------
    // SKELETON
    // ---------------------------------------------------------
    {
        name: "Skeleton",
        icon: "💀",
        maxHP: 60,
        attackStyle: "strikes",
        damageMin: 3,
        damageMax: 7,
        attackSpeed: 2400,
        flavor: [
            "Bones clatter as the Skeleton attacks!",
            "Skeleton swings a rusted blade!",
            "A hollow thud echoes as Skeleton strikes!"
        ],
        xpReward: 18,

        lootTable: [
            {
                rarity: "common",
                weight: 65,
                items: [
                    { name: "Bone Fragment", icon: "🦴", amount: 1 },
                    { name: "Rusty Nail", icon: "🪛", amount: 1 }
                ]
            },
            {
                rarity: "uncommon",
                weight: 22,
                items: [
                    { name: "Cracked Skull", icon: "💀", amount: 1 }
                ]
            },
            {
                rarity: "rare",
                weight: 10,
                items: [
                    { name: "Ancient Ring", icon: "💍", amount: 1 }
                ]
            },
            {
                rarity: "epic",
                weight: 3,
                items: [
                    { name: "Cursed Bone Charm", icon: "☠️", amount: 1 }
                ]
            }
        ]
    },

    // ---------------------------------------------------------
    // WOLF
    // ---------------------------------------------------------
    {
        name: "Wolf",
        icon: "🐺",
        maxHP: 35,
        attackStyle: "bites",
        damageMin: 1,
        damageMax: 6,
        attackSpeed: 1500,
        flavor: [
            "Wolf leaps and bites!",
            "Wolf growls and lunges!",
            "Wolf snaps its jaws!"
        ],
        xpReward: 10,

        lootTable: [
            {
                rarity: "common",
                weight: 70,
                items: [
                    { name: "Wolf Fur", icon: "🐺", amount: 1 }
                ]
            },
            {
                rarity: "uncommon",
                weight: 22,
                items: [
                    { name: "Sharp Fang", icon: "🦷", amount: 1 }
                ]
            },
            {
                rarity: "rare",
                weight: 7,
                items: [
                    { name: "Wolf Pelt", icon: "🧥", amount: 1 }
                ]
            },
            {
                rarity: "epic",
                weight: 1,
                items: [
                    { name: "Moon-Blessed Fang", icon: "🌙", amount: 1 }
                ]
            }
        ]
    },

    // ---------------------------------------------------------
    // BANDIT
    // ---------------------------------------------------------
    {
        name: "Bandit",
        icon: "_BANDIT_",
        maxHP: 35,
        attackStyle: "slashes",
        damageMin: 2,
        damageMax: 8,
        attackSpeed: 2400,
        flavor: [
            "Bandit swings a rusty blade!",
            "Bandit lunges forward!",
            "Bandit slashes at you!"
        ],
        xpReward: 14,

        lootTable: [
            {
                rarity: "common",
                weight: 60,
                items: [
                    { name: "Coin Purse", icon: "🪙", amount: 3 },
                    { name: "Dirty Cloth", icon: "🧻", amount: 1 }
                ]
            },
            {
                rarity: "uncommon",
                weight: 25,
                items: [
                    { name: "Lockpick", icon: "🗝️", amount: 1 }
                ]
            },
            {
                rarity: "rare",
                weight: 12,
                items: [
                    { name: "Bandit's Dagger", icon: "🗡️", amount: 1 }
                ]
            },
            {
                rarity: "epic",
                weight: 3,
                items: [
                    { name: "Shadow Hood", icon: "🕶️", amount: 1 }
                ]
            }
        ]
    },

    // ---------------------------------------------------------
    // IMP
    // ---------------------------------------------------------
    {
        name: "Imp",
        icon: "👿",
        maxHP: 30,
        attackStyle: "scratches",
        damageMin: 1,
        damageMax: 3,
        attackSpeed: 1500,
        flavor: [
            "Imp flutters and scratches!",
            "Imp screeches and lunges!",
            "Imp snaps its jaws!"
        ],
        xpReward: 8,

        lootTable: [
            {
                rarity: "common",
                weight: 72,
                items: [
                    { name: "Imp Dust", icon: "✨", amount: 1 }
                ]
            },
            {
                rarity: "uncommon",
                weight: 20,
                items: [
                    { name: "Cracked Imp Horn", icon: "🩸", amount: 1 }
                ]
            },
            {
                rarity: "rare",
                weight: 6,
                items: [
                    { name: "Fire Essence", icon: "🔥", amount: 1 }
                ]
            },
            {
                rarity: "epic",
                weight: 2,
                items: [
                    { name: "Impwing Amulet", icon: "🧿", amount: 1 }
                ]
            }
        ]
    }
];