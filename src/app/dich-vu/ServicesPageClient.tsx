"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wrench, Package, Building2, Headphones, Server, Layout, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import CTASection from "@/components/CTASection";

const iconMap: Record<string, React.ElementType> = {
  wrench: Wrench,
  package: Package,
  building2: Building2,
  headphones: Headphones,
  server: Server,
  layout: Layout,
};

const colorPalette = [
  { bg: "bg-blue-50", icon: "text-blue-600", accent: "border-blue-200" },
  { bg: "bg-orange-50", icon: "text-orange-500", accent: "border-orange-200" },
  { bg: "bg-purple-50", icon: "text-purple-600", accent: "border-purple-200" },
  { bg: "bg-green-50", icon: "text-green-600", accent: "border-green-200" },
  { bg: "bg-cyan-50", icon: "text-cyan-600", accent: "border-cyan-200" },
  { bg: "bg-rose-50", icon: "text-rose-500", accent: "border-rose-200" },
];

export default function ServicesPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="badge bg-white/10 border border-white/20 text-white mb-6">Dịch vụ</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Giải pháp CNTT<br />
              <span className="text-accent">toàn diện</span>
            </h1>
            <p className="text-white/75 text-xl leading-relaxed">
              Từ tư vấn, thiết kế, triển khai đến vận hành và bảo trì – GVN cung cấp đầy đủ dịch vụ CNTT cho doanh nghiệp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Server;
              const colors = colorPalette[i % colorPalette.length];

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="card border border-transparent hover:border-primary/10 p-8 h-full flex flex-col group">
                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>

                    <h2 className="font-bold text-xl text-text-primary mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-6 flex-1">{service.shortDesc}</p>

                    {/* Benefits preview */}
                    <ul className="space-y-2 mb-6">
                      {service.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${colors.icon} bg-current`} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/dich-vu/${service.slug}`}
                      className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                    >
                      Xem chi tiết dịch vụ
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
