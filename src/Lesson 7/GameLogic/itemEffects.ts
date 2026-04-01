import type { Item } from './types';

export type EffectContext = {
  heal: (amount: number) => void;
  regenMana?: (amount: number) => void;
  equipItem?: (item: Item) => void;
  addLog?: (message: string) => void;
};

export function applyItemEffect(effectKey: Item['effectKey'] | undefined, item: Item, context: EffectContext) {
  if (!effectKey || !context) return;

  switch (effectKey) {
    case 'heal_small':
      context.heal(20);
      context.addLog?.(`Used ${item.name}, restored 20 health.`);
      break;

    case 'heal_large':
      context.heal(60);
      context.addLog?.(`Used ${item.name}, restored 60 health.`);
      break;

    case 'equip_weapon':
      context.equipItem?.(item);
      context.addLog?.(`Equipped ${item.name}.`);
      break;

    case 'equip_armor':
      context.equipItem?.(item);
      context.addLog?.(`Equipped ${item.name}.`);
      break;

    case 'buff_attack':
      context.addLog?.(`${item.name} granted an attack buff.`);
      break;

    case 'buff_defense':
      context.addLog?.(`${item.name} granted a defense buff.`);
      break;

    default:
      context.addLog?.(`Used ${item.name}, but no effect is implemented for ${effectKey}.`);
      break;
  }
}
