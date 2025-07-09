import type { Metadata, Viewport } from "next";
import "@/styles/_reset.scss";
import Providers from "@/components/common/Providers/Providers";

const APP_NAME = "전남대학교 사물함 신청 서비스";
const APP_DEFAULT_TITLE = "전남대학교 사물함 신청 서비스";
const APP_DESCRIPTION = "쉽고 간편하게 이용가능한 전남대학교 사물함 신청 서비스입니다.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: APP_NAME,
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
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
        url: "/images/logo.svg",
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
    images: ["/images/logo.svg"],
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
