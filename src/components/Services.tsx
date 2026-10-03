import React from 'react';
import { motion } from 'motion/react';
import {
  Hammer,
  Maximize2,
  Bath,
  ShieldCheck,
  BrickWall,
  Wrench,
  ArrowUpRight,
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'Joinery',
    number: '01',
    title: 'JOINERY',
    description: 'Professional joinery work for residential improvement projects.',
    icon: Hammer,
  },
  {
    id: 'Glazing',
    number: '02',
    title: 'GLAZING',
    description: 'Glazing solutions for home improvement and maintenance requirements.',
    icon: Maximize2,
  },
  {
    id: 'Kitchens & Bathrooms',
    number: '03',
    title: 'KITCHENS & BATHROOMS',
    description: 'Home improvement work for kitchens and bathrooms.',
    icon: Bath,
  },
  {
    id: 'UPVC',
    number: '04',
    title: 'UPVC',
    description: 'UPVC-related home improvement and maintenance work.',
    icon: ShieldCheck,
  },
  {
    id: 'General Building',
    number: '05',
    title: 'GENERAL BUILDING',
    description: 'General building work for a range of residential requirements.',
    icon: BrickWall,
  },
  {
    id: 'Property Maintenance',
    number: '06',
    title: 'PROPERTY MAINTENANCE',
    description:
      'Practical property maintenance services for homes in Wrexham and surrounding areas.',
    icon: Wrench,
  },
];

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-[#F5F8FB] border-b border-[#195490]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#FE800F] mb-2">
            <span>OUR SERVICES</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#195490]">WREXHAM &amp; SURROUNDING AREAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#195490] tracking-tight mb-4">
            What We Do
          </h2>
          <p className="text-base sm:text-lg text-[#17212B]/80 leading-relaxed">
            From joinery and glazing to kitchens, bathrooms and general building work, Thomas Gibb provides a range of home improvement and property maintenance services.
          </p>
        </div>

        {/* 6 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-md border border-[#195490]/12 shadow-xs hover:shadow-md hover:border-[#FE800F] transition-all duration-150 p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon & Editorial Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-md bg-[#F5F8FB] border border-[#195490]/10 flex items-center justify-center text-[#FE800F] group-hover:bg-[#FE800F] group-hover:text-white transition-colors duration-150">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#195490]/40 tabular-nums">
                      {service.number}
                    </span>
                  </div>

                  {/* Navy Heading */}
                  <h3 className="text-lg font-extrabold text-[#195490] tracking-tight mb-2.5">
                    {service.title}
                  </h3>

                  {/* Supporting Description */}
                  <p className="text-sm sm:text-base text-[#17212B]/80 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-[#195490]/10">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.id)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#195490] group-hover:text-[#FE800F] transition-colors duration-150 cursor-pointer whitespace-nowrap"
                  >
                    <span>Request a Free Quote</span>
                    <ArrowUpRight className="w-4 h-4 text-[#FE800F] shrink-0" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
