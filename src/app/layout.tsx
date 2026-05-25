import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import HtmlLangSync from "@/components/HtmlLangSync";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GVN – Giải pháp CNTT toàn diện cho doanh nghiệp",
    template: "%s | GVN CNTT",
  },
  description:
    "GVN (GVNTMC) cung cấp giải pháp công nghệ thông tin toàn diện: bảo trì hệ thống, cung cấp thiết bị CNTT chính hãng, thi công hạ tầng mạng, camera an ninh, server, storage cho doanh nghiệp tại Việt Nam.",
  keywords: [
    "giải pháp CNTT",
    "công ty IT Việt Nam",
    "bảo trì hệ thống CNTT",
    "camera giám sát",
    "máy chủ server",
    "lưu trữ NAS",
    "Synology",
    "Hikvision",
    "Cisco",
    "IT outsourcing",
    "GVN",
    "GVNTMC",
  ],
  authors: [{ name: "GVN CNTT" }],
  creator: "GVN CNTT",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://gvntmc.com",
    siteName: "GVN CNTT",
    title: "GVN – Giải pháp CNTT toàn diện cho doanh nghiệp",
    description:
      "GVN cung cấp giải pháp CNTT toàn diện: bảo trì, thiết bị, thi công hạ tầng, camera, server cho doanh nghiệp.",
    images: [
      {
        url: "https://placehold.co/1200x630/1B4FBF/ffffff?text=GVN+CNTT",
        width: 1200,
        height: 630,
        alt: "GVN CNTT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GVN – Giải pháp CNTT toàn diện",
    description: "GVN cung cấp giải pháp CNTT toàn diện cho doanh nghiệp Việt Nam.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="bg-white">
        <LanguageProvider>
          <HtmlLangSync />
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
        </LanguageProvider>
      </body>
    </html>
  );
}
