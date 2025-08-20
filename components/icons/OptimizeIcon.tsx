import React from 'react';

interface IconProps {
    className?: string;
}

export const OptimizeIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" className="animate-[draw-path_2s_ease-out_infinite]" style={{ strokeDasharray: 30, strokeDashoffset: 30 }} />
        <circle cx="19" cy="9" r="2" className="animate-pulse" />
    </svg>
);
