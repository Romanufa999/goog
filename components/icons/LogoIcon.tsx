import React from 'react';

interface IconProps {
    className?: string;
}

export const LogoIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
    >
        <path d="M6 6V18H8V14H12C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6H6ZM8 12V8H12C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12H8Z" fill="currentColor"/>
        <circle cx="17" cy="17" r="1.5" fill="currentColor"/>
    </svg>
);
