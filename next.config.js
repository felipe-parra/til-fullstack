const removeImports = require("next-remove-imports")();

module.exports = removeImports({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Google images https://lh3.googleusercontent.com/a/ACg8ocKYVKKpjRgmg9O1fdLe3qTEybXVFZgEdCUcVazqBkuZC2Y=s96-c

    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  // pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: { esmExternals: true },
};

module.exports = nextConfig;
