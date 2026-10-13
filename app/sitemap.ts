import type { MetadataRoute } from 'next';

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.pipelining.com'
).replace(/\/$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  // Add the other indexable pages and dynamically generated articles/contractor
  // pages here. If your project already has a sitemap, merge these entries into it.
  return [
    { url: SITE_URL },
    { url: `${SITE_URL}/blog` },
    { url: `${SITE_URL}/all_contractor` },
    {
      url: `${SITE_URL}/blog/trenchless-construction`,
      lastModified: new Date('2026-10-02T00:00:00.000Z'),
    },
  ];
}

