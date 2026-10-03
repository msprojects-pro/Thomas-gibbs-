import React from 'react';
import { motion } from 'motion/react';
import { ThumbsUp, Star, Phone, ArrowRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface ShowcaseItem {
  id: string;
  serviceCategory: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'Joinery',
    serviceCategory: 'Joinery & Carpentry',
    title: 'Residential Joinery & Woodwork',
    description:
      'Internal doors, staircases, skirting, architraves and bespoke residential timber work.',
    image: '/src/assets/images/showcase_joinery_carpentry_1791056338713.jpg',
    alt: 'Bespoke oak staircase spindles and internal joinery woodwork inside a UK residential home',
  },
  {
    id: 'Kitchens & Bathrooms',
    serviceCategory: 'Kitchens & Bathrooms',
    title: 'Kitchen & Bathroom Improvements',
    description:
      'Practical kitchen and bathroom refurbishment, fitting and home improvement work.',
    image: '/src/assets/images/showcase_kitchen_renovation_1791056351616.jpg',
    alt: 'Modern shaker kitchen cabinetry and worktops inside a refurbished British home',
  },
  {
    id: 'Glazing',
    serviceCategory: 'Glazing & UPVC',
    title: 'Residential Glazing & UPVC Work',
    description:
      'Windows, doors, UPVC installations, replacements and glazing maintenance.',
    image: '/src/assets/images/showcase_glazing_upvc_1791056363424.jpg',
    alt: 'Newly installed modern UPVC double glazed windows on a brick residential property',
  },
  {
    id: 'General Building',
    serviceCategory: 'Building & Maintenance',
    title: 'General Building & Property Maintenance',
    description:
      'Reliable general building work and ongoing property maintenance across Wrexham.',
    image: '/src/assets/images/showcase_building_work_1791056377923.jpg',
    alt: 'Completed residential building and exterior property maintenance work on a UK home',
  },
];

interface ShowcaseProps {
  onSelectService: (serviceName: string) => void;
}

export const Showcase: React.FC<ShowcaseProps> = ({ onSelectService }) => {
  return (
    <section
      id="showcase"
      className="py-16 md:py-24 bg-[#F5F8FB] border-b border-[#195490]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Heading & Supporting Statement */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#FE800F] mb-2">
            <span>WORK &amp; CAPABILITIES</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#195490]">HOME IMPROVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#195490] tracking-tight mb-4">
            Quality Work Across Your Home
          </h2>
          <p className="text-base sm:text-lg text-[#17212B]/80 leading-relaxed">
            From individual improvements to broader property maintenance requirements, every project starts with understanding what the customer needs.
          </p>
        </div>

        {/* 4-Card Visual Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {SHOWCASE_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-white rounded-md border border-[#195490]/12 overflow-hidden shadow-xs hover:shadow-md transition-all duration-150 flex flex-col"
            >
              <div className="aspect-16/10 w-full overflow-hidden bg-[#F5F8FB] border-b border-[#195490]/10">
                <ResilientImage
                  src={item.image}
                  alt={item.alt}
                  fallbackLabel={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-[#FE800F] tracking-wide uppercase mb-1.5">
                    {item.serviceCategory}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#195490] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#17212B]/80 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#195490]/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectService(item.id)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#195490] hover:text-[#FE800F] transition-colors duration-150 cursor-pointer"
                  >
                    <span>Enquire About {item.serviceCategory}</span>
                    <ArrowRight className="w-4 h-4 text-[#FE800F]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prominent Navy Trust Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#195490] rounded-md border-l-8 border-[#FE800F] p-8 sm:p-10 md:p-12 text-white shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Metric Block */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row sm:items-center gap-6 lg:border-r lg:border-white/15 lg:pr-8">
              <div className="w-16 h-16 rounded-md bg-[#FE800F] text-white flex items-center justify-center shrink-0">
                <ThumbsUp className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#FE800F] mb-1">
                  <Star className="w-4 h-4 fill-[#FE800F]" />
                  <Star className="w-4 h-4 fill-[#FE800F]" />
                  <Star className="w-4 h-4 fill-[#FE800F]" />
                  <Star className="w-4 h-4 fill-[#FE800F]" />
                  <Star className="w-4 h-4 fill-[#FE800F]" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white tabular-nums">
                  98% Recommended
                </div>
                <div className="text-base font-semibold text-[#FE800F] mt-0.5 tabular-nums">
                  50 Customer Reviews
                </div>
              </div>
            </div>

            {/* Right Context & CTA Block */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-md">
                <h3 className="text-xl font-bold text-white">
                  Trusted by Homeowners Across Wrexham
                </h3>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                  Professional home improvement and property maintenance services with free quotes available.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 w-full sm:w-auto shrink-0">
                <button
                  type="button"
                  onClick={() => onSelectService('')}
                  className="px-6 py-3.5 text-sm font-bold text-white bg-[#FE800F] hover:bg-[#e56f05] rounded-md transition-colors duration-150 whitespace-nowrap cursor-pointer text-center"
                >
                  Get a Free Quote
                </button>
                <a
                  href="tel:+447549542471"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white border border-white/30 hover:bg-white/10 rounded-md transition-colors duration-150 whitespace-nowrap tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#FE800F]" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
