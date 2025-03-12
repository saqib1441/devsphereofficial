/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.devsphereofficial.online/",
  generateRobotsTxt: true, // Generates robots.txt file
  sitemapSize: 5000, // Splits sitemap if it exceeds this number
  generateIndexSitemap: true, // Helps with large sites
  priority: 0.7, // Default priority of pages
  changefreq: "weekly", // Frequency of updates

  // Manually adding specific pages
  additionalPaths: async (config) => [
    { loc: "/_not-found", lastmod: new Date().toISOString() },
    { loc: "/about", lastmod: new Date().toISOString() },
    { loc: "/services", lastmod: new Date().toISOString() },
    { loc: "/services/[id]", lastmod: new Date().toISOString() },
    { loc: "/portfolio", lastmod: new Date().toISOString() },
    { loc: "/team", lastmod: new Date().toISOString() },
    { loc: "/contact", lastmod: new Date().toISOString() },
  ],
};
