import { MetadataRoute } from 'next';
import { articles } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://valueadvagency.com';

  const staticPages = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/process',
    '/contact',
    '/blog',
    '/services/banner-project-walls',
    '/services/frosted-sticker',
    '/services/car-sticker',
    '/services/flags-banners',
    '/services/popup-rollup-stand',
    '/services/acrylic-signs',
    '/services/canvas-signs',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogPages = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date).toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
