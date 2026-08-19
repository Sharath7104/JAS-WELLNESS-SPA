'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import StructuredData from '../components/StructuredData';
import FaqAccordion from '../components/FaqAccordion';
import { SITE_NAME, SITE_URL, WHATSAPP_URL, PHONE_TEL } from '../config/site';

export default function ContactPage() {
  const contactFaqs = [
    {
      question: 'How can I book a spa session?',
      answer: 'You can book through WhatsApp or call us directly on 9500130102.',
    },
    {
      question: 'What are your working hours?',
      answer: 'We are open daily from 10:30 AM to 9:00 PM.',
    },
  ];

  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Hello, I would like to book a service.\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`
    );
    window.open(`${WHATSAPP_URL}?text=${text}`, '_blank');
  };

  return (
    <main className="premium-shell text-[#2f2419]">
      <StructuredData
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: `Contact ${SITE_NAME}`,
            url: `${SITE_URL}/contact`,
            description: `Book your spa treatment or contact ${SITE_NAME} in Pondicherry by phone or WhatsApp.`,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: contactFaqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          },
        ]}
      />
      <section className="relative flex h-[48vh] items-center justify-center px-4 text-center">
        <Image src="/images/services/aromatherapy.jpg" alt="Spa contact hero" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#120d08]/55" />
        <div className="relative z-10 text-white">
          <p className="text-xs uppercase tracking-[0.24em] text-[#e8cda7]">Book & Enquire</p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl">Contact Us</h1>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Get in Touch</h2>
            <p className="mb-8 mt-5 text-sm leading-relaxed text-[#5c4934] md:text-base">
              Book your spa session or share your preferences. We&apos;ll help you choose the ideal treatment experience.
            </p>
            <div className="space-y-4 rounded-2xl border border-[#e4d3ba] bg-white/70 p-6 text-sm md:text-base">
              <p>
                Phone: <a href={PHONE_TEL} className="underline decoration-[#8f6b3f]">9500130102</a>
              </p>
              <p>
                WhatsApp:{' '}
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="underline decoration-[#8f6b3f]">
                  Chat on WhatsApp
                </a>
              </p>
              <p>Location: Pondicherry</p>
              <p>Hours: 10:30 AM - 9:00 PM (Daily)</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-[#e4d3ba] bg-white p-6 shadow-[0_20px_50px_-30px_rgba(56,42,24,0.55)]"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="w-full rounded-xl border border-[#d9c7ab] p-3"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="w-full rounded-xl border border-[#d9c7ab] p-3"
            />
            <textarea
              name="message"
              placeholder="Preferred date, service, or any note"
              rows={4}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#d9c7ab] p-3"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-[#8f6b3f] py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#76552f]"
            >
              Book via WhatsApp
            </button>
          </form>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-xs uppercase tracking-[0.24em] text-[#8f6b3f]">Find Us</p>
          <h2 className="mb-6 font-serif text-3xl md:text-4xl">Our Location</h2>
          <div className="overflow-hidden rounded-3xl border border-[#e4d3ba] shadow-[0_20px_50px_-30px_rgba(56,42,24,0.4)]">
            <iframe
              title="JAS Wellness Spa location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.5!2d79.8272655!3d11.9338372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361686bae09e1%3A0xbc175b915a50f963!2sJas%20Wellness%20Spa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://maps.app.goo.gl/ZbFVCHJSdSHqrEDbA"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm text-[#8f6b3f] underline decoration-[#8f6b3f]/50 hover:decoration-[#8f6b3f]"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>

      <section className="bg-[#efe2d0] py-16 text-center">
        <h2 className="font-serif text-3xl md:text-5xl">Ready to Relax?</h2>
        <p className="mt-4 text-sm text-[#5c4934] md:text-base">Reserve your session now and enjoy a premium spa experience.</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-block rounded-full bg-[#8f6b3f] px-7 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#76552f]"
        >
          Contact via WhatsApp
        </a>
      </section>

      <section className="mx-auto max-w-5xl px-4 pt-12 pb-20 md:pt-16">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-[#8f6b3f]">Frequently Asked Questions</p>
        <h2 className="mt-3 text-center font-serif text-3xl md:text-4xl">Booking FAQs</h2>
        <div className="mt-8">
          <FaqAccordion items={contactFaqs} />
        </div>
      </section>
    </main>
  );
}