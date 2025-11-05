import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
      // Enable faster compile times across restarts
      turbopackFileSystemCacheForDev: true,
  },
    // Helps avoid memoization issues
  reactCompiler: true,
};

export default nextConfig;
