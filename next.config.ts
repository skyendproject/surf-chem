import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "blob.v0.dev",
      "firebasestorage.googleapis.com",
      "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/surfactant-chemicals-admin-c4s3ys/assets",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
