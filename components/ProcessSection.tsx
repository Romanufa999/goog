import React from 'react';
import { StrategyIcon } from './icons/StrategyIcon';
import { SetupIcon } from './icons/SetupIcon';
import { LaunchIcon } from './icons/LaunchIcon';
import { OptimizeIcon } from './icons/OptimizeIcon';
import { StrategyGraph } from './process/StrategyGraph';
import { SetupDashboard } from './process/SetupDashboard';
import { LaunchRocket } from './process/LaunchRocket';
import { OptimizationChart } from './process/OptimizationChart';

const processSteps = [
    {
        step: "01",
        title: "Стратегия и Анализ",
        description: "Глубоко погружаемся в ваш бизнес, анализируем конкурентов и целевую аудиторию, чтобы разработать выигрышную рекламную стратегию.",
        icon: StrategyIcon,
        visual: StrategyGraph,
    },
    {
        step: "02",
        title: "Настройка и Подготовка",
        description: "Создаем и настраиваем рекламные кампании, подбираем ключевые слова, пишем продающие объявления и готовим посадочные страницы.",
        icon: SetupIcon,
        visual: SetupDashboard,
    },
    {
        step: "03",
        title: "Запуск и Тестирование",
        description: "Запускаем кампании и проводим A/B тесты различных гипотез, чтобы найти самые эффективные связки для привлечения клиентов.",
        icon: LaunchIcon,
        visual: LaunchRocket,
    },
    {
        step: "04",
        title: "Оптимизация и Масштабирование",
        description: "Постоянно отслеживаем показатели, оптимизируем ставки, отключаем неэффективные объявления и масштабируем успешные решения.",
        icon: OptimizeIcon,
        visual: OptimizationChart,
    },
];

const ProcessSection: React.FC = () => {
    return (
        <div className="relative py-24 sm:py-32 px-4 sm:px-8 overflow-hidden">
            <div className="relative z-10 w-full max-w-6xl mx-auto">
                <div className="text-center mb-16">
                     <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight opacity-0 animate-fade-in-up">
                        Процесс Работы:
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-yellow-400">
                           От Идеи до Результата
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto opacity-0 animate-fade-in-up-delay-1">
                       Четыре простых шага для достижения ваших бизнес-целей с помощью digital-рекламы.
                    </p>
                </div>

                <div className="relative">
                    {/* Central timeline */}
                    <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-cyan-300/50 via-yellow-300/50 to-amber-300/50 -translate-x-1/2 rounded-full hidden lg:block"></div>

                    {processSteps.map((item, index) => {
                        const Icon = item.icon;
                        const Visual = item.visual;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={index} className="relative mb-16 lg:mb-32 flex flex-col lg:flex-row items-center justify-between">
                                {/* Content Block */}
                                <div className={`w-full lg:w-5/12 p-6 rounded-2xl opacity-0 animate-fade-in-up ${isEven ? 'lg:order-1' : 'lg:order-3'}`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex-shrink-0 text-cyan-400">
                                            <Icon className="w-10 h-10" />
                                        </div>
                                        <div>
                                            <span className="text-4xl font-black text-gray-300 dark:text-gray-700">{item.step}</span>
                                            <h3 className="text-2xl font-bold -mt-3">{item.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                </div>
                                
                                {/* Timeline Circle */}
                                <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-2 border-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                                   <div className="w-full h-full bg-yellow-400 rounded-full animate-pulse"></div>
                                </div>

                                {/* Visual Block */}
                                <div className={`w-full lg:w-5/12 h-64 flex items-center justify-center p-4 mt-4 lg:mt-0 opacity-0 animate-fade-in-up ${isEven ? 'lg:order-3' : 'lg:order-1'}`} style={{animationDelay: '0.2s'}}>
                                    <Visual />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;
