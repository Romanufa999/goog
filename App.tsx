
import React, { useState, useEffect } from 'react';
import Header, { Page, PageConfig } from './components/Header';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import PersonalDataPolicyPage from './pages/PersonalDataPolicyPage';
import { GlobalBackground } from './components/GlobalBackground';
import Footer from './components/Footer';

export const pages: PageConfig[] = [
    { page: 'home', label: 'Главная', path: '/' },
    { page: 'contacts', label: 'Контакты', path: '/contacts.html' },
    { page: 'privacy', label: 'Политика конфиденциальности', shortLabel: 'Приватность', path: '/privacy.html' },
    { page: 'personal-data', label: 'Обработка персональных данных', shortLabel: 'Перс. данные', path: '/personal-data.html' },
];

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('home');

    useEffect(() => {
        const path = window.location.pathname;
        const activePage = pages.find(p => p.path === path) || pages[0];
        setCurrentPage(activePage.page);
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case 'contacts':
                return <ContactsPage />;
            case 'privacy':
                return <PrivacyPolicyPage />;
            case 'personal-data':
                return <PersonalDataPolicyPage />;
            case 'home':
            default:
                return <HomePage />;
        }
    };

    return (
        <main className="relative min-h-screen text-gray-800 dark:text-white transition-colors duration-300 overflow-x-clip flex flex-col">
            <GlobalBackground />
            <div className="flex-grow">
                <Header currentPage={currentPage} pages={pages} />
                {renderPage()}
            </div>
            <Footer pages={pages.filter(p => p.page === 'privacy' || p.page === 'personal-data')} />
        </main>
    );
};

export default App;
