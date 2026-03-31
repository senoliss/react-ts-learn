import { useState } from "react";
import { useGame } from "../../Lesson 6/GameContext";
import { Skull, Heart, Zap, FlaskRound, RefreshCw } from "lucide-react";

export function EnemyPanel() {
  const {
    enemy,
    log,
    health,
    maxHealth,
    mana,
    maxMana,
    gameMode,
    setGameMode,

    // ✅ Engine Actions (no UI logic needed)
    playerAttack,
    castSpell,
    heal,
    drinkPotion,
    spawnEnemy,
  } = useGame();

  const enemyHP = enemy.hp;
  const enemyMax = enemy.maxHP;

  const hpPct = (health / maxHealth) * 100;
  const manaPct = (mana / maxMana) * 100;
  const enemyPct = (enemyHP / enemyMax) * 100;

  return (
    <div className="flex flex-col h-full text-gray-200">

      {/* ✅ PLAYER HUD */}
      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-3xl">
            ⚔️
          </div>

          <div className="flex-1 space-y-3">

            {/* Health */}
            <div className="flex justify-between text-sm">
              <span className="text-white font-semibold">Health</span>
              <span className="text-green-400 font-semibold">
                {health} / {maxHealth}
              </span>
            </div>

            <div className="h-2 w-full bg-black/40 rounded overflow-hidden">
              <div
                className="h-full bg-red-500 transition-all"
                style={{ width: `${hpPct}%` }}
              />
            </div>

            {/* Mana */}
            <div className="flex justify-between text-sm">
              <span className="text-white font-semibold">Mana</span>
              <span className="text-blue-400 font-semibold">
                {mana} / {maxMana}
              </span>
            </div>

            <div className="h-2 w-full bg-black/40 rounded overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all"
                style={{ width: `${manaPct}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ COMBAT ARENA */}
      <div className="flex-1 relative bg-slate-900/30 rounded-lg border border-slate-700 p-10 mb-6 overflow-hidden flex justify-center items-center">

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.03) 10px, rgba(255,255,255,.03) 20px)",
          }}
        />

        {/* ✅ COMBAT LOG */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/70 p-3 rounded-lg border border-slate-700 max-h-28 overflow-y-auto text-sm">
          {log.slice(-5).map((entry: any, index: number) => (
            <div
              key={index}
              className={
                entry.type === "player"
                  ? "text-green-400"
                  : entry.type === "enemy"
                  ? "text-red-400"
                  : "text-yellow-400"
              }
              dangerouslySetInnerHTML={{ __html: entry.message }}
            />
          ))}
        </div>

        {/* ✅ ENEMY PANEL */}
        <div className="text-center z-10">
          <div className="text-8xl mb-4 animate-bounce">{enemy.icon}</div>

          <h2 className="text-2xl font-bold">{enemy.name}</h2>

          <div className="mt-2 flex justify-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${
                enemy.rarity === "boss"
                  ? "bg-red-600"
                  : enemy.rarity === "rare"
                  ? "bg-blue-600"
                  : enemy.rarity === "uncommon"
                  ? "bg-green-600"
                  : "bg-slate-600"
              }`}
            >
              {enemy.rarity}
            </span>

            <span className="text-yellow-400 text-sm font-semibold">
              Lvl {enemy.level}
            </span>
          </div>

          {/* Enemy HP */}
          <div className="w-72 mt-4 mx-auto">
            <div className="flex justify-between text-sm mb-1">
              <span>Health</span>
              <span className="text-red-400">
                {enemyHP} / {enemyMax}
              </span>
            </div>

            <div className="h-3 bg-black/40 rounded border border-red-500/30 overflow-hidden">
              <div
                className="h-full bg-red-500 transition-all"
                style={{ width: `${enemyPct}%` }}
              />
            </div>
          </div>

          {/* ✅ NEW ENEMY BUTTON */}
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

      {/* ✅ ACTION BAR */}
      <div className="bg-slate-900/70 border-t border-slate-700 p-4 flex justify-center gap-4">

        <CombatButton
          disabled={enemyHP <= 0 || health <= 0}
          onClick={playerAttack}
          color="bg-red-600 hover:bg-red-700"
        >
          <Skull /> Attack
        </CombatButton>

        <CombatButton
          disabled={mana < 15 || enemyHP <= 0}
          onClick={() => castSpell(15)}
          color="bg-purple-600 hover:bg-purple-700"
        >
          <Zap /> Fireball (15)
        </CombatButton>

        <CombatButton
          disabled={mana < 20 || health <= 0}
          onClick={() => heal(20)}
          color="bg-green-600 hover:bg-green-700"
        >
          <Heart /> Heal (20)
        </CombatButton>

        <CombatButton
          disabled={health <= 0}
          onClick={drinkPotion}
          color="bg-blue-600 hover:bg-blue-700"
        >
          <FlaskRound /> Potion
        </CombatButton>

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