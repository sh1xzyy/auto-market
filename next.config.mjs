/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.classistatic.de", "placehold.co", "static.classistatic.de"],
  },
  watchOptions: {
    ignored: ['**/node_modules/**', '**/.next/**'],
  },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
