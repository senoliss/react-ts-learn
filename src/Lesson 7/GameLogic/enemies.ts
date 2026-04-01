import type { LootRarity } from "./lootTypes";
import type { Item } from "./types";


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
        items: Item[];
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
                
                weight: 70,
                items: [
                    {
                        rarity: "common",
                        id: "bone",
                        name: "Bone",
                        icon: "🦴",
                        type: "material",
                        amount: 1,
                        description: "A hardened bone from a creature's skeleton. Useful for crafting and kits.",
                        lore: "Old bones carry the memory of beasts and can be used in rune rituals.",
                    },
                    {
                        rarity: "common",
                        id: "cloth_scrap",
                        name: "Cloth Scrap",
                        icon: "🧵",
                        type: "material",
                        amount: 1,
                        description: "A small piece of cloth; useful for bandages or repairs.",
                        lore: "Torn from the tribe's flag during the goblin raid.",
                    }
                ]
            },
            {
                
                weight: 90,
                items: [
                    {
                        rarity: "common",
                        id: "lesser_health_potion",
                        name: "Lesser Health Potion",
                        icon: "🧪",
                        type: "consumable",
                        amount: 1,
                        description: "Restore a small amount of health instantly.",
                        lore: "A faint green fluid that bubbles with healing energy.",
                        effect: () => {
                            // Engine should resolve and apply this effect (e.g., restore health).
                        },
                    }
                ]
            },
            {
                weight: 8,
                items: [
                    {
                        rarity: "rare",
                        id: "goblin_ear",
                        name: "Goblin Ear",
                        icon: "👂",
                        type: "material",
                        amount: 1,
                        description: "A jagged goblin ear, valuable to collectors and potion makers.",
                        lore: "Some say wearing this while on a hunt brings a little extra luck.",
                    }
                ]
            },
            {
                weight: 2,
                items: [
                    {
                        rarity: "epic",
                        id: "goblin_lucky_charm",
                        name: "Goblin's Lucky Charm",
                        icon: "🍀",
                        type: "misc",
                        amount: 1,
                        description: "A trinket said to grant you better chances in battle.",
                        lore: "Crafted from bone, herb, and stolen gem by goblin warlocks.",
                        effect: () => {
                            // Add RNG bonus in engine logic if this item is equipped/used.
                        },
                    }
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
                weight: 65,
                items: [
                    {
                        rarity: "common",
                        id: "bone_fragment",
                        name: "Bone Fragment",
                        icon: "🦴",
                        type: "material",
                        amount: 1,
                        description: "A fragment of bone from skeletons. Scavenged for crafts.",
                    },
                    {
                        rarity: "common",
                        id: "rusty_nail",
                        name: "Rusty Nail",
                        icon: "🪛",
                        type: "material",
                        amount: 1,
                        description: "A corroded iron nail, useful in low-grade crafting and traps.",
                    }
                ]
            },
            {
                weight: 22,
                items: [
                    {
                        rarity: "uncommon",
                        id: "cracked_skull",
                        name: "Cracked Skull",
                        icon: "💀",
                        type: "material",
                        amount: 1,
                        description: "A piece of skull from a skeleton, valuable for dark crafting.",
                        lore: "Once a warrior, now turned to bone and forgotten.",
                    }
                ]
            },
            {
                weight: 10,
                items: [
                    {
                        rarity: "rare",
                        id: "ancient_ring",
                        name: "Ancient Ring",
                        icon: "💍",
                        type: "armor",
                        amount: 1,
                        stats: {
                            attack: 1,
                            defense: 0,
                            health: 0,
                        },
                        description: "An old ring imbued with ancient magic; increases senses.",
                        lore: "Once owned by a forgotten king, this ring still hums with power.",
                        effect: () => {
                            // equip/unequip effect should be interpreted by engine system.
                        },
                    }
                ]
            },
            {
                weight: 3,
                items: [
                    {
                        rarity: "epic",
                        id: "cursed_bone_charm",
                        name: "Cursed Bone Charm",
                        icon: "☠️",
                        type: "misc",
                        amount: 1,
                        description: "A bone charm that is both feared and prized for dangerous rituals.",
                        lore: "Some believe it binds spirits, others that it drains life.",
                    }
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
                weight: 70,
                items: [
                    {
                        rarity: "common",
                        id: "wolf_fur",
                        name: "Wolf Fur",
                        icon: "🐺",
                        type: "material",
                        amount: 1,
                        description: "Soft and warm fur, used in crafting light armor.",
                        lore: "Wolves don’t like being stripped of their coat, but this one was quick."
                    }
                ]
            },
            {
                weight: 22,
                items: [
                    {
                        rarity: "uncommon",
                        id: "sharp_fang",
                        name: "Sharp Fang",
                        icon: "🦷",
                        type: "material",
                        amount: 1,
                        description: "A fierce fang that still thrums with a beast's bite.",
                        lore: "Legends of a wolven shrine say this fang once raised the moonlight from the ground."
                    }
                ]
            },
            {
                weight: 7,
                items: [
                    {
                        rarity: "rare",
                        id: "wolf_pelt",
                        name: "Wolf Pelt",
                        icon: "🧥",
                        type: "armor",
                        amount: 1,
                        stats: { defense: 2, health: 5 },
                        description: "A thick pelt used for light but warm armor.",
                        lore: "Taken from the alpha, it offers both protection and pride."
                    }
                ]
            },
            {
                weight: 1,
                items: [
                    {
                        rarity: "epic",
                        id: "moon_blessed_fang",
                        name: "Moon-Blessed Fang",
                        icon: "🌙",
                        type: "material",
                        amount: 1,
                        description: "A fang infused with moon energy. A rare crafting component.",
                        lore: "It only appears once per lunar cycle from the wolf of the silver hill."
                    }
                ]
            }
        ]
    },

    // ---------------------------------------------------------
    // BANDIT
    // ---------------------------------------------------------
    {
        name: "Bandit",
        icon: "🐱‍👤",
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
                weight: 60,
                items: [
                    {
                        rarity: "common",
                        id: "coin_purse",
                        name: "Coin Purse",
                        icon: "🪙",
                        type: "misc",
                        amount: 3,
                        description: "A small bag of loose coins. Usually noisy and useful for trade.",
                        lore: "Stolen from a merchant cart on the crossroads, it still feels warm.",
                    },
                    {
                        rarity: "common",
                        id: "dirty_cloth",
                        name: "Dirty Cloth",
                        icon: "🧻",
                        type: "material",
                        amount: 1,
                        description: "Softer than it looks, used for cleaning or basic patchwork.",
                        lore: "Taken from the bandit's own shirt — grimy, but precious.",
                    }
                ]
            },
            {
                weight: 25,
                items: [
                    {
                        rarity: "uncommon",
                        id: "lockpick",
                        name: "Lockpick",
                        icon: "🗝️",
                        type: "misc",
                        amount: 1,
                        description: "A slender tool to open locks silently.",
                        lore: "Made from a broken horse bit, with a bit of thief's luck.",
                    }
                ]
            },
            {
                weight: 12,
                items: [
                    {
                        rarity: "rare",
                        id: "bandit_dagger",
                        name: "Bandit's Dagger",
                        icon: "🗡️",
                        type: "weapon",
                        amount: 1,
                        stats: { attack: 2 },
                        description: "A sharp dagger with a wisp of envenomed edge.",
                        lore: "Favored by rogues for quick strikes and escape.",
                        effect: () => {
                            // system should apply the dagger's bonus when equipped.
                        },
                    }
                ]
            },
            {
                weight: 3,
                items: [
                    {
                        rarity: "epic",
                        id: "shadow_hood",
                        name: "Shadow Hood",
                        icon: "🕶️",
                        type: "armor",
                        amount: 1,
                        stats: { defense: 2, health: 3 },
                        description: "A hood woven from shadows, gives the wearer improved evasion.",
                        lore: "Crafted in secret by a forgotten bandit clan.",
                        effect: () => {
                            // engine might grant stealth bonus when equipped.
                        },
                    }
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
                weight: 72,
                items: [
                    {
                        rarity: "common",
                        id: "imp_dust",
                        name: "Imp Dust",
                        icon: "✨",
                        type: "material",
                        amount: 1,
                        description: "Sparkling powder used in minor spells and potion recipes.",
                        lore: "Harvested from imp wings on a full moon.",
                    }
                ]
            },
            {
                weight: 20,
                items: [
                    {
                        rarity: "uncommon",
                        id: "cracked_imp_horn",
                        name: "Cracked Imp Horn",
                        icon: "🩸",
                        type: "material",
                        amount: 1,
                        description: "A horn shard with latent fire power.",
                        lore: "Imp horns are cursed but sought for infernal magic.",
                    }
                ]
            },
            {
                weight: 6,
                items: [
                    {
                        rarity: "rare",
                        id: "fire_essence",
                        name: "Fire Essence",
                        icon: "🔥",
                        type: "consumable",
                        amount: 1,
                        description: "A volatile spirit of flame that boosts fire spells.",
                        lore: "This molten core once burned in the pit of the imp's lair.",
                        effect: () => {
                            // engine-defined effect for fire damage buff.
                        },
                    }
                ]
            },
            {
                weight: 2,
                items: [
                    {
                        rarity: "epic",
                        id: "impwing_amulet",
                        name: "Impwing Amulet",
                        icon: "🧿",
                        type: "armor",
                        amount: 1,
                        stats: { defense: 1, mana: 5 },
                        description: "A charm that hums with fitted imp flight magic.",
                        lore: "Forged from the wings of an imp, it grants agility.",
                        effect: () => {
                            // engine-defined effect, e.g., +1 dodge or speed.
                        },
                    }
                ]
            }
        ]
    }
];