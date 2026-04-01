import { useState } from "react";
import { useGame } from "../../Lesson 6/GameContext";
import { Skull, Heart, Zap, FlaskRound, RefreshCw } from "lucide-react";
import { Progress } from "../progress";

export function CombatView() {
  const {
    enemy,
    log,
    health,
    maxHP,
    mana,
    maxMana,
    gameMode,
    setGameMode,

    // ✅ Engine Actions (no UI logic needed)
    playerAttack,
    castSpell,
    heal,
    regenMana,
    spawnEnemy,
  } = useGame();

  const enemyHP = enemy.hp;
  const enemyMax = enemy.maxHP;

  const hpPct = (health / maxHP) * 100;
  const manaPct = (mana / maxMana) * 100;
  const enemyPct = (enemyHP / enemyMax) * 100;

  return (
    <div className="flex-1 flex flex-col min-h-0">

      {/* Combat Arena */}
      <div className="flex-1 min-h-0 overflow-y-auto p-8 flex flex-col gap-6">
        {/* PLAYER HUD */}
        <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
          <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-2xl">
                ⚔️
                </div>

                <div className="flex-1 space-y-2">
                {/* HEALTH BAR */}
                <div className="flex justify-between items-center">
                    <span className="text-white">Health</span>
                    <span className="text-green-400 text-sm">{health} / {maxHP}</span>
                </div>
                <Progress value={(health / maxHP) * 100} className="h-2 [&>div]:bg-green-500" />
                
                {/* MANA BAR */}
                <div className="flex justify-between items-center">
                    <span className="text-white text-sm">Mana</span>
                    <span className="text-blue-400 text-sm">{mana} / {maxMana}</span>
                </div>
                <Progress value={(mana / maxMana) * 100} className="h-2 [&>div]:bg-blue-500" />
                
                </div>
            </div>
        </div>

        {/* ✅ COMBAT ARENA */}
        <div className="flex-1 bg-slate-900/30 rounded-lg p-8 border border-slate-700 mb-6 flex items-center justify-center relative overflow-hidden">
          
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.03) 10px, rgba(255,255,255,.03) 20px)' }} />
            </div>

            {/* ✅ COMBAT LOG */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 rounded-lg p-4 border border-slate-700 max-h-32 overflow-y-auto">
                <div className="space-y-1 text-sm text-white">            {log.length === 0 && <p>No recent actions...</p>}
                {log.length === 0 && <p>No recent actions...</p>}
                {log.map((entry: string, i: number) => (
                        <div 
                            key={i} 
                            style={{ marginBottom: "4px" }} 
                            dangerouslySetInnerHTML={{ __html: entry }}
                        />
                    ))}
                </div>
            </div>

            {/* ✅ ENEMY PANEL */}
            <div className="text-center">
            <div className="text-8xl mb-4 animate-bounce">{enemy.icon}</div>

            <h3 className="text-2xl text-white mb-2">{enemy.name}</h3>

            <div className="flex items-center justify-center gap-2 mb-4">
                {/* If enemy would have rarity then can add it here like this: */}
                <span className={`px-3 py-1 rounded-full text-xs ${
                    enemy.rarity === 'boss' ? 'bg-red-600 text-white' :
                    enemy.rarity === 'rare' ? 'bg-blue-600 text-white' :
                    enemy.rarity === 'uncommon' ? 'bg-green-600 text-white' :
                    'bg-slate-600 text-white'
                    }`}>
                    {enemy.rarity ?? "COMMON"}
                </span>

                <span className="text-yellow-400 text-sm font-semibold">
                Lvl {enemy.level} 1
                </span>
            </div>

            {/* Enemy HP */}
            <div className="w-64 mx-auto">
                <div className="flex justify-between mb-1 text-sm">
                <span className="text-white">Health</span>
                <span className="text-red-400">{enemyHP} / {enemyMax}</span>
              </div>
              <Progress value={(enemyHP / enemyMax) * 100} className="h-3 [&>div]:bg-red-500" />
            </div>

            {/*  NEW ENEMY BUTTON - QUESTION IF THIS IS EVEN NEEDED*/}
            {enemyHP <= 0 && (
                <button
                onClick={spawnEnemy}
                className="mt-4 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg flex items-center gap-2 mx-auto"
                >
                <RefreshCw size={16} />
                New Enemy
                </button>
            )}
            </div>
        </div>
      </div>

      {/* ✅ ACTION buttons (sticky bottom, full width) */}
      <div className="sticky bottom-0 z-10 bg-slate-900 border-t border-slate-700">
        <div className="p-4 flex gap-3 justify-center">
          <button
            disabled={enemyHP <= 0 || health <= 0}
            onClick={() => playerAttack(10)}
            className="bg-red-600 hover:bg-red-700 disabled:bg-slate-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg transition-all flex items-center gap-2 min-w-[140px] justify-center"
          >
            <Skull /> Attack
          </button>

          <button
            disabled={mana < 15 || enemyHP <= 0}
            onClick={() => castSpell(15)}
            className="bg-purple-600 hover:bg-purple-700 disabled:bg-slate-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg transition-all flex items-center gap-2 min-w-[140px] justify-center"
          >
            <Zap /> Fireball (15)
          </button>

          <button
            disabled={mana < 20 || health <= 0}
            onClick={() => heal(20)}
            className="bg-green-600 hover:bg-green-700 disabled:bg-slate-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg transition-all flex items-center gap-2 min-w-[140px] justify-center"
          >
            <Heart /> Heal (20)
          </button>

          <button
            disabled={health <= 0}
            onClick={() => regenMana(20)}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg transition-all flex items-center gap-2 min-w-[140px] justify-center"
          >
            <FlaskRound /> Potion
          </button>
        </div>
      </div>
    </div>
  );
}

function CombatButton({ disabled, onClick, color, children }: any) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${color} px-6 py-3 rounded-lg font-semibold flex items-center gap-2 min-w-[140px] justify-center 
        disabled:bg-slate-600 disabled:opacity-50`}
    >
      {children}
    </button>
  );
}