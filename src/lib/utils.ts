import { isGitHubPages, BASE_PATH } from "../../next.config";

/**
 * Get the correct path for assets considering basePath
 * When GITHUB_PAGES=true, prepends the repository base path
 */
export function assetPath(path: string): string {
  const basePath = isGitHubPages ? BASE_PATH : "";
  return `${basePath}${path}`;
}
