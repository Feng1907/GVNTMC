"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wrench, Package, Building2, Headphones, Server, Layout, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<string, React.ElementType> = {
  wrench: Wrench,
  package: Package,
  building2: Building2,
  headphones: Headphones,
  server: Server,
  layout: Layout,
};

const colorPalette = [
  { bg: "bg-blue-50", icon: "text-blue-600", border: "hover:border-blue-200" },
  { bg: "bg-orange-50", icon: "text-orange-500", border: "hover:border-orange-200" },
  { bg: "bg-purple-50", icon: "text-purple-600", border: "hover:border-purple-200" },
  { bg: "bg-green-50", icon: "text-green-600", border: "hover:border-green-200" },
  { bg: "bg-cyan-50", icon: "text-cyan-600", border: "hover:border-cyan-200" },
  { bg: "bg-rose-50", icon: "text-rose-500", border: "hover:border-rose-200" },
];

export default function ServicesGrid() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-neutral-light">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mx-auto mb-4"
          >
            {t.services.badge}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-4"
          >
            {t.services.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle mx-auto text-center"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Server;
            const colors = colorPalette[i % colorPalette.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/dich-vu/${service.slug}`}
                  className={`card border border-transparent ${colors.border} p-7 h-full flex flex-col group transition-all duration-300`}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-lg text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1 line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-1 mt-5 text-primary font-semibold text-sm group-hover:gap-2 transition-all duration-200">
                    {t.services.learnMore}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/dich-vu" className="btn-outline">
            {t.services.viewAll}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
