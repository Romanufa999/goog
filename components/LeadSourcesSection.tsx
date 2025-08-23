



import React from 'react';
import { YandexDirectIcon } from './icons/YandexDirectIcon';
import { TelegramBrandedIcon } from './icons/TelegramBrandedIcon';
import { AvitoIcon } from './icons/AvitoIcon';
import { SberIcon } from './icons/SberIcon';

const SourceCard: React.FC<{ icon: React.ReactNode, title: string, description: string, animationDelay: string, gradient: string, className?: string }> = ({ icon, title, description, animationDelay, gradient, className = '' }) => (
    <div 
        className={`bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border border-black/10 dark:border-white/10 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 opacity-0 animate-fade-in-up h-full flex flex-col justify-center ${className}`}
        style={{ animationDelay }}
    >
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 mb-4">
            {icon}
            <h3 className={`text-3xl font-bold bg-clip-text text-transparent ${gradient}`}>
                {title}
            </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
            {description}
        </p>
    </div>
);


const LeadSourcesSection: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center py-24 sm:py-32 p-4 overflow-hidden">
            <div className="relative z-10 text-center flex flex-col items-center max-w-5xl w-full">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight opacity-0 animate-fade-in-up">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 dark:from-gray-300 to-gray-900 dark:to-gray-500">
                        Откуда
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-amber-400 ml-4">
                        лиды?
                    </span>
                </h2>
                
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                    <SourceCard
                        className="lg:col-span-2"
                        icon={<YandexDirectIcon className="w-16 h-16 flex-shrink-0" />}
                        title="Яндекс.Директ"
                        gradient="bg-gradient-to-r from-yellow-400 to-amber-500"
                        description="Приводим горячих клиентов, которые уже ищут ваш товар или услугу в поиске Яндекса и на сайтах-партнерах."
                        animationDelay="0.2s"
                    />
                    <SourceCard
                        icon={<AvitoIcon className="w-16 h-16 flex-shrink-0" />}
                        title="Авито ADS"
                        gradient="bg-gradient-to-r from-purple-500 to-indigo-500"
                        description="Размещаем объявления на крупнейшей в России классифайд-платформе, привлекая пользователей, активно ищущих товары и услуги."
                        animationDelay="0.4s"
                    />
                     <SourceCard
                        className="lg:col-span-2"
                        icon={<TelegramBrandedIcon className="w-16 h-16 flex-shrink-0" />}
                        title="Telegram Ads"
                        gradient="bg-gradient-to-r from-cyan-400 to-blue-500"
                        description="Таргетируемся на активную и платежеспособную аудиторию в конкретных каналах, где обитают ваши потенциальные клиенты."
                        animationDelay="0.6s"
                    />
                    <SourceCard
                        icon={<SberIcon className="w-16 h-16 flex-shrink-0" />}
                        title="СБЕР ADS"
                        gradient="bg-gradient-to-r from-green-400 to-cyan-500"
                        description="Используем данные экосистемы Сбера для точного таргетинга на аудиторию с высоким покупательским потенциалом."
                        animationDelay="0.8s"
                    />
                </div>
            </div>
        </section>
    );
};

export default LeadSourcesSection;