import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '../config/site';

export const metadata: Metadata = {
  title: 'About Our Spa',
  description:
    'Learn about JAS Wellness Spa, our wellness philosophy, hygiene commitment, and personalized care approach.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: `About Our Spa | ${SITE_NAME}`,
    description:
      'Learn about JAS Wellness Spa, our wellness philosophy, hygiene commitment, and personalized care approach.',
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: '/images/aroma.jpeg', width: 1200, height: 630, alt: 'About JAS Wellness Spa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About Our Spa | ${SITE_NAME}`,
    description:
      'Learn about JAS Wellness Spa, our wellness philosophy, hygiene commitment, and personalized care approach.',
    images: ['/images/aroma.jpeg'],
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
