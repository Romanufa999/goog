
import React from 'react';

interface IconProps {
    className?: string;
}

export const AvitoIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
    >
        <circle cx="24" cy="24" r="24" fill="#6A00FF"/>
        <path d="M25.336 13.5C27.91 13.5 29.836 15.31 29.836 17.742C29.836 20.174 27.91 21.984 25.336 21.984C22.762 21.984 20.836 20.174 20.836 17.742C20.836 15.31 22.762 13.5 25.336 13.5ZM25.336 34.5C21.688 34.5 16.5 29.508 16.5 23.994C16.5 18.48 20.2 13.5 25.336 13.5C30.472 13.5 34.168 18.48 34.168 23.994C34.168 29.508 28.984 34.5 25.336 34.5Z" fill="white"/>
    </svg>
);
