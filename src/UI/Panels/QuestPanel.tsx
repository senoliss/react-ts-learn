import { useGame } from "../../Lesson 6/GameContext";
import type { Quest } from "../../Lesson 7/GameLogic/types";

export function QuestPanel() {
  const { quests, selectedItem, setSelectedItem } = useGame();

  const statusColors: Record<Quest['status'], string> = {
    available: "bg-slate-700 text-slate-400",
    active: "bg-yellow-900/30 text-yellow-400",
    completed: "bg-green-900/30 text-green-400",
  };

  return (
    <div className="space-y-2">
      {quests.map((quest: Quest) => {
        const isSelected = quest.id === (selectedItem as any)?.id;
        return (
          <div
            key={quest.id}
            onClick={() => setSelectedItem(quest)}
            className={`${statusColors[quest.status]} p-3 rounded-lg hover:opacity-90 transition-all cursor-pointer border-2 ${
              isSelected ? "border-yellow-400" : "border-transparent"
            }`}
          >
            <div className="flex items-start gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  quest.status === "active"
                    ? "bg-yellow-400"
                    : quest.status === "completed"
                    ? "bg-green-400"
                    : "bg-slate-400"
                } mt-2`}
              />
              <div className="flex-1">
                <div className="text-white mb-1 text-sm">{quest.name}</div>
                <div className="text-xs opacity-75 capitalize">{quest.status}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
