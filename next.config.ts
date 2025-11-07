import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable SWC minification
  swcMinify: true,

  // Explicitly configure compiler options
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Font loader configuration
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/fonts/[name][ext]',
      },
    });
    return config;
  },
};

export default nextConfig;

