import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '../config/site';

export const metadata: Metadata = {
  title: 'Contact & Booking',
  description:
    'Contact JAS Wellness Spa in Pondicherry for booking and service enquiries via phone or WhatsApp.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: `Contact & Booking | ${SITE_NAME}`,
    description:
      'Contact JAS Wellness Spa in Pondicherry for booking and service enquiries via phone or WhatsApp.',
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: '/images/aroma.jpeg', width: 1200, height: 630, alt: 'Contact JAS Wellness Spa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact & Booking | ${SITE_NAME}`,
    description:
      'Contact JAS Wellness Spa in Pondicherry for booking and service enquiries via phone or WhatsApp.',
    images: ['/images/aroma.jpeg'],
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
