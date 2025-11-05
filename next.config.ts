import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
      // Enable faster compile times across restarts
      turbopackFileSystemCacheForDev: true,
  },
    // Helps avoid memoization issues
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
