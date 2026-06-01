import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/portfolioRK" : "",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/portfolioRK" : "",
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
