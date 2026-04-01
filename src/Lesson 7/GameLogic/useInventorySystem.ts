import { useState } from "react";
import type { Item } from "./types";

export function useInventorySystem() {
    const [inventory, setInventory] = useState<Item[]>([]);

    const addItem = (item: Item) => {
        setInventory((prev) => {
            // check if stackable item exists
            const existing = prev.find(i => i.id === item.id);

            if (existing) {
                return prev.map(i =>
                    i.id === item.id
                        ? { ...i, amount: i.amount + item.amount }
                        : i
                );
            }

            return [...prev, item];
        });
    };

    const removeItem = (id: string) => {
        setInventory(prev => prev.filter(item => item.id !== id));
    };

    const useItem = (id: string, fn?: () => void) => {
        setInventory(prev => {
            return prev.flatMap(item => {
                if (item.id !== id) return [item];

                // call optional effect
                if(fn) fn();

                if (item.amount > 1) {
                    return { ...item, amount: item.amount - 1 };
                }

                return [];  //remopve item if amount is 1

            });
        });
    };

    return {
        inventory,
        addItem,
        removeItem,
        useItem
    };
}