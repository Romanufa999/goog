
import React from 'react';

interface IconProps {
    className?: string;
}

export const ToggleIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        width="48" 
        height="48" 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
    >
        <defs>
            <linearGradient id="toggleGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6EE7B7" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g style={{ filter: 'url(#glow)' }}>
            <circle cx="24" cy="24" r="14" fill="url(#toggleGradient)" opacity="0.3" />
            <circle cx="30" cy="24" r="12" fill="url(#toggleGradient)" opacity="0.6" />
        </g>
    </svg>
);
