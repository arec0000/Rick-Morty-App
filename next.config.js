/** @type {import('next').NextConfig} */

const StylelintPlugin = require('stylelint-webpack-plugin');

const nextConfig = {
  env: {
    API_BASE: process.env.API_BASE,
  },
  webpack: (config) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
};

module.exports = nextConfig;
