
import React from 'react';

const WhatAreLeadsSection: React.FC = () => {
    return (
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 overflow-hidden">
            <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-400 opacity-0 animate-fade-in-up">
                    Что такое Лиды?
                </h2>
                <p className="mt-4 text-6xl md:text-8xl lg:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 animate-fade-in-up-delay-1">
                    Заявки.
                </p>

                <div className="mt-16 bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-black/10 dark:border-white/10 opacity-0 animate-fade-in-up-delay-2">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                        <p className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                            Холодные?
                        </p>
                        <div className="text-3xl md:text-4xl font-bold text-red-500 dark:text-red-400 transform md:rotate-[-10deg]">
                           →
                        </div>
                        <div className="text-left bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 dark:from-emerald-400/10 dark:to-cyan-400/10 p-6 rounded-2xl border-l-4 border-emerald-400">
                             <p className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
                                Нет. Тёплые.
                            </p>
                            <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300">
                                Люди сами заинтересовались и оставили вам свои контакты для связи.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatAreLeadsSection;
