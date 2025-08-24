import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? "/202508-ai-designing-test" : "",
  assetPrefix: isGitHubPages ? "/202508-ai-designing-test" : "",
};

export default nextConfig;
