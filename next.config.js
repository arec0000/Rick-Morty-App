/** @type {import('next').NextConfig} */

const StylelintPlugin = require('stylelint-webpack-plugin');

const nextConfig = {
  env: {},
  webpack: (config) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
};

module.exports = nextConfig;
