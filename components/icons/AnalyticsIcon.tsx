import React from 'react';

interface IconProps {
    className?: string;
}

export const AnalyticsIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="0" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <rect 
            x="4" 
            y="10" 
            width="4" 
            rx="1" 
            style={{ '--bar-height': '58.33%' } as React.CSSProperties}
            className="h-[var(--bar-height)] origin-bottom animate-grow-bar-1"
        />
        <rect 
            x="10" 
            y="4" 
            width="4" 
            rx="1" 
            style={{ '--bar-height': '83.33%' } as React.CSSProperties}
            className="h-[var(--bar-height)] origin-bottom animate-grow-bar-2"
        />
        <rect 
            x="16" 
            y="14" 
            width="4" 
            rx="1" 
            style={{ '--bar-height': '33.33%' } as React.CSSProperties}
            className="h-[var(--bar-height)] origin-bottom animate-grow-bar-3"
        />
    </svg>
);
