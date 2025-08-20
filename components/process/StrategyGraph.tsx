import React from 'react';

const Node: React.FC<{ text: string; delay: number; position:string }> = ({ text, delay, position }) => (
    <div
        className={`absolute ${position} flex items-center justify-center w-24 h-24 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-black/10 dark:border-white/10 text-center text-sm font-semibold p-2 shadow-lg opacity-0 animate-node-appear break-words`}
        style={{ animationDelay: `${delay}s`, hyphens: 'auto' } as React.CSSProperties}
    >
        {text}
    </div>
);

const Line: React.FC<{ d: string; delay: number }> = ({ d, delay }) => (
     <path
        d={d}
        className="stroke-gray-300 dark:stroke-gray-700 animate-draw-path"
        strokeWidth="1"
        fill="none"
        style={{ strokeDasharray: 100, strokeDashoffset: 100, animationDelay: `${delay}s` }}
    />
);

export const StrategyGraph: React.FC = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-80 h-80">
                <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                    <Line d="M50 50 L 50 12" delay={1} />
                    <Line d="M50 50 L 15 25" delay={1.1} />
                    <Line d="M50 50 L 15 75" delay={1.2} />
                    <Line d="M50 50 L 50 88" delay={1.3} />
                    <Line d="M50 50 L 85 75" delay={1.4} />
                    <Line d="M50 50 L 85 25" delay={1.5} />
                </svg>

                <Node text="Целевая Аудитория" delay={0.1} position="top-0 left-1/2 -translate-x-1/2" />
                <Node text="Анализ Конкурентов" delay={0.2} position="top-1/4 left-0 -translate-y-1/2" />
                <Node text="Ключевые слова" delay={0.3} position="bottom-1/4 left-0 translate-y-1/2" />
                <Node text="Бюджет" delay={0.4} position="bottom-0 left-1/2 -translate-x-1/2" />
                <Node text="KPI и Цели" delay={0.5} position="bottom-1/4 right-0 translate-y-1/2" />
                <Node text="УТП" delay={0.6} position="top-1/4 right-0 -translate-y-1/2" />
                
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-cyan-300 to-yellow-300 text-gray-900 font-bold p-2 text-center text-lg shadow-2xl opacity-0 animate-node-appear"
                    style={{ animationDelay: '0.8s' }}
                >
                    Стратегия
                </div>
            </div>
        </div>
    );
};