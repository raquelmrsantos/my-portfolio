import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Explicitly configure compiler options
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;

