import "@/styles/_reset.scss";
import Providers from "@repo/settings/components/Providers";
import type { Metadata } from "next";

const APP_NAME = "전남대학교 사물함 신청 서비스";
const PWA_NAME = "전남대 사물함";
const APP_DESCRIPTION = "쉽고 간편하게 이용가능한 전남대학교 사물함 신청 서비스입니다.";
const APP_OG_IMAGE = "/images/og_logo.png";
const APP_URL = "https://jnu-locker.site";
const APP_OG_IMAGE_FULL_URL = `${APP_URL}${APP_OG_IMAGE}`;

export const metadata: Metadata = {
  applicationName: PWA_NAME,
  title: APP_NAME,
  description: APP_DESCRIPTION,
  keywords: ["전남대학교", "사물함", "신청", "서비스", "전남대", "locker", "대학교"],
  authors: [{ name: "심민보" }],
  creator: "심민보",
  publisher: "심민보",
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
