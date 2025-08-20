
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import { GlobalBackground } from './components/GlobalBackground';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import PersonalDataPolicyPage from './pages/PersonalDataPolicyPage';
import Footer from './components/Footer';

export type Page = 'home' | 'contacts' | 'privacy' | 'personal-data';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = useCallback((page: Page) => {
    // In a real app, you'd use a router library like react-router-dom
    // For this environment, we'll just manage state.
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
