import React from 'react';

export const GlobalBackground: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-20 overflow-hidden pointer-events-none">
            {/* Dark background layer */}
            <div className="absolute inset-0 bg-[#0a0a0a]"></div>

            {/* The existing grid, brighter and still panning */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0">
                <defs>
                    <pattern id="globalGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" className="stroke-black/10 dark:stroke-white/15" strokeWidth="0.5"/>
                        <animateTransform 
                            attributeName="transform" 
                            type="translate" 
                            from="0 0" 
                            to="40 40" 
                            dur="20s" 
                            repeatCount="indefinite" 
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#globalGrid)" />
            </svg>

            {/* New shooting lines effect */}
            <div className="relative w-full h-full">
                <div
                    className="absolute h-px bg-gradient-to-l from-transparent via-white/50 to-transparent animate-shoot-right-1"
                    style={{ top: '10%', width: '150px' }}
                />
                <div
                    className="absolute h-px bg-gradient-to-l from-transparent via-white/50 to-transparent animate-shoot-right-2"
                    style={{ top: '30%', width: '200px' }}
                />
                <div
                    className="absolute h-px bg-gradient-to-l from-transparent via-white/50 to-transparent animate-shoot-right-3"
                    style={{ top: '55%', width: '100px' }}
                />
                <div
                    className="absolute h-px bg-gradient-to-l from-transparent via-white/50 to-transparent animate-shoot-right-4"
                    style={{ top: '70%', width: '180px' }}
                />
                <div
                    className="absolute h-px bg-gradient-to-l from-transparent via-white/50 to-transparent animate-shoot-right-5"
                    style={{ top: '90%', width: '250px' }}
                />
            </div>
        </div>
    );
};