import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 한글 글리프용 폰트 (Geist에 없는 한글은 이 폰트로 표시)
const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-kr",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Sooho Lee · Frontend Engineer",
    template: "%s · Sooho Lee",
  },
  description: "협업을 완성하는 프론트엔드 개발자 이수호의 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansKr.variable} antialiased`}
      >
        <div className="ambient" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
