/**
 * Get the correct asset path for images and other static assets.
 * Automatically handles GitHub Pages basePath in production.
 */
export function getAssetPath(path: string): string {
  if (process.env.NODE_ENV !== "production") {
    return path;
  }

  const githubRepository = process.env.GITHUB_REPOSITORY;
  if (!githubRepository) {
    return path;
  }

  const repoName = githubRepository.split("/")[1];
  return `/${repoName}${path}`;
}
