import React from 'react';

interface IconProps {
    className?: string;
}

export const VegIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M20 6c-2.2 2.2-2.2 5.8-2.2 5.8s3.6 0 5.8-2.2c2.5-2.5 2.5-6.6 0-9.1-2.5-2.5-6.6-2.5-9.1 0" />
        <path d="M4 20s3.6 0 5.8-2.2c2.2-2.2 2.2-5.8 2.2-5.8" />
        <path d="M12 12s-3.6 0-5.8 2.2C4 16.4 4 20 4 20" />
        <path d="M12 12c-2.2-2.2-5.8-2.2-5.8-2.2" />
        <path d="M20 6s-3.6 0-5.8 2.2" />
    </svg>
);
