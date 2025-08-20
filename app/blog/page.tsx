import React from 'react';
import { ArticleCard } from '../../components/blog/ArticleCard';

const articles = [
    {
        category: "Яндекс.Директ",
        title: "Мастер-класс по Яндекс.Директ: от семантики до автостратегий в 2024",
        excerpt: "Пошаговое руководство по созданию кампаний, которые работают. Разбираем сбор ядра, создание убойных объявлений и выбор оптимальных стратегий.",
        image: "https://via.placeholder.com/400x225/fbbf24/171717?text=Директ+2024"
    },
    {
        category: "Telegram Ads",
        title: "Гайд по запуску рекламы в Telegram Ads",
        excerpt: "Все, что нужно знать для старта: от минимального бюджета и модерации до анализа каналов и создания креативов, которые цепляют.",
        image: "https://via.placeholder.com/400x225/38bdf8/171717?text=Telegram+Ads"
    },
    {
        category: "Аналитика",
        title: "За гранью CTR: Как сквозная аналитика удваивает ROI",
        excerpt: "Перестаньте считать только клики. Настраиваем сквозную аналитику, отслеживаем путь клиента и понимаем, какая реклама приносит деньги.",
        image: "https://via.placeholder.com/400x225/34d399/171717?text=Аналитика+ROI"
    },
    {
        category: "Стратегия",
        title: "Performance-маркетинг: построение стратегии на результат",
        excerpt: "Забудьте о размытых KPI. Учимся ставить бизнес-цели, определять целевые действия и строить маркетинг, где каждый рубль на счету.",
        image: "https://via.placeholder.com/400x225/a78bfa/171717?text=Стратегия"
    },
     {
        category: "Кейс",
        title: "Кейс: Увеличили продажи на 150% за 3 месяца для e-commerce",
        excerpt: "Реальный пример нашей работы. Как с помощью комплексного подхода (Директ + Telegram) мы достигли взрывного роста для клиента.",
        image: "https://via.placeholder.com/400x225/f472b6/171717?text=Кейс:+150%25"
    },
    {
        category: "Контент-маркетинг",
        title: "Контент, который продает: как привлекать органический трафик",
        excerpt: "SEO - это не только ссылки. Показываем, как анализ запросов и создание экспертного контента могут стать источником бесплатных лидов.",
        image: "https://via.placeholder.com/400x225/60a5fa/171717?text=Контент"
    }
];

export default function BlogPage() {
    return (
        <div className="pt-24 sm:pt-32 pb-16 px-4 sm:px-8 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12 md:mb-16 opacity-0 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                           Наш Блог
                        </span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Делимся опытом, инсайтами и полезными материалами из мира digital-маркетинга.
                    </p>
                </header>

                <main>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                           <ArticleCard key={index} {...article} animationDelay={index * 0.1} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};