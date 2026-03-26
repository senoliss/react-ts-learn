export type Item = {
    id: string;
    name: string;
    icon?: string;       // optional icon path
    type: "consumable" | "material" | "weapon" | "armor" | "misc";
    amount: number;      // stackable count
    description?: string;
    effect?: () => void; // optional on-use effect
};