const fs = require('fs');

const urls = [
    'https://dvelasquez.art/',
    'https://dvelasquez.art/about',
    'https://dvelasquez.art/works',
    // 'https://dvelasquez.art/contact',
];

function generateSitemap(urls) {
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    urls.forEach(url => {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${url}</loc>\n`;
        sitemap += '  </url>\n';
    });
    sitemap += '</urlset>';
    return sitemap;
}

const sitemap = generateSitemap(urls);

fs.writeFileSync('./public/sitemap.xml', sitemap, 'utf8');

console.log('Sitemap generated successfully!');
