import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '../config/site';

export const metadata: Metadata = {
  title: 'Spa Services in Pondicherry',
  description:
    'Explore massage, facial and aromatherapy services at JAS Wellness Spa in Pondicherry.',
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: `Spa Services in Pondicherry | ${SITE_NAME}`,
    description:
      'Explore massage, facial and aromatherapy services at JAS Wellness Spa in Pondicherry.',
    url: `${SITE_URL}/services`,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: '/images/deep.jpeg', width: 1200, height: 630, alt: 'Spa services menu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Spa Services in Pondicherry | ${SITE_NAME}`,
    description:
      'Explore massage, facial and aromatherapy services at JAS Wellness Spa in Pondicherry.',
    images: ['/images/deep.jpeg'],
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
