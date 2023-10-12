/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: "dist",
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
