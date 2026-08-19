import servicesData from '../data/services.json';
import { ServicesData } from '../types/service';
import StructuredData from '../components/StructuredData';
import FaqAccordion from '../components/FaqAccordion';
import ServiceBrowser from './ServiceBrowser';
import { SITE_URL } from '../config/site';

export default function ServicesPage() {
  const data: ServicesData = servicesData;
  const serviceFaqs = [
    {
      question: 'How do I choose the right massage service?',
      answer:
        'Choose based on your goal: deep tissue for muscle relief, Swedish for relaxation, or aromatherapy for stress reduction.',
    },
    {
      question: 'Can I book services through WhatsApp?',
      answer: 'Yes, all listed services can be booked directly through our WhatsApp booking button.',
    },
  ];

  return (
    <>
      <StructuredData
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'JAS Wellness Spa Services',
            itemListElement: data.categories
              .flatMap((category) => category.services)
              .map((service, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'Service',
                  name: service.name,
                  description: service.description,
                  areaServed: 'Pondicherry',
                },
              })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: serviceFaqs.map((faq) => ({
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
      <div className="premium-shell min-h-screen p-6 pt-16 md:pt-30">
        <div className="mb-10 text-center">
          <h1 className="mt-3 font-serif text-4xl text-[#2f2419] md:text-5xl">Our Services</h1>
        </div>

        <ServiceBrowser data={data} />

        <section className="mx-auto mt-16 max-w-5xl">
          <p className="text-center text-xs uppercase tracking-[0.24em] text-[#8f6b3f]">Frequently Asked Questions</p>
          <h2 className="mt-3 text-center font-serif text-3xl text-[#2f2419] md:text-4xl">Service FAQs</h2>
          <div className="mt-8">
            <FaqAccordion items={serviceFaqs} />
          </div>
        </section>
      </div>
    </>
  );
}
