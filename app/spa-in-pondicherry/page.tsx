import type { Metadata } from 'next';
import StructuredData from '../components/StructuredData';
import FaqAccordion from '../components/FaqAccordion';
import { SITE_NAME, SITE_URL, WHATSAPP_URL } from '../config/site';

export const metadata: Metadata = {
  title: 'Best Spa in Pondicherry | JAS Wellness Spa',
  description:
    'Looking for the best spa in Pondicherry? JAS Wellness Spa offers premium body massage, facials, and relaxation therapies. Book via WhatsApp today.',
  keywords: [
    'spa in pondicherry',
    'best spa in pondicherry',
    'massage in pondicherry',
    'wellness spa pondicherry',
  ],
  alternates: {
    canonical: `${SITE_URL}/spa-in-pondicherry`,
  },
  openGraph: {
    title: 'Best Spa in Pondicherry | JAS Wellness Spa',
    description:
      'Looking for the best spa in Pondicherry? JAS Wellness Spa offers premium body massage, facials, and relaxation therapies.',
    url: `${SITE_URL}/spa-in-pondicherry`,
    siteName: SITE_NAME,
    type: 'article',
    images: [{ url: '/images/aroma.jpeg', width: 1200, height: 630, alt: 'Best Spa in Pondicherry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Spa in Pondicherry | JAS Wellness Spa',
    description:
      'Looking for the best spa in Pondicherry? JAS Wellness Spa offers premium body massage, facials, and relaxation therapies.',
    images: ['/images/aroma.jpeg'],
  },
};

export default function SpaPondicherryPage() {
  const locationFaqs = [
    {
      question: 'Which are the best spa services in Pondicherry?',
      answer:
        'Popular options include body massage, aromatherapy and facial rejuvenation services at JAS Wellness Spa.',
    },
  ];

  return (
    <main className="premium-shell min-h-screen px-6 py-16">
      <StructuredData
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Best Spa in Pondicherry',
            url: `${SITE_URL}/spa-in-pondicherry`,
            description:
              `${SITE_NAME} offers premium massage, facials and aromatherapy in Pondicherry.`,
            about: {
              '@type': 'HealthAndBeautyBusiness',
              name: SITE_NAME,
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Best Spa in Pondicherry', item: `${SITE_URL}/spa-in-pondicherry` },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: locationFaqs.map((faq) => ({
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
      <div className="mx-auto max-w-4xl rounded-3xl border border-[#e5d5bf] bg-white/80 p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.25em] text-[#8f6b3f]">Local Wellness Guide</p>
        <h1 className="mt-4 font-serif text-4xl text-[#2f2419] md:text-5xl">Best Spa in Pondicherry</h1>
        <p className="mb-10 mt-5 text-base leading-relaxed text-[#5c4934] md:text-lg">
          Experience luxury and relaxation at JAS Wellness Spa. We provide premium massage therapies, facials, and wellness treatments designed to rejuvenate your mind and body.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full bg-[#8f6b3f] px-7 py-3 text-xs uppercase tracking-[0.2em] text-white"
        >
          Book via WhatsApp
        </a>

        <div className="mt-12 space-y-6 text-[#4f3d2a]">
        <p>
          If you are searching for a premium spa in Pondicherry, JAS Wellness Spa offers a peaceful and luxurious experience. Our therapies are designed to reduce stress, improve circulation, and promote deep relaxation.
        </p>

        <p>
          We specialize in body massage, aromatherapy, and facial treatments using high-quality products and trained therapists.
        </p>

        <p>
          Located conveniently in Pondicherry, we ensure hygiene, comfort, and a calming ambience for all our customers.
        </p>
        </div>

        <div className="mt-12">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8f6b3f]">Frequently Asked Questions</p>
          <h2 className="mt-3 font-serif text-3xl text-[#2f2419]">Pondicherry Spa FAQ</h2>
          <div className="mt-6">
            <FaqAccordion items={locationFaqs} />
          </div>
        </div>
      </div>
    </main>
  );
}