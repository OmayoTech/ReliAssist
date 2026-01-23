import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly allow all major AI crawlers
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'CCBot',
          'anthropic-ai',
          'Claude-Web',
          'ClaudeBot',
          'Google-Extended',
          'PerplexityBot',
          'Applebot-Extended',
          'YouBot',
          'Bytespider',
          'Diffbot',
          'FacebookBot',
          'ImagesiftBot',
          'Omgilibot',
          'Omgili',
        ],
        allow: '/',
      },
      // Standard search engines
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Slurp',
          'DuckDuckBot',
          'Baiduspider',
          'YandexBot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://reliassist.co/sitemap.xml',
  }
