/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://vnsholsters.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/server-sitemap.xml', '/admin/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_APP_URL}/server-sitemap.xml`,
    ],
  },
};
