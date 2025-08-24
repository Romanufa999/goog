"use client";

import React from 'react';
import Header from '../components/Header';
import { GlobalBackground } from '../components/GlobalBackground';
import Footer from '../components/Footer';
import './globals.css';
import type { PageConfig } from '../components/Header';
import { usePathname } from 'next/navigation';

export const pages: PageConfig[] = [
    { page: 'home', label: 'Главная', path: '/' },
    { page: 'contacts', label: 'Контакты', path: '/contacts' },
    { page: 'privacy', label: 'Политика конфиденциальности', shortLabel: 'Приватность', path: '/privacy' },
    { page: 'personal-data', label: 'Обработка персональных данных', shortLabel: 'Перс. данные', path: '/personal-data' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const currentPage = pages.find(p => p.path === pathname)?.page ?? 'home';

  return (
    <html lang="ru" className="dark">
      <head>
        <title>Yandex.Direct & Telegram Ads Setup</title>
        <meta name="description" content="A visually appealing landing page for a service that sets up Yandex.Direct advertising campaigns, featuring an animated hero section." />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <main className="relative min-h-screen text-gray-800 dark:text-white transition-colors duration-300 overflow-x-clip flex flex-col">
            <GlobalBackground />
            <div className="flex-grow">
                <Header pages={pages} currentPage={currentPage} />
                {children}
            </div>
            <Footer pages={pages.filter(p => p.page === 'privacy' || p.page === 'personal-data')} />
        </main>
      </body>
    </html>
  )
}
