/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.colorblindwire.store',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  // exclude: ['/sitemap.xml'], // ❗penting agar tidak masuk ke sitemap-0.xml
  autoLastmod: true,
};
