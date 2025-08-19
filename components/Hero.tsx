
import React from 'react';
import { GraphIcon } from './icons/GraphIcon';
import { RocketIcon } from './icons/RocketIcon';
import { TargetIcon } from './icons/TargetIcon';

const Hero: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-4">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl animate-blob-1"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-blob-2"></div>
         <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl animate-blob-3"></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute top-1/4 left-[10%] opacity-0 md:opacity-50 animate-float-1">
        <TargetIcon className="w-20 h-20 text-yellow-400/50" />
      </div>
      <div className="absolute bottom-1/4 right-[15%] opacity-0 md:opacity-50 animate-float-2">
        <GraphIcon className="w-24 h-24 text-cyan-400/50" />
      </div>
      <div className="absolute top-1/3 right-[10%] opacity-0 md:opacity-50 animate-float-3">
        <RocketIcon className="w-16 h-16 text-purple-400/50" />
      </div>


      {/* Main Content */}
      <div className="relative z-10 text-center flex flex-col items-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight opacity-0 animate-fade-in-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500">
            Профессиональная настройка
          </span>
          <br />
          Яндекс.Директ для вашего бизнеса
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl opacity-0 animate-fade-in-up-delay-1">
          Привлекайте целевых клиентов, оптимизируйте бюджет и получайте максимум конверсий с помощью экспертной настройки рекламных кампаний.
        </p>
        <button className="mt-10 px-8 py-4 bg-yellow-400 text-gray-900 font-bold text-lg rounded-full transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50 opacity-0 animate-fade-in-up-delay-2">
          Обсудить проект
        </button>
      </div>
    </div>
  );
};

export default Hero;
