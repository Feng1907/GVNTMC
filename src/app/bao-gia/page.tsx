import type { Metadata } from "next";
import QuotePageClient from "./QuotePageClient";

export const metadata: Metadata = {
  title: "Yêu cầu báo giá – GVN CNTT | Tư vấn giải pháp CNTT",
  description:
    "Gửi yêu cầu báo giá thiết bị CNTT và dịch vụ từ GVN. Nhận báo giá miễn phí trong 2 giờ làm việc.",
  openGraph: {
    title: "Yêu cầu báo giá – GVN CNTT",
    description: "Nhận báo giá miễn phí trong 2 giờ làm việc.",
    type: "website",
  },
};

export default function QuotePage() {
  return <QuotePageClient />;
}
