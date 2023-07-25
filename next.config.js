/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
    path: "/", // ARREGLA LA IMPORTACION DE IMAGENES DE LA CARPETA PUBLIC
  },
};

module.exports = nextConfig;
