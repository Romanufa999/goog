"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { LogoIcon } from './icons/LogoIcon';
import ThemeSwitcher from './ThemeSwitcher';
import { HamburgerIcon } from './icons/HamburgerIcon';
import { CloseIcon } from './icons/CloseIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { TelegramIcon } from './icons/TelegramIcon';
import { PaperPlaneIcon } from './icons/PaperPlaneIcon';

export type Page = 'home' | 'contacts' | 'privacy' | 'personal-data';

export interface PageConfig {
    page: Page;
    label: string;
    shortLabel?: string;
    path: string;
}

interface HeaderProps {
    pages: PageConfig[];
    currentPage: Page;
}

interface NavLinkProps {
    path: string;
    isActive: boolean;
    children: React.ReactNode;
    className?: string;
    onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ path, isActive, children, className, onClick }) => {
    return (
        <Link
            href={path}
            onClick={onClick}
            className={`transition-colors duration-200 relative ${
                isActive
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            } ${className || ''}`}
        >
            {children}
            {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-yellow-400 rounded-full"></span>
            )}
        </Link>
    );
};


const Header: React.FC<HeaderProps> = ({ pages, currentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    }
    
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="flex justify-between items-center h-20 bg-gray-100/60 dark:bg-black/50 backdrop-blur-md rounded-b-2xl px-6 border-b border-x border-black/10 dark:border-white/10">
                        <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
                            <LogoIcon className="w-8 h-8 text-gray-900 dark:text-white" />
                            <span className="font-bold text-xl text-gray-900 dark:text-white hidden sm:inline">RomanAI</span>
                        </Link>

                        <nav className="hidden md:flex items-center gap-6">
                             {pages.map(({ page, path, shortLabel, label }) => (
                                <NavLink key={path} path={path} isActive={currentPage === page} onClick={closeMenu}>
                                    {shortLabel || label}
                                </NavLink>
                             ))}
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="hidden lg:flex items-center gap-4">
                                <a href="tel:+79174884832" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap">+7 (917) 488-48-32</a>
                                <div className="flex items-center gap-1">
                                    <a href="https://wa.me/79174884832" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                        <WhatsAppIcon className="w-5 h-5" />
                                    </a>
                                    <a href="https.t.me/romxxx" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                        <TelegramIcon className="w-5 h-5" />
                                    </a>
                                    <a href="https.t.me/lidpotok" target="_blank" rel="noopener noreferrer" aria-label="Telegram Channel" className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                        <PaperPlaneIcon className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            <ThemeSwitcher />
                            <button onClick={() => setIsMenuOpen(true)} className="p-2 rounded-full md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Open menu">
                                <HamburgerIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[100] bg-gray-50 dark:bg-[#0a0a0a] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                 <div className="container mx-auto px-4 sm:px-8 h-full relative">
                    <div className="flex justify-between items-center h-20">
                         <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
                            <LogoIcon className="w-8 h-8 text-gray-900 dark:text-white" />
                            <span className="font-bold text-xl text-gray-900 dark:text-white">RomanAI</span>
                        </Link>
                        <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Close menu">
                            <CloseIcon className="w-6 h-6" />
                        </button>
                    </div>
                    <nav className="flex flex-col items-center justify-center gap-8 mt-16">
                        {pages.map(({ page, path, shortLabel, label }) => (
                           <NavLink key={path} path={path} isActive={currentPage === page} className="text-3xl font-bold" onClick={closeMenu}>
                               {shortLabel || label}
                           </NavLink>
                        ))}
                    </nav>

                    <div className="absolute bottom-12 left-0 right-0 px-4 sm:px-8">
                        <div className="flex flex-col items-center gap-4">
                            <a href="tel:+79174884832" className="text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-yellow-500 transition-colors">+7 (917) 488-48-32</a>
                            <div className="flex items-center gap-4">
                                <a href="https://wa.me/79174884832" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-3 rounded-full text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                                    <WhatsAppIcon className="w-6 h-6" />
                                </a>
                                <a href="https.t.me/romxxx" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="p-3 rounded-full text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                                    <TelegramIcon className="w-6 h-6" />
                                </a>
                                <a href="https.t.me/lidpotok" target="_blank" rel="noopener noreferrer" aria-label="Telegram Channel" className="p-3 rounded-full text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                                    <PaperPlaneIcon className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </>
    );
};

export default Header;