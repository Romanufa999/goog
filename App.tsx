
import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import { GlobalBackground } from './components/GlobalBackground';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import PersonalDataPolicyPage from './pages/PersonalDataPolicyPage';
import Footer from './components/Footer';

export type Page = 'home' | 'contacts' | 'privacy' | 'personal-data';

const getPageFromPath = (path: string): Page => {
    const page = path.substring(1); // remove leading '/'
    if (page === 'contacts' || page === 'privacy' || page === 'personal-data') {
        return page;
    }
    return 'home';
};


function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => getPageFromPath(window.location.pathname));

  useEffect(() => {
        const handlePopState = () => {
            setCurrentPage(getPageFromPath(window.location.pathname));
        };

        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

  const handleNavigate = useCallback((page: Page) => {
    const path = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== path) {
        window.history.pushState({ page }, '', path);
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
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
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
        {renderPage()}
      </div>
      <Footer onNavigate={handleNavigate} />
    </main>
  );
}

export default App;
