import type { Metadata, Viewport } from "next";
import "@/styles/_reset.scss";
import Providers from "@/components/common/Providers/Providers";

const APP_NAME = "전남대학교 사물함 신청 서비스";
const PWA_NAME = "전남대 사물함";
const APP_DESCRIPTION = "쉽고 간편하게 이용가능한 전남대학교 사물함 신청 서비스입니다.";
const APP_IMAGE = "/images/home_img.png";

export const metadata: Metadata = {
  applicationName: PWA_NAME,
  title: APP_NAME,
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: APP_IMAGE, sizes: "16x16", type: "image/png" },
      { url: APP_IMAGE, sizes: "32x32", type: "image/png" },
      { url: APP_IMAGE, sizes: "72x72", type: "image/png" },
      { url: APP_IMAGE, sizes: "96x96", type: "image/png" },
      { url: APP_IMAGE, sizes: "144x144", type: "image/png" },
      { url: APP_IMAGE, sizes: "192x192", type: "image/png" },
    ],
    shortcut: APP_IMAGE,
    apple: [
      { url: APP_IMAGE, sizes: "57x57", type: "image/png" },
      { url: APP_IMAGE, sizes: "60x60", type: "image/png" },
      { url: APP_IMAGE, sizes: "72x72", type: "image/png" },
      { url: APP_IMAGE, sizes: "76x76", type: "image/png" },
      { url: APP_IMAGE, sizes: "114x114", type: "image/png" },
      { url: APP_IMAGE, sizes: "120x120", type: "image/png" },
      { url: APP_IMAGE, sizes: "144x144", type: "image/png" },
      { url: APP_IMAGE, sizes: "152x152", type: "image/png" },
      { url: APP_IMAGE, sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: PWA_NAME,
    startupImage: [
      {
        url: APP_IMAGE,
        media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: APP_IMAGE,
        media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: APP_IMAGE,
        media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)",
      },
    ],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [
      {
        url: APP_IMAGE,
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [APP_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
        <div id="spinner-root" />
      </body>
    </html>
  );
}
