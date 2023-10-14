/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: "dist",
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
