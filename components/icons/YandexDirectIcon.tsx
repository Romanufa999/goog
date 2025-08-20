import React from 'react';

interface IconProps {
    className?: string;
}

export const YandexDirectIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
    >
        <defs>
            <linearGradient id="yandex-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFD900" />
                <stop offset="100%" stopColor="#FFAE00" />
            </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="24" fill="url(#yandex-grad)"/>
        <path d="M18 18L25 32L32 18" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25 14V18" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);