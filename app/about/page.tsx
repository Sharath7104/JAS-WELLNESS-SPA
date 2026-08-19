import Image from 'next/image';
import StructuredData from '../components/StructuredData';
import { SITE_NAME, SITE_URL, WHATSAPP_URL } from '../config/site';

export default function AboutPage() {
  return (
    <main className="premium-shell text-[#2f2419]">
      <StructuredData
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: `About ${SITE_NAME}`,
            url: `${SITE_URL}/about`,
            description: `Learn about ${SITE_NAME}, our wellness philosophy, hygiene standards and premium care.`,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What makes JAS Wellness Spa different?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We focus on premium care, trained therapists, hygiene-first processes and a calm, personalized guest experience.',
                },
              },
            ],
          },
        ]}
      />
      <section className="relative flex h-[58vh] items-center justify-center px-4 text-center">
        <Image src="/images/aroma.jpeg" alt="JAS Wellness Spa ambiance" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#120d08]/55" />
        <div className="relative z-10 text-[#fff4e6]">
          <p className="text-xs uppercase tracking-[0.24em] text-[#e8cda7]">Our Story</p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl">About JAS Wellness Spa</h1>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl">A Sanctuary of Relaxation</h2>
          <p className="mt-6 text-sm leading-relaxed text-[#5c4934] md:text-lg">
            JAS Wellness Spa is designed to help you disconnect from rush and reconnect with your inner calm. Our treatments are crafted to deliver physical relief and mental clarity in a serene, premium setting.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#5c4934] md:text-lg">
            Every experience is guided by trained professionals who prioritize your comfort, safety, and overall well-being.
          </p>
        </div>
      </section>

      <section className="bg-white/70 px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="relative h-[360px] overflow-hidden rounded-3xl md:h-[430px]">
            <Image src="/images/deep.jpeg" alt="Spa massage ritual" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-serif text-3xl md:text-4xl">Designed for Your Well-Being</h3>
            <p className="mt-5 text-sm leading-relaxed text-[#5c4934]">
              Our spa blends traditional techniques with modern wellness practices to deliver a deeply rejuvenating experience.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#5c4934]">
              From calming aromatherapy sessions to therapeutic massages, every service is tailored to your body&apos;s needs and stress points.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 text-center sm:px-6">
        <h2 className="font-serif text-3xl md:text-5xl">Why Choose Us</h2>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {[
            'Certified Therapists',
            'Premium Ambience',
            'Hygiene & Safety',
            'Personalized Care',
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-[#e6d4ba] bg-white/80 p-6 shadow-[0_20px_50px_-30px_rgba(56,42,24,0.5)]">
              <p className="text-sm text-[#463322] md:text-base">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#efe2d0] py-16 text-center">
        <h2 className="font-serif text-3xl md:text-5xl">Experience True Relaxation</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-[#59452f] md:text-lg">Let us curate a wellness ritual that restores your body and mind.</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-block rounded-full bg-[#8f6b3f] px-7 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#76552f]"
        >
          Book via WhatsApp
        </a>
      </section>
    </main>
  );
}