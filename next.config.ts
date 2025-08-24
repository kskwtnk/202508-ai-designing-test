import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/202508-ai-designing-test" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/202508-ai-designing-test" : "",
};

export default nextConfig;
