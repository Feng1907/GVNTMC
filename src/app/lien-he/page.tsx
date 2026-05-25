import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Liên hệ – GVN CNTT | Tư vấn giải pháp CNTT cho doanh nghiệp",
  description:
    "Liên hệ GVN để được tư vấn miễn phí về giải pháp CNTT, nhận báo giá thiết bị và dịch vụ. Đội ngũ hỗ trợ 24/7.",
  openGraph: {
    title: "Liên hệ – GVN CNTT",
    description: "Liên hệ để được tư vấn miễn phí. Hỗ trợ 24/7.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
