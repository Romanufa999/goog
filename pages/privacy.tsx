import React from 'react';
import ReactDOM from 'react-dom/client';
import Header, { Page, PageConfig } from './components/Header';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import { GlobalBackground } from './components/GlobalBackground';
import Footer from './components/Footer';

const pages: PageConfig[] = [
    { page: 'home', label: 'Главная', path: '/' },
    { page: 'contacts', label: 'Контакты', path: '/contacts.html' },
    { page: 'privacy', label: 'Политика конфиденциальности', shortLabel: 'Приватность', path: '/privacy.html' },
    { page: 'personal-data', label: 'Обработка персональных данных', shortLabel: 'Перс. данные', path: '/personal-data.html' },
];

function PrivacyApp() {
  return (
    <main className="relative min-h-screen text-gray-800 dark:text-white transition-colors duration-300 overflow-x-clip flex flex-col">
       <GlobalBackground />
      <div className="flex-grow">
        <Header currentPage={'privacy'} pages={pages} />
        <PrivacyPolicyPage />
      </div>
      <Footer pages={pages.filter(p => p.page === 'privacy' || p.page === 'personal-data')} />
    </main>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <PrivacyApp />
  </React.StrictMode>
);
