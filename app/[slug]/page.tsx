import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import seoPages from '../data/seo-pages.json';
import StructuredData from '../components/StructuredData';
import { SITE_NAME, SITE_URL, WHATSAPP_URL } from '../config/site';

type SeoPage = {
  slug: string;
  title: string;
  description: string;
  heading: string;
  content: string[];
};

type SlugPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return (seoPages.pages as SeoPage[]).map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = (seoPages.pages as SeoPage[]).find((item) => item.slug === slug);

  if (!page) {
    return {
      title: 'Wellness Page',
      description: 'Spa and wellness services in Pondicherry.',
      alternates: {
        canonical: `${SITE_URL}/`,
      },
    };
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `${SITE_URL}/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SITE_URL}/${page.slug}`,
      siteName: SITE_NAME,
      type: 'article',
      images: [{ url: '/images/aroma.jpeg', width: 1200, height: 630, alt: page.heading }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: ['/images/aroma.jpeg'],
    },
  };
}

export default async function Page({ params }: SlugPageProps) {
  const { slug } = await params;
  const page = (seoPages.pages as SeoPage[]).find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="premium-shell min-h-screen px-6 py-16">
      <StructuredData
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: page.heading,
            url: `${SITE_URL}/${slug}`,
            description: page.description,
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
              { '@type': 'ListItem', position: 2, name: page.heading, item: `${SITE_URL}/${slug}` },
            ],
          },
        ]}
      />
      <div className="mx-auto max-w-4xl rounded-3xl border border-[#e5d5bf] bg-white/80 p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.25em] text-[#8f6b3f]">Local Wellness Guide</p>
        <h1 className="mt-4 font-serif text-4xl text-[#2f2419] md:text-5xl">{page.heading}</h1>
        <p className="mt-4 text-sm leading-relaxed text-[#5c4934] md:text-base">{page.description}</p>

        <div className="mt-8 space-y-5 text-sm leading-relaxed text-[#4f3d2a] md:text-base">
          {page.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#8f6b3f] px-8 py-3 text-center text-xs uppercase tracking-[0.2em] text-white"
          >
            Book via WhatsApp
          </a>
          <Link
            href="/services"
            className="rounded-full border border-[#8f6b3f] px-8 py-3 text-center text-xs uppercase tracking-[0.2em] text-[#5f4526]"
          >
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}