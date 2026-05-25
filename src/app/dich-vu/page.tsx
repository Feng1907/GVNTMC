import type { Metadata } from "next";
import ServicesIntroSection from "@/components/services/ServicesIntroSection";
import ServicesGrid from "@/components/services/ServicesGrid";
import WhyChooseGVNSection from "@/components/services/WhyChooseGVNSection";
import ServicesCTASection from "@/components/services/ServicesCTASection";

export const metadata: Metadata = {
  title: "Dịch vụ GVN - Giải pháp CNTT, hạ tầng mạng, camera và bảo trì hệ thống",
  description:
    "GVN cung cấp dịch vụ bảo trì hệ thống CNTT, linh kiện công nghệ, thiết bị ngân hàng, IT outsourcing, phần mềm doanh nghiệp và thi công hạ tầng CNTT.",
  openGraph: {
    title: "Dịch vụ GVN - Giải pháp CNTT toàn diện",
    description:
      "GVN cung cấp 6 danh mục dịch vụ CNTT chuyên nghiệp: bảo trì hệ thống, linh kiện, thiết bị ngân hàng, IT outsourcing, phần mềm và thi công hạ tầng.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesIntroSection />
      <ServicesGrid />
      <WhyChooseGVNSection />
      <ServicesCTASection />
    </>
  );
}
