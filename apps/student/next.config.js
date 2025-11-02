import withPWAInit from "@ducanh2912/next-pwa";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withPWA = withPWAInit({
  dest: "public",
});

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

// PWA와 Bundle Analyzer를 함께 적용
export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(withPWA(nextConfig));
