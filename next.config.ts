import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Zapatillas',
  assetPrefix: '/Zapatillas',
  images: {
    unoptimized: true, // 🔥 Desactiva la optimización de imágenes
  },
};

export default nextConfig;
