/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
      // Enable verbose logging
      config.infrastructureLogging = { debug: /PackFileCache/ };
  
      return config;
    },
  };
  
  export default nextConfig;
  