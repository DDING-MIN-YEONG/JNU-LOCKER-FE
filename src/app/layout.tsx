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
      { url: APP_IMAGE, sizes: "32x32", type: "image/png" },
      { url: APP_IMAGE, sizes: "16x16", type: "image/png" },
    ],
    shortcut: APP_IMAGE,
    apple: [{ url: APP_IMAGE, sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: PWA_NAME,
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
