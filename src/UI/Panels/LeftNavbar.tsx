import { Home, Swords, Map, Users, Settings, Hammer, TrendingUp, ShoppingBag, PawPrint, Wand2 } from 'lucide-react';
import { useGame } from '../../Lesson 6/GameContext';

export function LeftNavbar() {
    const { gameMode, setGameMode } = useGame();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'combat', label: 'Combat', icon: Swords },
    { id: 'crafting', label: 'Crafting', icon: Hammer },
    { id: 'skilltree', label: 'Skill Tree', icon: TrendingUp },
    { id: 'trading', label: 'Trading', icon: ShoppingBag },
    { id: 'pets', label: 'Pets', icon: PawPrint },
    { id: 'enchanting', label: 'Enchanting', icon: Wand2 },
    { id: 'map', label: 'Map', icon: Map },
    { id: 'party', label: 'Party', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-20 bg-slate-900 border-r border-slate-700 flex flex-col items-center py-6 gap-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = gameMode === item.id;

        return (
          <button
            key={item.id}
            onClick={() => setGameMode(item.id as any)}
            className={`w-14 h-14 rounded-lg flex items-center justify-center transition-all ${
              isActive
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
            }`}
            title={item.label}
          >
            <Icon size={24} />
          </button>
        );
      })}
    </div>
  );
}