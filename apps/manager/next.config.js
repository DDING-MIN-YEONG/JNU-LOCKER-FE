/** @type {import('next').NextConfig} */
const nextConfig = {
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
    additionalData: `@import "src/styles/globals.scss";`,
  },
};

export default nextConfig;
