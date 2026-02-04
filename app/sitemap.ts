import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aitanabarredapsicologia.com'

  // Páginas estáticas actuales
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre-mi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/aviso-legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Landing pages SEO local
    {
      url: `${baseUrl}/psicologa-barcelona`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/psicologa-gracia`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ]

  // Páginas de problemas específicos
  const problemas = [
    'ansiedad-barcelona',
    'trauma-barcelona',
    'alta-sensibilidad-barcelona',
    'depresion-barcelona',
    'autoestima-barcelona',
    'relaciones-pareja-barcelona',
    'duelo-barcelona',
    'crecimiento-personal-barcelona',
  ]

  const problemaPages: MetadataRoute.Sitemap = problemas.map((slug) => ({
    url: `${baseUrl}/problemas/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...problemaPages]
}
