
import React from 'react';
import { Page } from '../App';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    
    const handleNav = (e: React.MouseEvent<HTMLButtonElement>, page: Page) => {
        e.preventDefault();
        onNavigate(page);
    };

    return (
        <footer className="relative z-10 border-t border-black/10 dark:border-white/10 mt-auto">
            <div className="container mx-auto px-4 sm:px-8 py-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
                        &copy; {new Date().getFullYear()} RomanAI. Все права защищены.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <button
                            onClick={(e) => handleNav(e, 'privacy')}
                            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Политика конфиденциальности
                        </button>
                        <button
                            onClick={(e) => handleNav(e, 'personal-data')}
                            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Обработка персональных данных
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;