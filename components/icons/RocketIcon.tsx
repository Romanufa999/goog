
import React from 'react';

interface IconProps {
    className?: string;
}

export const RocketIcon: React.FC<IconProps> = ({ className }) => (
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
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.09-3.1a2.2 2.2 0 0 0-3.11-.09z" />
        <path d="m12 15-3-3a2.2 2.2 0 0 1-3.11-.09c-.84-.71-2.3-.7-3.1.09-1.26 1.5-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.09-3.1" />
        <path d="M15 12-3-3" />
        <path d="m9 9 3 3" />
        <path d="m21 21-3-3a2.2 2.2 0 0 0-3.11-.09c-.84.7-2.3.7-3.1-.09-1.26-1.5-2-5-2-5s3.74.5 5 2c.71.84.7 2.3.09 3.1a2.2 2.2 0 0 0 3.11.09z" />
    </svg>
);
