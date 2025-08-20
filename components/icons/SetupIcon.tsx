import React from 'react';

interface IconProps {
    className?: string;
}

export const SetupIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M12 20v-4" />
        <path d="M12 10V4" />
        <path d="M4 14H2" />
        <path d="M8 14H6" />
        <path d="M12 14h-2" />
        <path d="M16 14h-2" />
        <path d="M20 14h-2" />
        <path d="M22 14h-2" />
        <path d="M4 10h2" />
        <path d="M8 10h2" />
        <path d="M12 10h2" />
        <path d="M16 10h2" />
        <path d="M20 10h2" />
        <circle cx="6" cy="16" r="2" className="animate-[pulse-glow_4s_ease-in-out_infinite]" />
        <circle cx="18" cy="8" r="2" className="animate-[pulse-glow_4s_ease-in-out_infinite_1s]" />
    </svg>
);
