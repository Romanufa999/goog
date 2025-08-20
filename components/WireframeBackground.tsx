import React from 'react';

export const WireframeBackground: React.FC = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden [perspective:800px]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 w-[150%] h-[150%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-20 dark:opacity-30"
                style={{ transform: 'translate(-50%, -50%) rotateX(60deg)' }}
            >
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                </defs>

                <rect width="100%" height="100%" fill="url(#grid)" className="text-gray-400 dark:text-gray-700 animate-[pan-grid_20s_linear_infinite]" />

                {/* Shimmer effect */}
                <rect width="100%" height="100%" fill="url(#glow)" className="animate-[shimmer-glow_8s_ease-in-out_infinite]" />
            </svg>
        </div>
    );
};
