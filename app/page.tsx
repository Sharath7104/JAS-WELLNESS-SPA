import Link from 'next/link';
import Image from 'next/image';
import StructuredData from './components/StructuredData';
import FirstTimeOfferPopup from './components/FirstTimeOfferPopup';
import FaqAccordion from './components/FaqAccordion';
import { SITE_NAME, SITE_URL, WHATSAPP_URL } from './config/site';

export default function HomePage() {
  const homeFaqs = [
    {
      question: 'Do I need to book in advance?',
      answer: 'Advance booking is recommended, especially on weekends and evenings.',
    },
    {
      question: `What services are available at ${SITE_NAME}?`,
      answer: 'We offer body massage, facial treatments and aromatherapy sessions in Pondicherry.',
    },
  ];

  const highlights = [
    'Dual hand disinfection before treatments',
    'Single-use spa disposables',
    'Sterilized implements for every guest',
    'No hard-selling, only thoughtful care',
  ];

  return (
    <main className="premium-shell">
      <FirstTimeOfferPopup />
      <StructuredData
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: `${SITE_NAME} - Home`,
            url: `${SITE_URL}/`,
            description: 'Premium massage, facial and aromatherapy spa services in Pondicherry.',
            about: {
              '@type': 'HealthAndBeautyBusiness',
              name: SITE_NAME,
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: `${SITE_URL}/`,
              },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: homeFaqs.map((faq) => ({
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

      <section className="relative flex min-h-[74vh] items-center justify-center px-4 text-center">
        <Image src="/images/services/aromatherapy.jpg" alt="Aromatherapy spa room" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#160f09]/50" />
        <div className="relative z-10 max-w-3xl text-[#fff8f0]">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#f0d7b2]">Massage . Wellness . Rituals</p>
          <h1 className="mb-6 font-serif text-4xl leading-tight md:text-6xl">Indulge in Deep, Lasting Tranquility</h1>
          <p className="mx-auto mb-8 max-w-xl text-sm text-[#f7e5d0] md:text-base">
            A premium spa destination in Pondicherry offering restorative body therapies, soothing facials and mindful care.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#a8804d] px-8 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#8f6b3f]"
            >
              Book via WhatsApp
            </a>
            <Link
              href="/services"
              className="rounded-full border border-[#f1d3a9] px-8 py-3 text-xs uppercase tracking-[0.2em] text-[#ffead0] transition hover:bg-[#ffead0] hover:text-[#382a18]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8f6b3f]">Our Services</p>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl">Curated Wellness Experiences</h2>
          <div className="gold-divider mx-auto mt-5" />
        </div>
        <div className="grid gap-7 md:grid-cols-3">
          {[
            { title: 'Body Massage', img: '/images/services/swedish.jpg', desc: 'Ease tension with therapies tailored to your pressure and comfort preferences.' },
            { title: 'Facial Treatments', img: '/images/services/glow-facial.jpg', desc: 'Restore your glow with skin-calming rituals that nourish and hydrate deeply.' },
            { title: 'Aromatherapy', img: '/images/services/aromatherapy.jpg', desc: 'Rebalance your senses with aromatic oils and slow, calming treatment flow.' },
          ].map((item) => (
            <article key={item.title} className="overflow-hidden rounded-3xl border border-[#e5d5bf] bg-white/85 shadow-[0_20px_60px_-30px_rgba(56,42,24,0.4)]">
              <div className="relative h-60">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5f4c37]">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/70 px-4 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="relative h-[420px] overflow-hidden rounded-3xl">
            <Image src="/images/reception.jpg" alt="JAS Wellness Spa reception" fill className="object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#8f6b3f]">Our Promise</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">Top-Notch Hygiene & Care Standards</h2>
            <p className="mt-5 text-sm leading-relaxed text-[#5f4c37] md:text-base">
              Inspired by premium spa benchmarks, every detail at JAS Wellness Spa is designed around comfort, hygiene and peace of mind.
            </p>
            <div className="mt-8 grid gap-3">
              {highlights.map((item) => (
                <p key={item} className="rounded-2xl border border-[#ecdac0] bg-[#fffaf3] px-4 py-3 text-sm text-[#4f3d2a]">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-5xl">Begin Your Relaxation Journey</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-[#66523b] md:text-base">
          Reserve your preferred slot and let our team design a treatment that helps your body and mind reset.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-[#8f6b3f] px-8 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#76552f]"
        >
          Contact via WhatsApp
        </a>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-[#8f6b3f]">Frequently Asked Questions</p>
        <h2 className="mt-3 text-center font-serif text-3xl md:text-4xl">Spa Booking FAQs</h2>
        <div className="mt-8">
          <FaqAccordion items={homeFaqs} />
        </div>
      </section>
    </main>
  );
}