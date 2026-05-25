import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import ProductCarousel from "@/components/ProductCarousel";
import AboutPreview from "@/components/AboutPreview";
import FeaturedProjects from "@/components/FeaturedProjects";
import TestimonialSlider from "@/components/TestimonialSlider";
import PartnersGrid from "@/components/PartnersGrid";
import InternationalBadgeStrip from "@/components/InternationalBadgeStrip";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "GVN – Giải pháp CNTT toàn diện cho doanh nghiệp | Trang chủ",
  description:
    "GVN (GVNTMC) – Đối tác CNTT tin cậy. Cung cấp giải pháp toàn diện: bảo trì hệ thống, thiết bị chính hãng, thi công hạ tầng, camera, server cho doanh nghiệp Việt Nam.",
  openGraph: {
    title: "GVN – Giải pháp CNTT toàn diện cho doanh nghiệp",
    description: "Đối tác CNTT tin cậy – Giải pháp công nghệ cho doanh nghiệp.",
    url: "https://gvntmc.com",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesGrid />
      <ProductCarousel />
      <FeaturedProjects />
      <TestimonialSlider />
      <PartnersGrid />
      <InternationalBadgeStrip />
      <CTASection />
    </>
  );
}
