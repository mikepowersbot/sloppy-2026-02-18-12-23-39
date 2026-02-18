import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;