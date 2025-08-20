import React from 'react';
import { ToggleIcon } from './icons/ToggleIcon';
import { PillsIllustration } from './PillsIllustration';

const benefits = [
    {
        title: "Создайте свою механику",
        description: "Вы сможете настраивать и кастомизировать механики для различных активностей вместе с нашей командой."
    },
    {
        title: "Установите награду",
        description: "Выберите вознаграждение для лучших участников вашей программы лояльности или игровых механик."
    },
    {
        title: "Размещение",
        description: "Привлекайте органических пользователей или создайте White Label решение для своей платформы."
    },
    {
        title: "Кросс-маркетинг",
        description: "Сотрудничайте с нами в маркетинговых активностях и мероприятиях. Откройте новые возможности для роста."
    }
];

const BenefitsSection: React.FC = () => {
    return (
        <section className="relative flex items-center justify-center py-24 sm:py-32 p-4 sm:p-8 overflow-hidden">
            <div className="relative z-10 w-full max-w-6xl mx-auto bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-black/10 dark:border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                    {/* Left side: Title */}
                    <div className="flex flex-col justify-center text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight opacity-0 animate-fade-in-up">
                            Тонкая настройка и <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
                                маркетинговые преимущества
                            </span>
                        </h2>
                    </div>

                    {/* Right side: Benefits Grid & Illustration */}
                    <div className="relative">
                        <PillsIllustration />
                        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8">
                           {benefits.map((benefit, index) => (
                                <div key={index} className={`opacity-0 animate-fade-in-up`} style={{animationDelay: `${0.2 * (index + 1)}s`}}>
                                    <ToggleIcon className="w-10 h-10 mb-3" />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
                                </div>
                           ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
