/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "dist",
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
