
import React from 'react';

export const PillsIllustration: React.FC = () => {
    return (
        <div className="absolute inset-0 w-full h-full opacity-30 lg:opacity-50">
            {/* Grid background */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0">
                <defs>
                    <pattern id="smallGrid" width="16" height="16" patternUnits="userSpaceOnUse">
                        <path d="M 16 0 L 0 0 0 16" fill="none" className="stroke-black/10 dark:stroke-white/10" strokeWidth="0.5"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#smallGrid)" />
            </svg>

            {/* Floating Pills */}
            <div className="absolute w-24 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full top-[10%] left-[60%] animate-float-1 border-2 border-white/50 shadow-lg" style={{ animationDuration: '8s' }}>
                 <div className="absolute inset-1 border border-white/50 rounded-full"></div>
            </div>
            <div className="absolute w-16 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full top-[50%] left-[5%] animate-float-2 border-2 border-white/50 shadow-lg" style={{ animationDuration: '10s' }}>
                <div className="absolute inset-0.5 border border-white/50 rounded-full"></div>
            </div>
             <div className="absolute w-20 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full bottom-[15%] right-[10%] animate-float-3 border-2 border-white/50 shadow-lg" style={{ animationDuration: '9s' }}>
                <div className="absolute inset-1 border border-white/50 rounded-full"></div>
            </div>

            {/* Sparkles */}
            <div className="absolute w-2 h-2 bg-white rounded-full top-1/4 left-1/2 animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-white rounded-full bottom-1/3 right-1/4 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute w-2 h-2 bg-white rounded-full top-2/3 left-1/4 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
    );
};