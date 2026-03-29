import { type PlayerData } from '../../Lesson 7/GameLogic/types';
import { Swords, TrendingUp, Award, CheckCircle2, Coins, Package } from 'lucide-react';
import { Progress } from '../ui/progress';

interface HomeViewProps {
  playerData: PlayerData;
  onNavigate: (view: string) => void;
}

export function HomeView({ playerData, onNavigate }: HomeViewProps) {
  return (
    <div className="flex-1 flex">
      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Player HUD at top */}
        <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 mb-6">
          <div className="flex items-center gap-6 mb-6">
            {/* Character Avatar */}
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-4xl">
              ⚔️
            </div>

            {/* Player Info */}
            <div className="flex-1">
              <h2 className="text-2xl text-white mb-2">Hero of the Realm</h2>
              <div className="flex items-center gap-4">
                <span className="text-purple-400">Level {playerData.level}</span>
                <span className="text-slate-400">•</span>
                <span className="text-yellow-400 flex items-center gap-1">
                  <Coins className="w-4 h-4" />
                  {playerData.gold || 1250} Gold
                </span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-2xl text-red-400">⚔️</div>
                <div className="text-xs text-slate-400 mt-1">Attack</div>
                <div className="text-white">{playerData.attack || 45}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-blue-400">🛡️</div>
                <div className="text-xs text-slate-400 mt-1">Defense</div>
                <div className="text-white">{playerData.defense || 32}</div>
              </div>
            </div>
          </div>

          {/* Health, Mana, XP Bars */}
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="text-white">Health</span>
                <span className="text-green-400">{playerData.health} / {playerData.maxHealth}</span>
              </div>
              <Progress value={(playerData.health / playerData.maxHealth) * 100} className="h-3" />
            </div>

            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="text-white">Mana</span>
                <span className="text-blue-400">{playerData.mana} / {playerData.maxMana}</span>
              </div>
              <Progress value={(playerData.mana / playerData.maxMana) * 100} className="h-3 [&>div]:bg-blue-500" />
            </div>

            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="text-white">Experience</span>
                <span className="text-purple-400">{playerData.xp} / {playerData.maxXp}</span>
              </div>
              <Progress value={(playerData.xp / playerData.maxXp) * 100} className="h-3 [&>div]:bg-purple-500" />
            </div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-white mb-4 flex items-center gap-2">
              <Swords className="w-5 h-5 text-purple-400" />
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => onNavigate('combat')}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <Swords className="w-5 h-5" />
                Enter Combat
              </button>
              <button
                onClick={() => onNavigate('map')}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-all"
              >
                Explore Map
              </button>
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-all">
                Visit Shop
              </button>
            </div>
          </div>

          {/* Daily Quests */}
          <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-yellow-400" />
              Daily Quests
            </h3>
            <div className="space-y-3">
              <DailyQuest
                title="Defeat 5 enemies"
                progress={3}
                max={5}
                reward="50 XP"
              />
              <DailyQuest
                title="Complete a dungeon"
                progress={0}
                max={1}
                reward="100 XP"
              />
              <DailyQuest
                title="Use 10 skills"
                progress={7}
                max={10}
                reward="30 XP"
              />
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-orange-400" />
              Recent Achievements
            </h3>
            <div className="space-y-2">
              <Achievement
                icon="🏆"
                title="First Blood"
                description="Defeat your first enemy"
                unlocked={true}
              />
              <Achievement
                icon="⚔️"
                title="Warrior"
                description="Reach level 5"
                unlocked={false}
              />
              <Achievement
                icon="🔮"
                title="Spell Caster"
                description="Cast 50 spells"
                unlocked={false}
              />
            </div>
          </div>

          {/* Bank Storage */}
          <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-white mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-blue-400" />
              Bank Storage
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Store valuable items safely in your personal bank vault.
            </p>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {/* Bank slots preview */}
              {Array(8).fill(null).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-slate-800 rounded-lg border-2 border-slate-700 border-dashed flex items-center justify-center"
                >
                  {i < 2 && <span className="text-2xl">💎</span>}
                </div>
              ))}
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all text-sm">
              Open Bank (16 slots)
            </button>
          </div>
        </div>

        {/* Active Quests Summary */}
        <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 mt-6">
          <h3 className="text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            Active Quests
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <QuestCard
              title="Defeat the Goblin King"
              description="Progress through goblin territory and defeat their leader"
              progress="7/10 enemies defeated"
            />
            <QuestCard
              title="Gather Ancient Herbs"
              description="Collect rare herbs for the village healer"
              progress="3/5 moonflowers collected"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DailyQuest({ title, progress, max, reward }: { title: string; progress: number; max: number; reward: string }) {
  const isComplete = progress >= max;
  return (
    <div className="bg-slate-800 p-3 rounded-lg">
      <div className="flex justify-between items-start mb-2">
        <span className="text-white text-sm">{title}</span>
        <span className="text-yellow-400 text-xs">{reward}</span>
      </div>
      <div className="flex items-center gap-2">
        <Progress value={(progress / max) * 100} className="h-2 flex-1" />
        <span className={`text-xs ${isComplete ? 'text-green-400' : 'text-slate-400'}`}>
          {progress}/{max}
        </span>
      </div>
    </div>
  );
}

function Achievement({ icon, title, description, unlocked }: { icon: string; title: string; description: string; unlocked: boolean }) {
  return (
    <div className={`bg-slate-800 p-3 rounded-lg flex items-center gap-3 ${!unlocked && 'opacity-50'}`}>
      <div className="text-2xl">{icon}</div>
      <div className="flex-1">
        <div className="text-white text-sm">{title}</div>
        <div className="text-slate-400 text-xs">{description}</div>
      </div>
      {unlocked && <CheckCircle2 className="w-5 h-5 text-green-400" />}
    </div>
  );
}

function QuestCard({ title, description, progress }: { title: string; description: string; progress: string }) {
  return (
    <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-yellow-400">
      <div className="flex items-start gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2" />
        <div>
          <h4 className="text-white mb-1">{title}</h4>
          <p className="text-slate-400 text-sm">{description}</p>
        </div>
      </div>
      <div className="text-xs text-yellow-400 mt-2">{progress}</div>
    </div>
  );
}
