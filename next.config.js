module.exports = {
  devIndicators: {
      buildActivity: false
    },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'en',
  },
  images: {
    domains: [
      'localhost',
      'cdn.sanity.io',
    ]
  },
  reactStrictMode: false,
  webpack: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  async redirects() {
    return [];
  },
}
