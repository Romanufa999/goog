

import React from 'react';
import { CrmAnimation } from './CrmAnimation';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const benefits = [
    { text: "Прозрачная аналитика" },
    { text: "Оптимизация конверсии" },
    { text: "Интеграция с CRM" },
];

const LeadsSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-4 pt-24 lg:pt-20 overflow-hidden">
      {/* Background Blobs have been moved to App.tsx for better management */}
      
      <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight opacity-0 animate-fade-in-up">
            Стабильный поток
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-amber-400">
              целевых лидов
            </span>
            <span className="text-gray-900 dark:text-white"> в ваш бизнес</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up-delay-1">
            Мы не просто настраиваем рекламу. Мы строим систему, которая регулярно приводит целевых клиентов, готовых к покупке.
          </p>
          
          <ul className="mt-8 space-y-3 text-left max-w-md mx-auto lg:mx-0 opacity-0 animate-fade-in-up-delay-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircleIcon className="w-6 h-6 text-cyan-500" />
                <span className="font-medium">{benefit.text}</span>
              </li>
            ))}
          </ul>

          <a
            href="/contacts.html"
            className="mt-10 inline-block px-8 py-4 bg-cyan-500 text-white font-bold text-lg rounded-full transform transition-transform duration-300 hover:scale-105 hover:bg-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 opacity-0 animate-fade-in-up-delay-3">
            Получить консультацию
          </a>
        </div>

        {/* Right Column: Animation */}
        <div className="relative w-full h-96 lg:h-auto lg:aspect-square flex items-center justify-center opacity-0 animate-fade-in-up-delay-2">
          <CrmAnimation />
        </div>
      </div>
    </div>
  );
};

export default LeadsSection;