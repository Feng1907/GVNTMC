import type { Metadata } from "next";
import NewsPageClient from "./NewsPageClient";

export const metadata: Metadata = {
  title: "Tin tức GVN - Giải pháp CNTT, bảo trì hệ thống và thi công hạ tầng",
  description:
    "Cập nhật tin tức, kiến thức và giải pháp từ GVN về bảo trì hệ thống CNTT, IT outsourcing, an ninh vật lý, thi công hạ tầng mạng, camera và thiết bị công nghệ.",
  openGraph: {
    title: "Tin tức GVN - Giải pháp CNTT, bảo trì hệ thống và thi công hạ tầng",
    description:
      "Cập nhật tin tức và kiến thức mới nhất về bảo trì CNTT, IT outsourcing, an ninh vật lý và thi công hạ tầng.",
    type: "website",
  },
};

export default function NewsPage() {
  return <NewsPageClient />;
}
