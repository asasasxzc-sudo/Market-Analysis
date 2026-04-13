/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 这会让 Cloudflare Pages 部署更顺畅
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
