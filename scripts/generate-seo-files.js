import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

// Get the current directory path
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Function to detect the base URL
function detectBaseUrl() {
  // Get the URL from the environment where the build is running
  // This will work for most CI/CD platforms and hosting services
  const envUrl = process.env.URL || process.env.DEPLOY_URL || process.env.DEPLOY_PRIME_URL;
  
  if (envUrl) {
    return envUrl;
  }

  // For local development
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:5173';
  }

  // Fallback to a default if no URL is detected
  console.warn('No hosting URL detected, using default URL');
  return 'https://akhilkathi.com';
}

const BASE_URL = detectBaseUrl();

// Generate robots.txt
const robotsTxt = `# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${BASE_URL}/sitemap.xml

# Disallow admin and private routes
Disallow: /admin/
Disallow: /private/
`;

// Generate sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/experience</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/education</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/certifications</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/blogs</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${BASE_URL}/interests</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

// Ensure the public directory exists
const publicDir = join(process.cwd(), 'public');
try {
  mkdirSync(publicDir, { recursive: true });
} catch (err) {
  if (err.code !== 'EEXIST') throw err;
}

// Write the files
writeFileSync(join(publicDir, 'robots.txt'), robotsTxt);
writeFileSync(join(publicDir, 'sitemap.xml'), sitemapXml);

console.log(`SEO files generated successfully for ${BASE_URL}!`); 