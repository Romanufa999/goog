
import React from 'react';

export const AnimatedGraph: React.FC = () => (
    <svg 
        viewBox="0 0 100 50" 
        className="w-full h-auto"
        style={{
            filter: 'drop-shadow(0 0 10px rgba(74, 222, 128, 0.4))'
        }}
    >
        {/* Grid lines */}
        <line x1="5" y1="45" x2="95" y2="45" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" className="dark:stroke-white/10" />
        <line x1="5" y1="5" x2="5" y2="45" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" className="dark:stroke-white/10" />

        {/* Animated graph line */}
        <path 
            d="M 5,40 C 25,35 30,15 50,15 S 70,25 95,10" 
            fill="none" 
            stroke="url(#line-gradient)" 
            strokeWidth="2" 
            strokeLinecap="round"
            className="animate-draw-line"
            style={{ 
                strokeDasharray: 150, 
                strokeDashoffset: 150 
            }}
        />
        
        {/* Gradient for the line */}
        <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#86efac" />
                <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
             <linearGradient id="dot-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
        </defs>

        {/* Pulsing dots on the graph */}
        <g className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <circle cx="5" cy="40" r="2.5" fill="url(#dot-gradient)" className="animate-pulse-dot-1" />
            <circle cx="50" cy="15" r="2.5" fill="url(#dot-gradient)" className="animate-pulse-dot-2" />
            <circle cx="95" cy="10" r="2.5" fill="url(#dot-gradient)" className="animate-pulse-dot-4" />
        </g>
    </svg>
);