import React from 'react';
import { MenuCategory } from '../../components/menu/MenuCategory';
import { MenuItemProps } from '../../components/menu/MenuItemCard';

const appetizers: MenuItemProps[] = [
    {
        name: "Брускетта с томатами",
        description: "Хрустящий хлеб, свежие томаты, базилик, чеснок и оливковое масло.",
        price: "450",
        image: "https://via.placeholder.com/400x225/fca5a5/171717?text=Брускетта",
        tags: ["veg", "hit"]
    },
    {
        name: "Салат Цезарь",
        description: "Классический салат с куриной грудкой, пармезаном и гренками.",
        price: "650",
        image: "https://via.placeholder.com/400x225/fdba74/171717?text=Цезарь"
    },
    {
        name: "Тартар из лосося",
        description: "Нежный лосось с авокадо, каперсами и луком-шалот.",
        price: "890",
        image: "https://via.placeholder.com/400x225/f9a8d4/171717?text=Тартар",
        tags: ["new"]
    },
];

const mainCourses: MenuItemProps[] = [
    {
        name: "Стейк Рибай",
        description: "Сочный стейк из мраморной говядины с перечным соусом.",
        price: "2100",
        image: "https://via.placeholder.com/400x225/ef4444/171717?text=Стейк",
        tags: ["hit"]
    },
    {
        name: "Паста Карбонара",
        description: "Спагетти с беконом, сливочным соусом, желтком и пармезаном.",
        price: "750",
        image: "https://via.placeholder.com/400x225/facc15/171717?text=Паста"
    },
    {
        name: "Том Ям",
        description: "Острый тайский суп с креветками, грибами и лемонграссом.",
        price: "820",
        image: "https://via.placeholder.com/400x225/fb923c/171717?text=Том+Ям",
        tags: ["spicy", "new"]
    },
    {
        name: "Ризотто с грибами",
        description: "Кремовое ризотто с белыми грибами и трюфельным маслом.",
        price: "790",
        image: "https://via.placeholder.com/400x225/d4d4d8/171717?text=Ризотто",
        tags: ["veg"]
    },
];

const desserts: MenuItemProps[] = [
     {
        name: "Чизкейк Нью-Йорк",
        description: "Классический чизкейк на песочной основе с ягодным соусом.",
        price: "450",
        image: "https://via.placeholder.com/400x225/f5d0fe/171717?text=Чизкейк",
        tags: ["hit"]
    },
    {
        name: "Тирамису",
        description: "Воздушный итальянский десерт с кофе и сыром маскарпоне.",
        price: "480",
        image: "https://via.placeholder.com/400x225/a5b4fc/171717?text=Тирамису"
    },
];


export default function MenuPage() {
    return (
        <div className="pt-24 sm:pt-32 pb-16 px-4 sm:px-8 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12 md:mb-16 opacity-0 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                            Наше Меню
                        </span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Откройте для себя мир вкусов, созданный нашими поварами с любовью и мастерством.
                    </p>
                </header>

                <main className="space-y-16">
                    <MenuCategory title="Закуски и Салаты" items={appetizers} />
                    <MenuCategory title="Основные Блюда" items={mainCourses} />
                    <MenuCategory title="Десерты" items={desserts} />
                </main>
            </div>
        </div>
    );
};