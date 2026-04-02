import { useGame } from "../../Lesson 6/GameContext";
import type { Spell } from "../../Lesson 7/GameLogic/spells";

export function SpellPanel() {
    const {
        spells,
        cooldowns,
        castSpell,
        mana,
        health,
        gameMode,
        selectedItem,
        setSelectedItem,
    } = useGame();


    return (
        <div className="space-y-2">
            <div className="grid grid-cols-4 gap-2">
                {spells.map((spell: Spell) => {
                    const cd = cooldowns[spell.id] || 0;
                    // Can only be cast in combat mode, and if player has enough mana, spell is unlocked, and player is alive
                    const canCast =
                        cd === 0 &&
                        mana >= spell.manaCost &&
                        health > 0 &&
                        gameMode === "combat";
                        
                    const isSelected = spell.id === (selectedItem as any)?.id;

                    return (
                        <div
                            key={spell.id}
                            className={`bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-all cursor-pointer border-2 ${
                                isSelected ? 'border-purple-400' : 'border-transparent'
                                }`}
                            onClick={() => setSelectedItem(spell)}
                        >
                            <div className="w-10 h-10 bg-purple-900/50 rounded-lg flex items-center justify-center text-xl border border-purple-600">{spell.icon}</div>
                            <button
                                className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white my-1 py-0.5 px-1.5 rounded-md text-sm cursor-pointer"
                                disabled={!canCast}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    castSpell(spell);
                                }}
                            >
                                {cd > 0 ? `${Math.ceil(cd / 1000)}s` : "Cast"}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}