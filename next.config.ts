import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV !== 'production';
const githubRepository = process.env.GITHUB_REPOSITORY;
const basePath = isDevelopment || !githubRepository 
  ? "" 
  : `/${githubRepository.split('/')[1]}`;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
