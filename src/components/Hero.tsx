import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, CheckCircle2, MapPin, Star } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onGetQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetQuote }) => {
  return (
    <section
      id="hero"
      className="relative bg-white pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#195490]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Trust Label - Clean unboxed metadata with subtle left accent */}
            <div className="inline-flex items-center gap-2.5 pl-3 border-l-2 border-[#FE800F] text-sm font-semibold text-[#195490]">
              <Star className="w-4 h-4 text-[#FE800F] fill-[#FE800F] shrink-0" />
              <span className="tabular-nums">98% Recommended • 50 Reviews</span>
              <span aria-hidden="true" className="text-[#195490]/40">·</span>
              <span className="text-[#17212B]/80 font-medium">Wrexham, UK</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#195490] tracking-tight leading-[1.1]">
              Home Improvements.{' '}
              <span className="text-[#17212B] underline decoration-[#FE800F] decoration-4 underline-offset-8">
                Done Properly.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#17212B]/80 leading-relaxed max-w-xl font-normal">
              Professional home improvement and property maintenance services across Wrexham and surrounding areas.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onGetQuote}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-[#FE800F] hover:bg-[#e56f05] rounded-md shadow-sm transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#195490]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href="tel:+447549542471"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-white bg-[#195490] hover:bg-[#134170] rounded-md shadow-sm transition-colors duration-150 whitespace-nowrap tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE800F]"
              >
                <Phone className="w-4 h-4 text-[#FE800F] shrink-0" />
                <span>Call +44 7549 542471</span>
              </a>
            </div>

            {/* Service Highlights Row */}
            <div className="pt-4 border-t border-[#195490]/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm font-medium text-[#17212B]/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FE800F] shrink-0" />
                <span>Free Quotes Available</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FE800F] shrink-0" />
                <span>Wrexham &amp; Surrounding Areas</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Quality Realistic Renovation Photograph */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-md overflow-hidden border border-[#195490]/15 bg-[#F5F8FB] shadow-md">
              {/* Top Orange Accent Bar */}
              <div className="h-1.5 w-full bg-[#FE800F]" />
              <div className="aspect-16/10 w-full overflow-hidden">
                <ResilientImage
                  src="/src/assets/images/hero_uk_renovation_1791056305152.jpg"
                  alt="Professional joinery and residential home improvement work in a modern UK property"
                  fallbackLabel="Thomas Gibb Home Improvements & Property Maintenance"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Architectural Caption Footer */}
              <div className="bg-white px-5 py-3.5 border-t border-[#195490]/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#17212B]/80">
                <span className="font-semibold text-[#195490]">
                  Thomas Gibb Home Improvements &amp; Property Maintenance
                </span>
                <span className="text-[#17212B]/70">
                  Joinery · Glazing · Kitchens &amp; Bathrooms · UPVC · Building
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
