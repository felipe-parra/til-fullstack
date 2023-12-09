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
};

module.exports = nextConfig;
