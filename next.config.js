/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  env: {
    SITE_PROTOCOL: process.env.SITE_PROTOCOL ?? "https",
    SITE_HOSTNAME: process.env.SITE_HOSTNAME ?? "",
  },
};

module.exports = nextConfig;
