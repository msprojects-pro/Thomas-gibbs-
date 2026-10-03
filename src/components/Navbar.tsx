import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#195490]/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          className="text-lg md:text-xl font-extrabold tracking-tight text-[#195490] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#FE800F]"
        >
          Thomas Gibb
        </a>

        {/* Zone 2: 4 clean text navigation links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8 text-sm font-medium text-[#17212B]">
          <a
            href="#services"
            className="py-1 hover:text-[#195490] border-b-2 border-transparent hover:border-[#FE800F] transition-colors duration-150 whitespace-nowrap"
          >
            Services
          </a>
          <a
            href="#about"
            className="py-1 hover:text-[#195490] border-b-2 border-transparent hover:border-[#FE800F] transition-colors duration-150 whitespace-nowrap"
          >
            About
          </a>
          <a
            href="#showcase"
            className="py-1 hover:text-[#195490] border-b-2 border-transparent hover:border-[#FE800F] transition-colors duration-150 whitespace-nowrap"
          >
            Work Showcase
          </a>
          <a
            href="#contact"
            className="py-1 hover:text-[#195490] border-b-2 border-transparent hover:border-[#FE800F] transition-colors duration-150 whitespace-nowrap"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="tel:+447549542471"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#195490] border border-[#195490]/25 rounded-md hover:bg-[#F5F8FB] transition-colors duration-150 whitespace-nowrap tabular-nums"
          >
            <Phone className="w-4 h-4 text-[#FE800F]" />
            <span>+44 7549 542471</span>
          </a>
          <button
            type="button"
            onClick={onRequestQuote}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-[#FE800F] hover:bg-[#e56f05] rounded-md transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#195490]"
          >
            Get a Free Quote
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="tel:+447549542471"
            aria-label="Call +44 7549 542471"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-[#195490]/20 text-[#195490] hover:bg-[#F5F8FB]"
          >
            <Phone className="w-4 h-4 text-[#FE800F]" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-[#195490]/20 text-[#195490] hover:bg-[#F5F8FB]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#195490]/15 px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-1">
            <button
              type="button"
              onClick={() => handleNavClick('services')}
              className="text-left px-3 py-2.5 text-base font-medium text-[#17212B] hover:bg-[#F5F8FB] hover:text-[#195490] rounded-md"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className="text-left px-3 py-2.5 text-base font-medium text-[#17212B] hover:bg-[#F5F8FB] hover:text-[#195490] rounded-md"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('showcase')}
              className="text-left px-3 py-2.5 text-base font-medium text-[#17212B] hover:bg-[#F5F8FB] hover:text-[#195490] rounded-md"
            >
              Work Showcase
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="text-left px-3 py-2.5 text-base font-medium text-[#17212B] hover:bg-[#F5F8FB] hover:text-[#195490] rounded-md"
            >
              Contact
            </button>
          </div>
          <div className="pt-2 border-t border-[#195490]/10 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-3 px-4 text-center text-sm font-semibold text-white bg-[#FE800F] hover:bg-[#e56f05] rounded-md"
            >
              Get a Free Quote
            </button>
            <a
              href="tel:+447549542471"
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-[#195490] border border-[#195490]/25 rounded-md tabular-nums"
            >
              Call +44 7549 542471
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
