
/** @type {import('next').NextConfig} */
const path = require("path");
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "**.github.com" },
      { protocol: "https", hostname: "**.amazonaws.com" },
    ],
  },
};

// Sentry Webpack plugin options
const SentryWebpackPluginOptions = {
  silent: true, // hides Sentry logs during build
  // do NOT include org/project/authToken if you don't want to upload releases
};

// Export the config wrapped with Sentry
module.exports = withSentryConfig(nextConfig, SentryWebpackPluginOptions);