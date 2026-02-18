import type { NextConfig } from "next";
import { resolve } from "path";

const nextConfig: NextConfig = {
  reactCompiler: false,
  turbopack: {
    root: resolve(process.cwd()),
  },
};

export default nextConfig;