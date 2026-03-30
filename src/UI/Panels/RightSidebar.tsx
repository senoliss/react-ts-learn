import { useState } from "react";
import { Backpack, BookOpen, Target, ScrollText } from "lucide-react";

import { useGame } from "../../Lesson 6/GameContext";
import { EquipmentSlots } from "./EquipmentSlots";
import { InventoryGrid } from "./InventoryGrid";
import { DetailPanel } from "./DetailPanel";

/** Tabs available on the sidebar */
const tabs = [
  { id: "inventory", label: "Inventory", icon: Backpack },
  { id: "skills", label: "Skills", icon: BookOpen },
  { id: "quests", label: "Quests", icon: ScrollText },
  { id: "stats", label: "Stats", icon: Target },
];

export function RightSidebar() {
  const {
    inventory,
    equipment,
    skills,
    quests,
    selectedItem,
    setSelectedItem,
  } = useGame();

  const [activeTab, setActiveTab] = useState<"inventory" | "skills" | "quests" | "stats">(
    "inventory"
  );

  const selectedType =
    selectedItem?.type === "item"
      ? "item"
      : selectedItem?.type === "skill"
      ? "skill"
      : selectedItem?.type === "quest"
      ? "quest"
      : null;

  return (
    <div className="w-[600px] bg-slate-900 border-l border-slate-700 flex">
      {/* LEFT: Tabs + content */}
      <div className="w-[320px] border-r border-slate-700 flex flex-col">

        {/* TAB BUTTONS */}
        <div className="flex border-b border-slate-700">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 px-3 py-3 flex items-center justify-center gap-1 transition-all ${
                  isActive
                    ? "bg-slate-800 text-purple-400 border-b-2 border-purple-400"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <Icon className="w-4 h-4" />
              </button>
            );
          })}
        </div>

        {/* TAB CONTENT */}
        <div className="flex-1 p-3 overflow-y-auto">
          {activeTab === "inventory" && (
            <div className="space-y-4">
              <EquipmentSlots
                equipment={equipment}
                onSelect={setSelectedItem}
                selectedId={
                  selectedType === "item" ? (selectedItem as any)?.id : undefined
                }
              />

              <InventoryGrid
                items={inventory}
                onSelect={setSelectedItem}
                selectedId={
                  selectedType === "item" ? (selectedItem as any)?.id : undefined
                }
              />
            </div>
          )}

          {activeTab === "skills" && (
            <SkillsContent
              skills={skills}
              onSelect={setSelectedItem}
              selectedId={
                selectedType === "skill" ? (selectedItem as any)?.id : undefined
              }
            />
          )}

          {activeTab === "quests" && (
            <QuestsContent
              quests={quests}
              onSelect={setSelectedItem}
              selectedId={
                selectedType === "quest" ? (selectedItem as any)?.id : undefined
              }
            />
          )}

          {activeTab === "stats" && <StatsContent />}
        </div>
      </div>

      {/* RIGHT: DETAILS PANEL */}
      <div className="flex-1 p-4">
        <DetailPanel selectedItem={selectedItem} />
      </div>
    </div>
  );
}

