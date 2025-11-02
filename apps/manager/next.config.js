import withBundleAnalyzer from "@next/bundle-analyzer";

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

// bundle analyzer 설정 - ANALYZE=true일 때만 활성화
export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
