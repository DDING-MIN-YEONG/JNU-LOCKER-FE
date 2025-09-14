import type { Metadata, Viewport } from "next";
import "@/styles/_reset.scss";
import Providers from "@repo/app/Provider";

const APP_NAME = "전남대학교 사물함 신청 서비스";
const PWA_NAME = "전남대 사물함";
const APP_DESCRIPTION = "쉽고 간편하게 이용가능한 전남대학교 사물함 신청 서비스입니다.";
const APP_IMAGE = "/images/logo.png";
const APP_OG_IMAGE = "/images/og_logo.png";
const APP_URL = "https://jnu-locker.site";
const APP_IMAGE_FULL_URL = `${APP_URL}${APP_IMAGE}`;
const APP_OG_IMAGE_FULL_URL = `${APP_URL}${APP_OG_IMAGE}`;

export const metadata: Metadata = {
  applicationName: PWA_NAME,
  title: APP_NAME,
  description: APP_DESCRIPTION,
  keywords: ["전남대학교", "사물함", "신청", "서비스", "전남대", "locker", "대학교"],
  authors: [{ name: "심민보" }],
  creator: "심민보",
  publisher: "심민보",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: APP_IMAGE_FULL_URL, sizes: "16x16 32x32 72x72 96x96 144x144 192x192", type: "image/png" }],
    shortcut: APP_OG_IMAGE_FULL_URL,
    apple: [
      {
        url: APP_IMAGE_FULL_URL,
        sizes: "57x57 60x60 72x72 76x76 114x114 120x120 144x144 152x152 180x180",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: PWA_NAME,
    startupImage: [{ url: APP_OG_IMAGE }],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: APP_URL,
    locale: "ko_KR",
    images: [
      {
        url: APP_OG_IMAGE_FULL_URL,
        width: 1200,
        height: 630,
        alt: APP_NAME,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [APP_OG_IMAGE_FULL_URL],
    creator: "@jnu_locker",
    site: "@jnu_locker",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: APP_NAME,
    alternateName: PWA_NAME,
    description: APP_DESCRIPTION,
    url: APP_URL,
    image: APP_OG_IMAGE_FULL_URL,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
    provider: {
      "@type": "EducationalOrganization",
      name: "전남대학교",
      url: "https://www.jnu.ac.kr",
    },
  };

  return (
    <html lang="ko">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Providers>{children}</Providers>
        <div id="spinner-root" />
      </body>
    </html>
  );
}
