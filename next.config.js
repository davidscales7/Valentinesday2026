/** @type {import('next').NextConfig} */
const repo = "Valentinesday2026";

module.exports = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};
