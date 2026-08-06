/** GitHub Pages subpath — must match `basePath` in next.config.ts */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_URL = "https://rushikesh-D69.github.io/portfolioRK";

/** Prefix root-relative public asset paths for production static export. */
export function assetPath(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (!path.startsWith("/")) return `${BASE_PATH}/${path}`;
  return `${BASE_PATH}${path}`;
}
