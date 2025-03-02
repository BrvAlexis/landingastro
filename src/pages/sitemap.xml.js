import { SITEMAP_CONFIG } from '../consts';

export async function GET(context) {
    const { baseUrl, pages } = SITEMAP_CONFIG;

    // Formatage de la date actuelle pour lastmod
    const currentDate = new Date().toISOString().split('T')[0];

    // Création du contenu XML
    return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
</urlset>`,
        {
            headers: {
                'Content-Type': 'application/xml'
            }
        }
    );
} 