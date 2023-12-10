const removeImports = require("next-remove-imports")();

module.exports = removeImports({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  experimental: { esmExternals: true },
};

module.exports = nextConfig;
