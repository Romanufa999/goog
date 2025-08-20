import React from 'react';

const Particle: React.FC<{ delay: number; x: number }> = ({ delay, x }) => (
    <div 
        className="absolute bottom-0 w-1 h-1 bg-yellow-300 rounded-full animate-particle-stream"
        style={{ left: `${x}%`, animationDelay: `${delay}s`, animationDuration: `${Math.random() * 0.5 + 0.3}s` }}
    />
);

export const LaunchRocket: React.FC = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative">
            <div className="relative w-16 h-48">
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <Particle key={i} delay={i * 0.05} x={Math.random() * 80 + 10} />
                    ))}
                </div>

                <svg 
                    viewBox="0 0 24 24" 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 text-gray-700 dark:text-gray-200 animate-rocket-launch"
                    fill="currentColor"
                >
                    <path d="M12 2L6 22h12L12 2zm0 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-2 bg-gray-400 dark:bg-gray-600 rounded-t-sm"></div>
            </div>
        </div>
    );
};
