import { type Item } from "../../Lesson 7/GameLogic/types";

interface InventoryGridProps {
  items: Item[];
  onSelect: (item: Item) => void;
  selectedId?: string;
}

export function InventoryGrid({ items, onSelect, selectedId }: InventoryGridProps) {
  const gridSize = 32;
  const filledSlots = items.slice(0, gridSize);
  const emptySlots = Array(gridSize - filledSlots.length).fill(null);

  const rarityColors = {
    common: "border-slate-600",
    uncommon: "border-green-600",
    rare: "border-blue-600",
    epic: "border-purple-600",
    legendary: "border-orange-600",
  };

  return (
    <div>
      <h3 className="text-white mb-3 text-sm uppercase tracking-wide">Inventory</h3>

      <div className="grid grid-cols-5 gap-2">
        {filledSlots.map((item) => {
          const isSelected = item.id === selectedId;

          return (
            <div
              key={item.id}
              onClick={() => onSelect(item)}
              className={`relative aspect-square rounded-lg border-2 
                  flex items-center justify-center bg-slate-800 cursor-pointer
                  transition-all hover:bg-slate-700 
                  ${rarityColors[item.rarity]} 
                  ${isSelected ? "ring-2 ring-purple-400" : ""}`}
            >
              <span className="text-2xl">{item.icon}</span>
              {item.amount > 1 && (
                <span className="absolute top-1 right-1 min-w-[1.25rem] h-5 rounded-full bg-black/70 text-[10px] font-bold text-white flex items-center justify-center px-1">
                  {item.amount}
                </span>
              )}
            </div>
          );
        })}

        {emptySlots.map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-slate-900 rounded-lg border-2 border-slate-800 border-dashed"
          />
        ))}
      </div>
    </div>
  );
}