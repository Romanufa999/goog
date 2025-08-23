

import React from 'react';
import { AnimatedGraph } from './AnimatedGraph';

const ResultsSection: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center py-24 sm:py-32 p-4 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 text-center flex flex-col items-center max-w-4xl">
         <div className="opacity-0 animate-fade-in-up w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto mb-8">
            <AnimatedGraph />
         </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight opacity-0 animate-fade-in-up-delay-1">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
            От анализа
          </span>
          <br />
          до гарантированного результата
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl opacity-0 animate-fade-in-up-delay-2">
         Наш подход — это полный цикл работ: от глубокого анализа вашей ниши и конкурентов до запуска, оптимизации и предоставления прозрачной отчетности.
        </p>
        <a 
            href="/contacts.html"
            className="mt-10 px-8 py-4 bg-emerald-500 text-white font-bold text-lg rounded-full transform transition-transform duration-300 hover:scale-105 hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-50 opacity-0 animate-fade-in-up-delay-2">
          Заказать аудит
        </a>
      </div>
    </section>
  );
};

export default ResultsSection;