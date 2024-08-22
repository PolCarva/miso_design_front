/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "miso-design.up.railway.app",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
