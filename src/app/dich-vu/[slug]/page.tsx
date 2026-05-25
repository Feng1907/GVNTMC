import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";
import ServicesCTASection from "@/components/services/ServicesCTASection";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} – GVN`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} – GVN`,
      description: service.shortDesc,
      type: "website",
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceDetailContent service={service} />
      <ServicesCTASection />
    </>
  );
}
