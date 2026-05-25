import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Liên hệ GVN - Tư vấn giải pháp CNTT, hạ tầng mạng và bảo trì hệ thống",
  description:
    "Liên hệ GVN để được tư vấn giải pháp CNTT, thi công hạ tầng mạng, camera, điện nhẹ, thiết bị công nghệ và dịch vụ bảo trì hệ thống cho doanh nghiệp.",
  openGraph: {
    title: "Liên hệ GVN - Tư vấn giải pháp CNTT",
    description:
      "Liên hệ GVN để được tư vấn giải pháp CNTT, thi công hạ tầng mạng và bảo trì hệ thống cho doanh nghiệp.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
