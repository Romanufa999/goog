
import React from 'react';
import type { PageConfig } from './Header';

interface FooterProps {
    pages: PageConfig[];
}

const Footer: React.FC<FooterProps> = ({ pages }) => {
    return (
        <footer className="relative z-10 border-t border-black/10 dark:border-white/10 mt-auto">
            <div className="container mx-auto px-4 sm:px-8 py-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
                        &copy; {new Date().getFullYear()} RomanAI. Все права защищены.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        {pages.map(({ page, path, label }) => (
                            <a
                                key={page}
                                href={path}
                                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
