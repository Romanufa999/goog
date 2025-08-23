
import React from 'react';
import { YandexDirectIcon } from './icons/YandexDirectIcon';


const Hero: React.FC = () => {

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 pt-20 overflow-hidden">
      
      {/* Main Content */}
      <div className="relative z-10 text-center flex flex-col items-center max-w-5xl">
        <p className="font-bold text-yellow-400 opacity-0 animate-fade-in-up">Суть Яндекс.Директ</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight opacity-0 animate-fade-in-up-delay-1">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
            Данные
          </span>
          <span className="text-gray-800 dark:text-white"> для точной рекламы</span>
        </h2>
        
        <div className="mt-8 flex flex-col items-center gap-4 opacity-0 animate-fade-in-up-delay-2">
            <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
                {/* Block 1: 26 sources */}
                <div className="flex items-center gap-4">
                    <div className="text-7xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-b from-gray-700 dark:from-gray-200 to-gray-900 dark:to-gray-500">
                        26
                    </div>
                    <div className="text-left max-w-[200px]">
                        <p className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white leading-tight">источников данных</p>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-tight">для поиска аудитории</p>
                    </div>
                </div>
                
                {/* Plus sign */}
                <div className="text-5xl md:text-7xl font-thin text-gray-400 dark:text-gray-600 mx-2">
                    +
                </div>
                
                {/* Block 2: Yandex Direct */}
                <div className="flex items-center gap-4">
                    <YandexDirectIcon className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0" />
                     <div className="text-left">
                        <p className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white leading-tight">Яндекс</p>
                        <p className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">Директ</p>
                    </div>
                </div>
            </div>
            
            {/* Concluding sentence */}
            <p className="mt-6 text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-amber-400">
                Такая связка дает потрясающий результат
            </p>
        </div>
        
        <p className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl opacity-0 animate-fade-in-up-delay-3">
          Мы используем всю мощь экосистемы Яндекса: от поисковых запросов и данных Метрики до интересов из Дзена и Музыки, чтобы показывать вашу рекламу только тем, кто с наибольшей вероятностью станет вашим клиентом.
        </p>
      </div>
    </div>
  );
};

export default Hero;