import { useGame } from "../../Lesson 6/GameContext";
import type { Spell } from "../../Lesson 7/GameLogic/spells";

export function SpellPanel() {
    const {
        spells,
        cooldowns,
        autoCastSpellId,
        selectedItem,
        setSelectedItem,
    } = useGame();

    return (
        <div className="space-y-2">
            <div className="grid grid-cols-4 gap-2">
                {spells.map((spell: Spell) => {
                    const cd = cooldowns[spell.id] || 0;
                    const isSelected = spell.id === (selectedItem as any)?.id;
                    const isAutoCast = spell.id === autoCastSpellId;

                    return (
                        <div
                            key={spell.id}
                            className={`bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-all cursor-pointer border-2 ${
                                isSelected ? 'border-purple-400' : isAutoCast ? 'border-blue-500' : 'border-transparent'
                            }`}
                            onClick={() => setSelectedItem(spell)}
                        >
                            <div className="relative w-10 h-10 bg-purple-900/50 rounded-lg flex items-center justify-center text-xl border border-purple-600 mx-auto">
                                {spell.icon}
                                {cd > 0 && (
                                    <div className="absolute inset-0 bg-black/70 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                                        {Math.ceil(cd / 1000)}s
                                    </div>
                                )}
                            </div>
                            <p className="text-xs text-center text-white mt-1 truncate">{spell.name}</p>
                            <p className="text-xs text-center text-blue-400">{spell.manaCost}✦</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}