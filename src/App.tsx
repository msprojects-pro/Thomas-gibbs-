/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Showcase } from './components/Showcase';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Joinery');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#17212B]">
      <Navbar onRequestQuote={() => scrollToContact()} />
      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <Hero onGetQuote={() => scrollToContact()} />

        {/* 2. SERVICES SECTION */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* 3. ABOUT / WHY THOMAS GIBB SECTION */}
        <About onGetQuote={() => scrollToContact()} />

        {/* 4. TRUST / PROJECT SHOWCASE SECTION */}
        <Showcase onSelectService={(service) => scrollToContact(service)} />

        {/* 5. CONTACT / FREE QUOTE SECTION */}
        <Contact selectedService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}
