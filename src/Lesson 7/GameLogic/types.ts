import type { LootRarity } from "./lootTypes";

export type Item = {
    rarity: LootRarity;
    id: string;
    name: string;
    icon?: string;       // optional icon path
    type: "consumable" | "material" | "weapon" | "armor" | "misc";
    amount: number;      // stackable count
    description?: string;
    effect?: () => void; // optional on-use effect

  // Figma UI expects these:
    slot?: "helmet" | "chest" | "legs" | "boots" | "gloves" |
          "ring1" | "ring2" | "amulet" | "cape" | "pet" |
          "wings" | "weapon" | "offhand";

    stats?: {
      attack?: number;
      defense?: number;
      health?: number;
      mana?: number;
    };

    lore?: string;

};


// export interface Item1 {
//   id: string;
//   name: string;
//   type: 'weapon' | 'armor' | 'consumable' | 'material' | 'quest';
//   slot?: 'helmet' | 'chest' | 'legs' | 'boots' | 'gloves' | 'ring1' | 'ring2' | 'amulet' | 'cape' | 'pet' | 'wings' | 'weapon' | 'offhand';
//   rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
//   icon: string;
//   stats?: {
//     attack?: number;
//     defense?: number;
//     health?: number;
//     mana?: number;
//   };
//   description: string;
//   lore?: string;
// }

export interface Skill {
  id: string;
  name: string;
  type: 'active' | 'passive';
  manaCost?: number;
  cooldown?: number;
  damage?: number;
  healing?: number;
  icon: string;
  description: string;
  lore?: string;
  unlockLevel: number;
  isUnlocked: boolean;
}

export interface Quest {
  id: string;
  name: string;
  description: string;
  objectives: string[];
  rewards: {
    xp: number;
    gold: number;
    items?: Item[];
  };
  status: 'available' | 'active' | 'completed';
  lore?: string;
}

export interface PlayerData {
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  level: number;
  xp: number;
  maxXp: number;
  gold?: number;
  attack?: number;
  defense?: number;
}

export interface Equipment {
  helmet?: Item;
  chest?: Item;
  legs?: Item;
  boots?: Item;
  gloves?: Item;
  ring1?: Item;
  ring2?: Item;
  amulet?: Item;
  cape?: Item;
  pet?: Item;
  wings?: Item;
  weapon?: Item;
  offhand?: Item;
}
