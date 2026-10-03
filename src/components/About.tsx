import React from 'react';
import { motion } from 'motion/react';
import { Check, Phone, ArrowRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface AboutProps {
  onGetQuote: () => void;
}

const FEATURES = [
  'Local to Wrexham',
  'Free Quotes',
  'Multiple Home Improvement Services',
  'Property Maintenance',
];

export const About: React.FC<AboutProps> = ({ onGetQuote }) => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white border-b border-[#195490]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Professional Home Improvement / Renovation Image */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="rounded-md overflow-hidden border border-[#195490]/15 bg-[#F5F8FB] shadow-sm">
              <div className="aspect-4/3 w-full overflow-hidden">
                <ResilientImage
                  src="/src/assets/images/about_property_maintenance_1791056321559.jpg"
                  alt="Well-maintained residential property exterior with new UPVC glazing and doors in Wrexham"
                  fallbackLabel="Residential Property Improvements in Wrexham"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#195490] px-6 py-4 flex items-center justify-between text-white">
                <span className="text-sm font-semibold">
                  Serving Wrexham &amp; Surrounding Areas
                </span>
                <span className="text-xs font-bold text-[#FE800F] whitespace-nowrap">
                  FREE QUOTES AVAILABLE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Feature Items */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#FE800F]">
              <span>WHY THOMAS GIBB</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#195490]">PRACTICAL &amp; RELIABLE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#195490] tracking-tight leading-tight">
              Professional Home Improvements in Wrexham
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#17212B]/85 leading-relaxed">
              <p>
                Thomas Gibb Home Improvements &amp; Property Maintenance provides professional home improvement and property maintenance services in Wrexham and surrounding areas.
              </p>
              <p>
                Whether you&apos;re looking for joinery, glazing, kitchen and bathroom work, UPVC services or general building work, the business offers a practical approach to improving and maintaining your property.
              </p>
            </div>

            {/* Four Small Feature Items */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {FEATURES.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 p-3.5 rounded-md bg-[#F5F8FB] border border-[#195490]/10"
                >
                  <span className="w-6 h-6 rounded-sm bg-[#FE800F] text-white flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </span>
                  <span className="text-sm font-bold text-[#195490]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onGetQuote}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#FE800F] hover:bg-[#e56f05] rounded-md transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+447549542471"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-bold text-[#195490] border border-[#195490]/25 hover:bg-[#F5F8FB] rounded-md transition-colors duration-150 whitespace-nowrap tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#FE800F]" />
                <span>+44 7549 542471</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
