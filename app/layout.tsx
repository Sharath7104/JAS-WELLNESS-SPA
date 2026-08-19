import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import StructuredData from './components/StructuredData';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { BUSINESS_PHONE, SAME_AS_URLS, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './config/site';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Premium Spa in Pondicherry`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_NAME} | Premium Spa in Pondicherry`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/aroma.jpeg',
        alt: `${SITE_NAME} premium spa experience`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Premium Spa in Pondicherry`,
    description: SITE_DESCRIPTION,
    images: ['/images/aroma.jpeg'],
  },
  verification: {
    google: 'vM1tB27rdclV50uXDfxT7pxF8nwHu2vK9O9Er1_FsCU',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body>
        <StructuredData
          data={[
            {
              '@context': 'https://schema.org',
              '@type': 'HealthAndBeautyBusiness',
              name: SITE_NAME,
              url: SITE_URL,
              telephone: BUSINESS_PHONE,
              priceRange: '₹₹',
              openingHours: 'Mo-Su 10:30-21:00',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Pondicherry',
                addressCountry: 'IN',
              },
              ...(SAME_AS_URLS.length > 0 ? { sameAs: SAME_AS_URLS } : {}),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: SITE_NAME,
              url: SITE_URL,
            },
          ]}
        />
        <Navbar />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
