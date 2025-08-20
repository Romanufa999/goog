import React from 'react';

export const OptimizationChart: React.FC = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 100 60" className="w-full max-w-xs h-auto">
                <defs>
                    <linearGradient id="opt-chart-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#facc15" />
                    </linearGradient>
                    <filter id="chart-glow" x="-50%" y="-50%" width="200%" height="200%">
                         <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                         <feMerge>
                             <feMergeNode in="coloredBlur" />
                             <feMergeNode in="SourceGraphic" />
                         </feMerge>
                    </filter>
                </defs>
                
                {/* Grid */}
                <path d="M0 60 L 0 0 L 100 0 L 100 60 Z" fill="none" className="stroke-gray-200/50 dark:stroke-gray-800/50" strokeWidth="0.5" />

                {/* Animated line */}
                <path 
                    d="M0 50 Q 25 20, 50 40 T 100 20" 
                    fill="none" 
                    stroke="url(#opt-chart-gradient)" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                    className="animate-chart-morph"
                    style={{ filter: 'url(#chart-glow)' }}
                />

                {/* Pulsing Dots */}
                <circle cx="25" cy="30" r="3" fill="#22d3ee" className="animate-pulse" style={{ animationDelay: '0s' }} />
                <circle cx="75" cy="30" r="3" fill="#facc15" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                
            </svg>
        </div>
    );
};
