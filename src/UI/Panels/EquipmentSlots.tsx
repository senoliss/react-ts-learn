import { type Item, type Equipment } from "../../Lesson 7/GameLogic/types";

interface EquipmentSlotsProps {
  equipment: Equipment;
  onSelect: (item: Item) => void;
  selectedId?: string;
}

export function EquipmentSlots({ equipment, onSelect, selectedId }: EquipmentSlotsProps) {
  const slots: Array<{ key: keyof Equipment; label: string }> = [
    { key: "helmet", label: "Helmet" },
    { key: "amulet", label: "Amulet" },
    { key: "cape", label: "Cape" },
    { key: "weapon", label: "Weapon" },
    { key: "chest", label: "Chest" },
    { key: "offhand", label: "Off-Hand" },
    { key: "gloves", label: "Gloves" },
    { key: "legs", label: "Legs" },
    { key: "pet", label: "Pet" },
    { key: "ring1", label: "Ring" },
    { key: "boots", label: "Boots" },
    { key: "ring2", label: "Ring" },
    { key: "wings", label: "Wings" },
  ];

  const rarityColors = {
    common: "border-slate-600",
    uncommon: "border-green-600",
    rare: "border-blue-600",
    epic: "border-purple-600",
    legendary: "border-orange-600",
  };

  return (
    <div className="mb-4">
      <h3 className="text-white mb-4 text-sm uppercase tracking-wide">Equipment</h3>

      <div className="grid grid-cols-4 gap-2">
        {slots.map((slot) => {
          const item = equipment[slot.key];
          const isSelected = item && item.id === selectedId;

          return (
            <div key={slot.key}>

              <div
                onClick={() => item && onSelect(item)}
                className={`aspect-square rounded-lg border-2 
                    flex items-center justify-center bg-slate-800 
                    cursor-pointer transition-all hover:bg-slate-700
                    ${
                      item
                        ? `${rarityColors[item.rarity]} ${isSelected ? "ring-2 ring-purple-400" : ""}`
                        : "border-slate-700 border-dashed"
                    }`}
              >
                {item ? (
                  <span className="text-2xl">{item.icon}</span>
                ) : (
                  <span className="text-xs text-slate-600 text-center px-1">{slot.label}</span>
                )}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}