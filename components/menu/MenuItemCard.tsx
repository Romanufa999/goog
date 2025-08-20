import React from 'react';
import { SpicyIcon } from '../icons/SpicyIcon';
import { VegIcon } from '../icons/VegIcon';

export interface MenuItemProps {
  image: string;
  name: string;
  description: string;
  price: string;
  tags?: ('hit' | 'new' | 'spicy' | 'veg')[];
  animationDelay?: number;
}

const Tag: React.FC<{ type: 'hit' | 'new' | 'spicy' | 'veg' }> = ({ type }) => {
    const styles = {
        hit: 'bg-red-500 text-white',
        new: 'bg-blue-500 text-white',
        spicy: 'bg-orange-500 text-white',
        veg: 'bg-green-500 text-white',
    };
    const icons = {
        spicy: <SpicyIcon className="w-3 h-3" />,
        veg: <VegIcon className="w-3 h-3" />,
        hit: null,
        new: null
    };
    const text = {
        hit: 'Хит',
        new: 'Новинка',
        spicy: 'Острое',
        veg: 'Вегетарианское',
    }

    return (
        <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${styles[type]}`}>
            {icons[type]}
            <span>{text[type]}</span>
        </div>
    );
}

export const MenuItemCard: React.FC<MenuItemProps> = ({ image, name, description, price, tags, animationDelay = 0 }) => {
  return (
    <div 
        className="bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl p-4 border border-black/10 dark:border-white/10 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 opacity-0 animate-fade-in-up" 
        style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        {tags && tags.length > 0 && (
             <div className="absolute top-2 right-2 flex flex-col gap-2">
                {tags.map(tag => <Tag key={tag} type={tag} />)}
            </div>
        )}
      </div>
      <div className="flex justify-between items-start mb-1 gap-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-xl font-bold text-amber-500 flex-shrink-0">{price} ₽</p>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
