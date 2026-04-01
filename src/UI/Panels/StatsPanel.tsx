import { useGame } from "../../Lesson 6/GameContext";

export function StatsPanel() {
  const { maxHP, maxMana, damage } = useGame();

  const stats = [
    { label: "Max HP", value: maxHP },
    { label: "Max Mana", value: maxMana },
    { label: "Damage", value: damage },
  ];

  return (
    <div className="space-y-2">
      <h3 className="text-white mb-4">Character Stats</h3>
      {stats.map((stat) => (
        <div key={stat.label} className="bg-slate-800 p-3 rounded-lg flex justify-between items-center">
          <span className="text-white">{stat.label}</span>
          <span className="text-purple-400 font-mono">{stat.value}</span>
        </div>
      ))}
    </div>
  );
}
