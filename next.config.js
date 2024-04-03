module.exports = {
  devIndicators: {
      buildActivity: false
    },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'en',
  },
  images: {
    domains: [ 'cdn.sanity.io', 'res.cloudinary.com']
  },
  reactStrictMode: false,
  compiler: { styledComponents: {"ssr": true} },
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
