import React from 'react';
import { AtSignIcon } from './icons/AtSignIcon';
import { UsersIcon } from './icons/UsersIcon';

const TargetingCard: React.FC<{ icon: React.ElementType, title: string, description: string, animationDelay: string }> = ({ icon: Icon, title, description, animationDelay }) => (
    <div className="flex items-start gap-4 p-6 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm rounded-2xl border border-black/10 dark:border-white/10 opacity-0 animate-fade-in-up" style={{ animationDelay }}>
        <div className="flex-shrink-0 w-12 h-12 bg-gray-200/50 dark:bg-gray-800/50 rounded-lg flex items-center justify-center">
            <Icon className="w-7 h-7 text-cyan-400" />
        </div>
        <div>
            <h3 className="font-bold text-xl text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>
        </div>
    </div>
);


const TelegramAds: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center py-24 sm:py-32 p-4">
      <div className="relative z-10 flex flex-col items-center max-w-4xl text-center">
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight opacity-0 animate-fade-in-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Telegram Ads:
          </span>
          <br />
          Таргетинг на конкурентов
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl opacity-0 animate-fade-in-up-delay-1">
            Мы предлагаем уникальные возможности для привлечения самой горячей аудитории — клиентов ваших прямых конкурентов.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <TargetingCard
                icon={AtSignIcon}
                title="Каналы конкурентов"
                description="Показываем вашу рекламу подписчикам определенных Telegram-каналов."
                animationDelay="0.2s"
            />
            <TargetingCard
                icon={UsersIcon}
                title="Аудитория конкурентов"
                description="Нацеливаемся на тех, кто посещал их сайты или даже звонил им."
                animationDelay="0.4s"
            />
        </div>

        <div className="mt-16 w-full max-w-4xl p-8 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10 rounded-3xl border-2 border-cyan-400/50 opacity-0 animate-fade-in-up-delay-3">
             <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                Еще раз: показывайте рекламу <span className="text-cyan-400">в каналах конкурентов</span>, или тем, кто им <span className="text-blue-400">звонил</span> или <span className="text-blue-400">заходил на сайт</span>.
            </h3>
        </div>

      </div>
    </section>
  );
};

export default TelegramAds;
