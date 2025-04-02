import type { Metadata } from "next";
import "@/styles/_reset.scss";
import Providers from "@/components/common/Providers/Providers";

export const metadata: Metadata = {
  title: "전남대학교 사물함 신청 서비스",
  description: "쉽고 간편하게 이용가능한 전남대학교 사물함 신청 서비스입니다.",
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
      </body>
    </html>
  );
}
