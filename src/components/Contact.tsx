import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Send,
  ExternalLink,
} from 'lucide-react';

interface ContactProps {
  selectedService: string;
}

const SERVICE_OPTIONS = [
  'Joinery',
  'Glazing',
  'Kitchens & Bathrooms',
  'UPVC',
  'General Building',
  'Property Maintenance',
  'Multiple Services / General Enquiry',
];

export const Contact: React.FC<ContactProps> = ({ selectedService }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Joinery');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService && SERVICE_OPTIONS.includes(selectedService)) {
      setService(selectedService);
    }
  }, [selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!phone.trim() && !email.trim()) {
      setError('Please provide either a phone number or an email address so we can get back to you.');
      return;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
  };

  const mailtoHref = `mailto:gibb.1@live.com?subject=${encodeURIComponent(
    `Free Quote Enquiry - ${service} (${name})`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService Needed: ${service}\n\nMessage:\n${message}`
  )}`;

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-white border-b border-[#195490]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#FE800F] mb-2">
                <span>GET IN TOUCH</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#195490]">FREE QUOTES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#195490] tracking-tight mb-4">
                Ready to Improve Your Property?
              </h2>
              <p className="text-base sm:text-lg text-[#17212B]/80 leading-relaxed">
                Get in touch with Thomas Gibb Home Improvements &amp; Property Maintenance for a free quote.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:+447549542471"
                className="flex items-start gap-4 p-4 rounded-md bg-[#F5F8FB] border border-[#195490]/12 hover:border-[#FE800F] transition-colors duration-150 group"
              >
                <div className="w-11 h-11 rounded-md bg-white border border-[#195490]/15 flex items-center justify-center text-[#FE800F] shrink-0 group-hover:bg-[#FE800F] group-hover:text-white transition-colors duration-150">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#195490]/70 uppercase tracking-wider">
                    Phone
                  </div>
                  <div className="text-lg font-extrabold text-[#195490] tabular-nums mt-0.5">
                    +44 7549 542471
                  </div>
                </div>
              </a>

              <a
                href="mailto:gibb.1@live.com"
                className="flex items-start gap-4 p-4 rounded-md bg-[#F5F8FB] border border-[#195490]/12 hover:border-[#FE800F] transition-colors duration-150 group"
              >
                <div className="w-11 h-11 rounded-md bg-white border border-[#195490]/15 flex items-center justify-center text-[#FE800F] shrink-0 group-hover:bg-[#FE800F] group-hover:text-white transition-colors duration-150">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#195490]/70 uppercase tracking-wider">
                    Email
                  </div>
                  <div className="text-lg font-extrabold text-[#195490] mt-0.5 break-all">
                    gibb.1@live.com
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-md bg-[#F5F8FB] border border-[#195490]/12">
                <div className="w-11 h-11 rounded-md bg-white border border-[#195490]/15 flex items-center justify-center text-[#FE800F] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#195490]/70 uppercase tracking-wider">
                    Location
                  </div>
                  <div className="text-lg font-extrabold text-[#195490] mt-0.5">
                    Wrexham, United Kingdom
                  </div>
                  <div className="text-xs text-[#17212B]/70 mt-0.5">
                    Covering Wrexham and surrounding areas
                  </div>
                </div>
              </div>
            </div>

            {/* Direct CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  const input = document.getElementById('quote-name-input');
                  if (input) input.focus();
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#FE800F] hover:bg-[#e56f05] rounded-md transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                <span>Request a Free Quote</span>
              </button>
              <a
                href="tel:+447549542471"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#195490] hover:bg-[#134170] rounded-md transition-colors duration-150 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#FE800F]" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact / Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-[#F5F8FB] rounded-md border border-[#195490]/15 p-6 sm:p-8 md:p-10 shadow-xs">
              <div className="border-b border-[#195490]/10 pb-5 mb-6">
                <h3 className="text-2xl font-extrabold text-[#195490]">
                  Request a Free Quote
                </h3>
                <p className="text-sm text-[#17212B]/75 mt-1">
                  Fill in the details below and Thomas Gibb will get back to you regarding your enquiry.
                </p>
              </div>

              {submitted ? (
                <div className="bg-white rounded-md border border-[#195490]/20 p-6 sm:p-8 text-center space-y-5">
                  <div className="w-12 h-12 rounded-md bg-[#FE800F] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-extrabold text-[#195490]">
                      Enquiry Ready to Send
                    </h4>
                    <p className="text-sm text-[#17212B]/80 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-[#17212B]">{name}</span>. Your quote request for{' '}
                      <span className="font-semibold text-[#195490]">{service}</span> has been prepared. Click below to send directly via email or call us now on{' '}
                      <span className="font-semibold tabular-nums">+44 7549 542471</span>.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={mailtoHref}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#FE800F] hover:bg-[#e56f05] rounded-md transition-colors duration-150"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Email to gibb.1@live.com</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setPhone('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="w-full sm:w-auto px-5 py-3 text-sm font-bold text-[#195490] bg-[#F5F8FB] hover:bg-[#195490]/10 rounded-md transition-colors duration-150 cursor-pointer"
                    >
                      Edit Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {error && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-md bg-white border-l-4 border-[#FE800F] text-sm font-semibold text-[#17212B]"
                    >
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="quote-name-input"
                        className="block text-sm font-bold text-[#195490] mb-1.5"
                      >
                        Name <span className="text-[#FE800F]">*</span>
                      </label>
                      <input
                        id="quote-name-input"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-white border border-[#195490]/25 rounded-md text-sm text-[#17212B] placeholder:text-[#17212B]/40 focus:outline-none focus:border-[#195490] focus:ring-2 focus:ring-[#195490]/15"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-phone-input"
                        className="block text-sm font-bold text-[#195490] mb-1.5"
                      >
                        Phone <span className="text-[#FE800F]">*</span>
                      </label>
                      <input
                        id="quote-phone-input"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Your phone number"
                        className="w-full px-4 py-3 bg-white border border-[#195490]/25 rounded-md text-sm text-[#17212B] placeholder:text-[#17212B]/40 focus:outline-none focus:border-[#195490] focus:ring-2 focus:ring-[#195490]/15"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="quote-email-input"
                        className="block text-sm font-bold text-[#195490] mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        id="quote-email-input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 bg-white border border-[#195490]/25 rounded-md text-sm text-[#17212B] placeholder:text-[#17212B]/40 focus:outline-none focus:border-[#195490] focus:ring-2 focus:ring-[#195490]/15"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-service-select"
                        className="block text-sm font-bold text-[#195490] mb-1.5"
                      >
                        What do you need help with?
                      </label>
                      <select
                        id="quote-service-select"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-[#195490]/25 rounded-md text-sm text-[#17212B] focus:outline-none focus:border-[#195490] focus:ring-2 focus:ring-[#195490]/15"
                      >
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-message-input"
                      className="block text-sm font-bold text-[#195490] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="quote-message-input"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe the work you are looking to have done..."
                      className="w-full px-4 py-3 bg-white border border-[#195490]/25 rounded-md text-sm text-[#17212B] placeholder:text-[#17212B]/40 focus:outline-none focus:border-[#195490] focus:ring-2 focus:ring-[#195490]/15 resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-white bg-[#FE800F] hover:bg-[#e56f05] rounded-md shadow-xs transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#195490]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Free Quote</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
