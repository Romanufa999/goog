
import React from 'react';

interface IconProps {
    className?: string;
}

export const SberIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
    >
        <defs>
            <linearGradient id="sber-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4CAF50" />
                <stop offset="100%" stopColor="#2196F3" />
            </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="24" fill="url(#sber-grad)"/>
        <path d="M23.9999 12.0001C17.3725 12.0001 12 17.3726 12 24.0001C12 30.6276 17.3725 36.0001 23.9999 36.0001C27.0366 36.0001 29.8243 34.9209 31.9288 33.1506L23.9999 25.2217V12.0001Z" fill="white" fillOpacity="0.8"/>
        <path d="M33.1506 31.9288C34.9209 29.8243 36 27.0365 36 24C36 17.3726 30.6275 12 24 12V25.2217L33.1506 31.9288Z" fill="white"/>
    </svg>
);
