import React from 'react';
import { MenuItemCard, MenuItemProps } from './MenuItemCard';

interface MenuCategoryProps {
  title: string;
  items: MenuItemProps[];
}

export const MenuCategory: React.FC<MenuCategoryProps> = ({ title, items }) => {
  return (
    <section className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-3xl font-bold border-b-2 border-amber-400/50 pb-2 mb-8 text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <MenuItemCard key={index} {...item} animationDelay={index * 0.1} />
        ))}
      </div>
    </section>
  );
};
