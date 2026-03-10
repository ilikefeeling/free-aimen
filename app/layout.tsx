import type { Metadata, Viewport } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { ClientWrapper } from "./client-wrapper";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
});

export const viewport: Viewport = {
  themeColor: "#FEE500",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "aimen (에이아이멘) - AI 기반 설교 콘텐츠 자동화",
  description: "주일의 은혜를 평일의 일상으로. Gemini AI로 설교 하이라이트를 자동 추출하고 숏폼 영상으로 편집하세요.",
  keywords: ["설교", "하이라이트", "AI", "영상편집", "교회", "콘텐츠", "숏폼"],
  manifest: "/manifest.json",
  other: {
    "google-adsense-account": "ca-pub-5225442926231030",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5225442926231030"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} ${cinzel.variable} antialiased`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}


