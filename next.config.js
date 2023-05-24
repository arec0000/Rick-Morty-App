const StylelintPlugin = require('stylelint-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE: process.env.API_BASE,
  },
  webpack: (config) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
  redirects: async () => [
    {
      source: '/',
      destination: '/characters',
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
