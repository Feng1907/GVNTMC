import type { Metadata } from "next";
import AboutIntroSection from "@/components/about/AboutIntroSection";
import AboutSloganSection from "@/components/about/AboutSloganSection";
import AboutGallery from "@/components/about/AboutGallery";
import AboutOverviewSection from "@/components/about/AboutOverviewSection";
import MottoSection from "@/components/about/MottoSection";
import StrategySection from "@/components/about/StrategySection";
import CustomerFocusSection from "@/components/about/CustomerFocusSection";
import BusinessSection from "@/components/about/BusinessSection";
import AboutCTASection from "@/components/about/AboutCTASection";
import PartnersGrid from "@/components/PartnersGrid";

export const metadata: Metadata = {
  title: "Giới thiệu GVN - Công ty giải pháp hạ tầng & dịch vụ CNTT",
  description:
    "GVN/GVNTMC là công ty chuyên cung cấp giải pháp CNTT, thi công hạ tầng mạng, camera, điện nhẹ, thiết bị công nghệ và dịch vụ bảo trì hệ thống cho doanh nghiệp tại Việt Nam.",
  openGraph: {
    title: "Giới thiệu GVN - Công ty giải pháp hạ tầng & dịch vụ CNTT",
    description:
      "GVN/GVNTMC là công ty chuyên cung cấp giải pháp CNTT, thi công hạ tầng mạng, camera, điện nhẹ và dịch vụ bảo trì hệ thống cho doanh nghiệp tại Việt Nam.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutIntroSection />
      <AboutSloganSection />
      <AboutGallery />
      <AboutOverviewSection />
      <MottoSection />
      <StrategySection />
      <CustomerFocusSection />
      <BusinessSection />
      <PartnersGrid />
      <AboutCTASection />
    </>
  );
}
