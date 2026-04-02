import { type Item, type Skill, type Quest } from '../../Lesson 7/GameLogic/types';
import type { Spell } from '../../Lesson 7/GameLogic/spells';
import { useGame } from '../../Lesson 6/GameContext';
import { applyItemEffect } from '../../Lesson 7/GameLogic/itemEffects';
import { Sword, Shield, Heart, Sparkles, Star, BookOpen } from 'lucide-react';

interface DetailPanelProps {
  selectedItem: Item | Skill | Quest | Spell | null;
  type: 'item' | 'skill' | 'quest' | 'spell' | null;
}

export function DetailPanel({ selectedItem, type }: DetailPanelProps) {
  if (!selectedItem || !type) {
    return (
      <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 h-full flex items-center justify-center">
        <p className="text-slate-500 text-center">
          Select a spell to set as Auto Cast, or pick an item/quest to view details
        </p>
      </div>
    );
  }

  if (type === 'item') {
    return <ItemDetail item={selectedItem as Item} />;
  }

  if (type === 'skill') {
    return <SkillDetail skill={selectedItem as Skill} />;
  }

  if (type === 'spell') {
    return <SpellDetail spell={selectedItem as Spell} />;
  }

  if (type === 'quest') {
    return <QuestDetail quest={selectedItem as Quest} />;
  }

  return null;
}

function ItemDetail({ item }: { item: Item }) {
  const { useItem, heal, regenMana, addLog } = useGame();

  const rarityColors = {
    common: 'text-slate-400 border-slate-600',
    uncommon: 'text-green-400 border-green-600',
    rare: 'text-blue-400 border-blue-600',
    epic: 'text-purple-400 border-purple-600',
    legendary: 'text-orange-400 border-orange-600',
  };

  const handleUseItem = () => {
    applyItemEffect(item.effectKey, item, {
      heal,
      regenMana,
      addLog,
    });

    useItem(item.id);
  };

  return (
    <div className={`bg-slate-800/50 rounded-lg p-6 border-2 ${rarityColors[item.rarity]} h-full`}>
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center text-4xl">
          {item.icon}
        </div>
        <div className="flex-1">
          <h3 className={`text-xl ${rarityColors[item.rarity].split(' ')[0]} mb-1`}>
            {item.name}
          </h3>
          <p className="text-sm text-slate-400 capitalize">{item.type} {item.slot ? `• ${item.slot}` : ''}</p>
          <p className="text-xs text-slate-500 capitalize mt-1">{item.rarity}</p>
        </div>
      </div>

      {/* Stats */}
      {item.stats && Object.keys(item.stats).length > 0 && (
        <div className="mb-6 space-y-2">
          <h4 className="text-sm text-slate-400 uppercase tracking-wide mb-3">Stats</h4>
          {item.stats.attack && (
            <div className="flex items-center gap-2 text-white">
              <Sword className="w-4 h-4 text-red-400" />
              <span>Attack: +{item.stats.attack}</span>
            </div>
          )}
          {item.stats.defense && (
            <div className="flex items-center gap-2 text-white">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Defense: +{item.stats.defense}</span>
            </div>
          )}
          {item.stats.health && (
            <div className="flex items-center gap-2 text-white">
              <Heart className="w-4 h-4 text-green-400" />
              <span>Health: +{item.stats.health}</span>
            </div>
          )}
          {item.stats.mana && (
            <div className="flex items-center gap-2 text-white">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Mana: +{item.stats.mana}</span>
            </div>
          )}
        </div>
      )}

      {/* Description */}
      <div className="mb-6">
        <h4 className="text-sm text-slate-400 uppercase tracking-wide mb-2">Description</h4>
        <p className="text-white leading-relaxed">{item.description}</p>
      </div>

      {/* Use/Equip button */}
      {item.effectKey && (
        <div className="mb-6">
          <button
            onClick={handleUseItem}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
          >
            Use Item
          </button>
        </div>
      )}

      {/* Lore */}
      {item.lore && (
        <div className="border-t border-slate-700 pt-4">
          <h4 className="text-sm text-slate-400 uppercase tracking-wide mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Lore
          </h4>
          <p className="text-slate-400 italic text-sm leading-relaxed">{item.lore}</p>
        </div>
      )}
    </div>
  );
}

function SkillDetail({ skill }: { skill: Skill }) {
  return (
    <div className="bg-slate-800/50 rounded-lg p-6 border-2 border-purple-600 h-full">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 bg-purple-900/50 rounded-lg flex items-center justify-center text-4xl border-2 border-purple-600">
          {skill.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl text-purple-400 mb-1">{skill.name}</h3>
          <p className="text-sm text-slate-400 capitalize">{skill.type} Skill</p>
          <p className="text-xs text-slate-500 mt-1">
            {skill.isUnlocked ? 'Unlocked' : `Unlocks at Level ${skill.unlockLevel}`}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-6 space-y-2">
        <h4 className="text-sm text-slate-400 uppercase tracking-wide mb-3">Stats</h4>
        {skill.manaCost !== undefined && (
          <div className="flex items-center gap-2 text-white">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Mana Cost: {skill.manaCost}</span>
          </div>
        )}
        {skill.damage && (
          <div className="flex items-center gap-2 text-white">
            <Sword className="w-4 h-4 text-red-400" />
            <span>Damage: {skill.damage}</span>
          </div>
        )}
        {skill.healing && (
          <div className="flex items-center gap-2 text-white">
            <Heart className="w-4 h-4 text-green-400" />
            <span>Healing: {skill.healing}</span>
          </div>
        )}
        {skill.cooldown && (
          <div className="flex items-center gap-2 text-white">
            <span>Cooldown: {skill.cooldown}s</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="mb-6">
        <h4 className="text-sm text-slate-400 uppercase tracking-wide mb-2">Description</h4>
        <p className="text-white leading-relaxed">{skill.description}</p>
      </div>

      {/* Lore */}
      {skill.lore && (
        <div className="border-t border-slate-700 pt-4">
          <h4 className="text-sm text-slate-400 uppercase tracking-wide mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Lore
          </h4>
          <p className="text-slate-400 italic text-sm leading-relaxed">{skill.lore}</p>
        </div>
      )}
    </div>
  );
}

function SpellDetail({ spell }: { spell: Spell }) {
  const { setAutoCastSpellId, autoCastSpellId, cooldowns } = useGame();
  const cd = cooldowns[spell.id] || 0;
  const isAutoCast = autoCastSpellId === spell.id;

  return (
    <div className="bg-slate-800/50 rounded-lg p-6 border-2 border-blue-600 h-full">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 bg-purple-900/50 rounded-lg flex items-center justify-center text-4xl border-2 border-purple-600">
          {spell.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl text-blue-400 mb-1">{spell.name}</h3>
          <p className={`text-sm capitalize ${spell.type === 'damage' ? 'text-red-400' : 'text-green-400'}`}>
            {spell.type === 'damage' ? '⚔️' : '💚'} {spell.type} spell
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-6 space-y-2">
        <h4 className="text-sm text-slate-400 uppercase tracking-wide mb-3">Stats</h4>
        <div className="flex items-center gap-2 text-white">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span>Mana Cost: {spell.manaCost}</span>
        </div>
        <div className="flex items-center gap-2 text-white">
          {spell.type === 'damage'
            ? <Sword className="w-4 h-4 text-red-400" />
            : <Heart className="w-4 h-4 text-green-400" />}
          <span>{spell.type === 'damage' ? 'Damage' : 'Healing'}: {spell.amount}</span>
        </div>
        <div className="flex items-center gap-2 text-white">
          <span>⏱ Cooldown: {spell.cooldown / 1000}s</span>
        </div>
        {cd > 0 && (
          <div className="flex items-center gap-2 text-orange-400">
            <span>⏳ On cooldown: {Math.ceil(cd / 1000)}s remaining</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="mb-6">
        <h4 className="text-sm text-slate-400 uppercase tracking-wide mb-2">Description</h4>
        <p className="text-white leading-relaxed">{spell.description}</p>
      </div>

      {/* Auto Cast button */}
      <button
        onClick={() => setAutoCastSpellId(spell.id)}
        className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${
          isAutoCast
            ? 'bg-blue-700 text-white border border-blue-400 cursor-default'
            : 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
        }`}
        disabled={isAutoCast}
      >
        {isAutoCast ? '✅ Auto Cast Active' : '🔁 Set as Auto Cast'}
      </button>
    </div>
  );
}

function QuestDetail({ quest }: { quest: Quest }) {
  const statusColors = {
    available: 'border-slate-600 text-slate-400',
    active: 'border-yellow-600 text-yellow-400',
    completed: 'border-green-600 text-green-400',
  };

  return (
    <div className={`bg-slate-800/50 rounded-lg p-6 border-2 ${statusColors[quest.status]} h-full`}>
      {/* Header */}
      <div className="mb-6">
        <h3 className={`text-xl ${statusColors[quest.status].split(' ')[1]} mb-2`}>
          {quest.name}
        </h3>
        <p className="text-xs text-slate-500 uppercase tracking-wide">{quest.status}</p>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h4 className="text-sm text-slate-400 uppercase tracking-wide mb-2">Description</h4>
        <p className="text-white leading-relaxed">{quest.description}</p>
      </div>

      {/* Objectives */}
      <div className="mb-6">
        <h4 className="text-sm text-slate-400 uppercase tracking-wide mb-3">Objectives</h4>
        <div className="space-y-2">
          {quest.objectives.map((objective, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2" />
              <p className="text-white">{objective}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rewards */}
      <div className="border-t border-slate-700 pt-4">
        <h4 className="text-sm text-slate-400 uppercase tracking-wide mb-3 flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-400" />
          Rewards
        </h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-white">
            <span>XP: {quest.rewards.xp}</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <span>Gold: {quest.rewards.gold}</span>
          </div>
          {quest.rewards.items && quest.rewards.items.length > 0 && (
            <div className="text-white">
              Items: {quest.rewards.items.map(item => item.name).join(', ')}
            </div>
          )}
        </div>
      </div>

      {/* Lore */}
      {quest.lore && (
        <div className="border-t border-slate-700 pt-4 mt-4">
          <h4 className="text-sm text-slate-400 uppercase tracking-wide mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Lore
          </h4>
          <p className="text-slate-400 italic text-sm leading-relaxed">{quest.lore}</p>
        </div>
      )}
    </div>
  );
}
