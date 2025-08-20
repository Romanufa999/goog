
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import { GlobalBackground } from './components/GlobalBackground';
import BlogPage from './pages/BlogPage';
import MenuPage from './pages/MenuPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import PersonalDataPolicyPage from './pages/PersonalDataPolicyPage';
import Footer from './components/Footer';


export type Page = 'home' | 'contacts' | 'blog' | 'menu' | 'privacy' | 'personal-data';

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
      case 'blog':
        return <BlogPage />;
      case 'menu':
        return <MenuPage />;
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
       {/* Unified Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
          {/* From LeadsSection */}
          <div className="absolute top-[10rem] left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full filter blur-3xl animate-blob-1"></div>
          <div className="absolute top-[20rem] right-1/4 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/20 rounded-full filter blur-3xl animate-blob-2"></div>

          {/* From LeadSourcesSection */}
          <div className="absolute top-[60rem] right-1/4 w-96 h-96 bg-yellow-500/10 dark:bg-yellow-500/15 rounded-full filter blur-3xl animate-blob-3"></div>
          <div className="absolute top-[70rem] left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full filter blur-3xl animate-blob-4"></div>
          
          {/* From WhatAreLeadsSection */}
          <div className="absolute top-[90rem] left-1/3 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full filter blur-3xl animate-blob-5"></div>
          <div className="absolute top-[100rem] right-1/3 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full filter blur-3xl animate-blob-6"></div>

          {/* From Hero / TelegramAds */}
          <div className="absolute top-[140rem] right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full filter blur-3xl animate-blob-4"></div>
          <div className="absolute top-[160rem] left-1/4 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/20 rounded-full filter blur-3xl animate-blob-5"></div>
          
          {/* From ResultsSection */}
          <div className="absolute top-[200rem] right-1/4 w-96 h-96 bg-green-500/5 dark:bg-green-500/15 rounded-full filter blur-3xl animate-blob-6"></div>
          <div className="absolute top-[220rem] left-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/15 rounded-full filter blur-3xl animate-blob-7"></div>
          
          {/* From BenefitsSection */}
          <div className="absolute top-[260rem] left-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/15 rounded-full filter blur-3xl animate-blob-8"></div>
          <div className="absolute top-[280rem] right-1/4 w-96 h-96 bg-pink-500/5 dark:bg-pink-500/15 rounded-full filter blur-3xl animate-blob-9"></div>

          {/* From ServicesSection */}
          <div className="absolute top-[320rem] right-1/4 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/15 rounded-full filter blur-3xl animate-blob-10"></div>
          <div className="absolute top-[340rem] left-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/15 rounded-full filter blur-3xl animate-blob-11"></div>

          {/* From ProcessSection */}
          <div className="absolute top-[380rem] left-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full filter blur-3xl animate-blob-8"></div>
          <div className="absolute top-[400rem] right-1/4 w-96 h-96 bg-yellow-500/5 dark:bg-yellow-500/10 rounded-full filter blur-3xl animate-blob-9"></div>
      </div>
      <div className="flex-grow">
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
        {renderPage()}
      </div>
      <Footer onNavigate={handleNavigate} />
    </main>
  );
}

export default App;