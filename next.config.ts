import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    includePaths: ["styles"],
    additionalData: `@import "src/styles/globals.scss";`,
  },
};

export default nextConfig;
