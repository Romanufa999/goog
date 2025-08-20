import React from 'react';

interface IconProps {
    className?: string;
}

export const SpicyIcon: React.FC<IconProps> = ({ className }) => (
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
        <path d="M12.45 15.42c.32-1.31.55-2.65.55-4.03 0-2.3-1.07-4.4-2.83-5.78.34-.04.68-.06 1.04-.06 3.98 0 7.21 3.23 7.21 7.21 0 1.95-.78 3.73-2.05 5.04l-3.92-2.38z" />
        <path d="M12.16 16.03c-2.43 1.61-3.61 4.56-2.9 7.27.19.74.83 1.16 1.54.95l3.29-.98c.75-.22 1.23-.92 1.15-1.69-.32-2.83-2.3-5.22-3.08-5.55z" />
    </svg>
);
