'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ServicesData, Service } from '../types/service';
import { WHATSAPP_URL, PHONE_TEL } from '../config/site';

export default function ServiceBrowser({ data }: { data: ServicesData }) {
  const [activeCategory, setActiveCategory] = useState(data.categories[0].name);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const currentCategory = data.categories.find((cat) => cat.name === activeCategory);

  useEffect(() => {
    if (!selectedService) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedService]);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-4">
        {data.categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.17em] transition ${
              activeCategory === category.name
                ? 'border-[#8f6b3f] bg-[#8f6b3f] text-white'
                : 'border-[#d5c3a7] bg-white/80 text-[#4b3927] hover:border-[#8f6b3f]'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {currentCategory?.services.map((service: Service) => (
          <button
            key={service.id}
            type="button"
            onClick={() => setSelectedService(service)}
            aria-label={`View details for ${service.name}`}
            className="w-full cursor-pointer overflow-hidden rounded-3xl border border-[#e3d3ba] bg-white text-left shadow-[0_20px_50px_-30px_rgba(56,42,24,0.55)] transition hover:-translate-y-1"
          >
            <div className="relative h-52 w-full">
              <Image src={service.image} alt={service.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h2 className="font-serif text-2xl text-[#2f2419]">{service.name}</h2>
              <p className="mt-1 text-sm text-[#7a654d]">{service.duration}</p>
              {data.showPricing && (
                <p className="mt-2 font-medium text-[#8f6b3f]">{service.price}</p>
              )}
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="relative w-full max-w-xl rounded-3xl border border-[#e3d3ba] bg-[#fffaf4] p-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={selectedService.name}
            >
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Close service details"
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#f0e6d6] text-[#8f6b3f] hover:bg-[#e8d5c0]"
              >
                ×
              </button>

              <div className="relative mb-4 h-56 w-full overflow-hidden rounded-2xl">
                <Image src={selectedService.image} alt={selectedService.name} fill className="object-cover" />
              </div>

              <h2 className="font-serif text-3xl text-[#2f2419]">{selectedService.name}</h2>
              <p className="mt-1 text-[#7a654d]">{selectedService.duration}</p>
              {data.showPricing && (
                <p className="mt-2 font-medium text-[#8f6b3f]">{selectedService.price}</p>
              )}
              <p className="mt-4 text-sm leading-relaxed text-[#5c4934]">{selectedService.description}</p>
              <ul className="mt-4 list-disc pl-5 text-sm text-[#5c4934]">
                {selectedService.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="mt-6 flex gap-4">
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                    `Hello, I would like to book ${selectedService.name} (${selectedService.duration}).`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-full bg-[#8f6b3f] py-3 text-center text-xs uppercase tracking-[0.17em] text-white"
                >
                  WhatsApp
                </a>
                <a
                  href={PHONE_TEL}
                  className="flex-1 rounded-full border border-[#8f6b3f] py-3 text-center text-xs uppercase tracking-[0.17em] text-[#5f4526]"
                >
                  Call
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
