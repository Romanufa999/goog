
import React from 'react';
import Hero from '../components/Hero';
import TelegramAds from '../components/TelegramAds';
import ResultsSection from '../components/ResultsSection';
import BenefitsSection from '../components/BenefitsSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import LeadsSection from '../components/LeadsSection';
import LeadSourcesSection from '../components/LeadSourcesSection';
import WhatAreLeadsSection from '../components/WhatAreLeadsSection';

const HomePage: React.FC = () => {
    return (
        <>
            <LeadsSection />
            <LeadSourcesSection />
            <WhatAreLeadsSection />
            <Hero />
            <TelegramAds />
            <ResultsSection />
            <BenefitsSection />
            <ServicesSection />
            <ProcessSection />
        </>
    );
};

export default HomePage;
