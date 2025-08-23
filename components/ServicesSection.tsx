

import React from 'react';
import { SeoIcon } from './icons/SeoIcon';
import { PpcIcon } from './icons/PpcIcon';
import { AnalyticsIcon } from './icons/AnalyticsIcon';
import { SmmIcon } from './icons/SmmIcon';
import Link from 'next/link';

const services = [
    {
        icon: SeoIcon,
        title: "SEO-оптимизация",
        description: "Поднимем ваш сайт в топ поисковой выдачи по ключевым запросам, увеличив органический трафик."
    },
    {
        icon: PpcIcon,
        title: "Контекстная реклама",
        description: "Настроим и запустим эффективные рекламные кампании в Яндекс.Директ и Google Ads для быстрых продаж."
    },
    {
        icon: AnalyticsIcon,
        title: "Веб-аналитика",
        description: "Проанализируем поведение пользователей на сайте, найдем точки роста и повысим конверсию."
    },
    {
        icon: SmmIcon,
        title: "SMM-продвижение",
        description: "Создадим и реализуем стратегию продвижения вашего бренда в социальных сетях для роста лояльности."
    },
     {
        icon: SeoIcon,
        title: "SEO-оптимизация 2",
        description: "Поднимем ваш сайт в топ поисковой выдачи по ключевым запросам, увеличив органический трафик."
    },
];

const ServicesSection: React.FC = () => {
    return (
        <section className="relative flex flex-col justify-center py-24 sm:py-32 p-4 sm:p-8 overflow-hidden">
            <div className="relative z-10 w-full max-w-6xl mx-auto">
                <div className="text-center mb-12">
                     <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight opacity-0 animate-fade-in-up">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
                            Наши Услуги
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto opacity-0 animate-fade-in-up-delay-1">
                        Комплексный подход к продвижению вашего бизнеса в цифровом пространстве.
                    </p>
                </div>

                <div className="flex space-x-6 lg:space-x-8 pb-8 -mx-4 px-4 sm:-mx-8 sm:px-8 overflow-x-auto no-scrollbar snap-x snap-mandatory">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={index} 
                                href="/contacts"
                                className="text-left flex-shrink-0 w-80 snap-start bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-black/10 dark:border-white/10 group hover:border-teal-400/50 transition-colors duration-300 opacity-0 animate-fade-in-up"
                                style={{animationDelay: `${0.1 * (index + 2)}s`}}
                            >
                                <div className="mb-4 text-teal-400 dark:text-teal-300">
                                   <Icon className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;