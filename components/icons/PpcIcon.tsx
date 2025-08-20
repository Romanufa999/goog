import React from 'react';

interface IconProps {
    className?: string;
}

export const PpcIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
        <circle cx="12" cy="12" r="1" stroke="none" fill="currentColor" />
        <circle cx="12" cy="12" r="0" className="animate-click-ripple" strokeWidth="1" />
    </svg>
);
