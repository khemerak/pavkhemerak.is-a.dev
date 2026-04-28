import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const backendUrl = process.env.BACKEND_URL || "http://localhost:3001";
    return [
      { source: "/api/blog/posts/:slug/view", destination: `${backendUrl}/api/blog/posts/:slug/view` },
      { source: "/api/blog/:path*", destination: `${backendUrl}/api/blog/:path*` },
      { source: "/api/github/:path*", destination: `${backendUrl}/api/github/:path*` },
      { source: "/api/tools/:path*", destination: `${backendUrl}/api/tools/:path*` },
      { source: "/api/health", destination: `${backendUrl}/api/health` },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "docs.google.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.ghost.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
