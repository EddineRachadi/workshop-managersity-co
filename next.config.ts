import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/workshop-ia",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
