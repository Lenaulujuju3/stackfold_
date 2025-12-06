import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const marketing = ['', 'about', 'solutions', 'data', 'pricing', 'resources', 'contact', 'privacy-policy', 'terms-of-service']
  const marketingUrls = marketing.map((slug) => ({
    url: `https://stackfold.com${slug ? '/' + slug : ''}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: slug ? 0.8 : 1,
  }))
  return [...marketingUrls]
}
