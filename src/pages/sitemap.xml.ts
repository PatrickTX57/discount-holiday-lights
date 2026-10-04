// XML sitemap at /sitemap.xml (referenced by public/robots.txt).
// Lists every indexable page. The /lp/ ad landing pages are deliberately left
// out — they're noindex and meant to be reached only from ads.
import type { APIRoute } from 'astro';
import { cities } from '../data/cities';

const staticPaths = ['/', '/services/', '/greenery/', '/gallery/', '/service-area/', '/contact/', '/privacy/'];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://discountholidaylights.com');
  const paths = [...staticPaths, ...cities.map((c) => `/service-area/${c.slug}/`)];
  const urls = paths
    .map((p) => `  <url><loc>${new URL(p, base).href}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
