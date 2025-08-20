import React from 'react';

interface IconProps {
    className?: string;
}

export const LaunchIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <g className="origin-center -rotate-45">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </g>
         <path d="M12 19V5" className="opacity-50 -translate-y-1 animate-pulse" />
    </svg>
);
