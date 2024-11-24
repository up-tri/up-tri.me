const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles/common")],
  },
  env: {
    SITE_PROTOCOL: process.env.SITE_PROTOCOL ?? "https",
    SITE_HOSTNAME: process.env.SITE_HOSTNAME ?? "",
  },
  webpack: (config) => {
    // SVGに対応
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
