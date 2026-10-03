import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#195490] text-white border-t-4 border-[#FE800F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/15">
          {/* Column 1: Business Identity */}
          <div className="md:col-span-6 space-y-3">
            <div className="text-xl font-extrabold tracking-tight text-white">
              Thomas Gibb Home Improvements &amp; Property Maintenance
            </div>
            <p className="text-sm sm:text-base text-white/85 max-w-md leading-relaxed">
              Professional Home Improvement &amp; Property Maintenance Services
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#FE800F] pt-1">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Wrexham &amp; Surrounding Areas</span>
            </div>
          </div>

          {/* Column 2: Services Summary */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FE800F]">
              Services
            </div>
            <ul className="space-y-2 text-sm text-white/85">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Joinery
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Glazing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Kitchens &amp; Bathrooms
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  UPVC
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  General Building
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Property Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details & Facebook */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FE800F]">
              Contact
            </div>
            <div className="space-y-2.5 text-sm text-white/90">
              <p>
                <a
                  href="tel:+447549542471"
                  className="inline-flex items-center gap-2 hover:text-[#FE800F] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#FE800F] shrink-0" />
                  <span>Phone: +44 7549 542471</span>
                </a>
              </p>
              <p>
                <a
                  href="mailto:gibb.1@live.com"
                  className="inline-flex items-center gap-2 hover:text-[#FE800F] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#FE800F] shrink-0" />
                  <span>Email: gibb.1@live.com</span>
                </a>
              </p>
            </div>

            {/* Facebook Link */}
            <div className="pt-2">
              <a
                href="https://www.facebook.com/search/top/?q=Thomas%20Gibb%20Home%20Improvements%20%26%20Property%20Maintenance"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Thomas Gibb Home Improvements & Property Maintenance on Facebook"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-md bg-white/10 hover:bg-[#FE800F] text-white text-xs font-bold transition-colors duration-150"
              >
                <svg
                  className="w-4 h-4 fill-current shrink-0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>
            &copy; {new Date().getFullYear()} Thomas Gibb Home Improvements &amp; Property Maintenance. All rights reserved.
          </p>
          <p>Wrexham, United Kingdom · Free Quotes Available</p>
        </div>
      </div>
    </footer>
  );
};
