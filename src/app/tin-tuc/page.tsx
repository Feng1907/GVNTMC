import type { Metadata } from "next";
import NewsPageClient from "./NewsPageClient";

export const metadata: Metadata = {
  title: "Tin tức CNTT – GVN | Xu hướng công nghệ, Dự án, Hướng dẫn",
  description:
    "Cập nhật tin tức mới nhất về công nghệ thông tin, các dự án GVN đã triển khai, hướng dẫn lựa chọn thiết bị CNTT cho doanh nghiệp.",
  openGraph: {
    title: "Tin tức CNTT – GVN",
    description: "Cập nhật tin tức và xu hướng công nghệ thông tin mới nhất.",
    type: "website",
  },
};

export default function NewsPage() {
  return <NewsPageClient />;
}
