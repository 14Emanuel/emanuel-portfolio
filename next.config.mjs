const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.replace(/.*?\//, '') : '';
const basePath = isGithubActions && repo ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
