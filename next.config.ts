import type { NextConfig } from "next";

export const isGitHubPages = process.env.GITHUB_PAGES === "true";
export const PR_NUMBER = process.env.PR_NUMBER;
export const BASE_PATH = PR_NUMBER 
  ? `/202508-ai-designing-test/pr-${PR_NUMBER}` 
  : "/202508-ai-designing-test";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? BASE_PATH : "",
  assetPrefix: isGitHubPages ? BASE_PATH : "",
};

export default nextConfig;
