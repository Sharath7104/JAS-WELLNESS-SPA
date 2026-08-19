import type { MetadataRoute } from 'next';
import seoPages from './data/seo-pages.json';
import { SITE_URL } from './config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/spa-in-pondicherry`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ];

  const seoRoutes: MetadataRoute.Sitemap = seoPages.pages
    .filter((page) => page.slug !== 'spa-in-pondicherry')
    .map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

  return [...staticRoutes, ...seoRoutes];
}
