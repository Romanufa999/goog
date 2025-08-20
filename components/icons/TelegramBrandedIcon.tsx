import React from 'react';

interface IconProps {
    className?: string;
}

export const TelegramBrandedIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
    >
        <defs>
            <linearGradient id="telegram-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#37AEE2" />
                <stop offset="100%" stopColor="#1E96C8" />
            </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="24" fill="url(#telegram-grad)" />
        <path d="m35 14-18 7 4 2 2 6 3-4 6 6 4-16z" fill="white" />
    </svg>
);