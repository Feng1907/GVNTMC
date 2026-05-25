"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { partners } from "@/data/partners";
import { useLanguage } from "@/context/LanguageContext";

export default function PartnersGrid() {
  const { t } = useLanguage();

  const bankPartners = partners.filter((p) => p.category === "bank");
  const industryPartners = partners.filter((p) => p.category === "industry");

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mx-auto mb-4"
          >
            {t.partners.badge}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-3"
          >
            {t.partners.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="section-subtitle mx-auto text-center mb-2"
          >
            {t.partners.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-primary font-semibold"
          >
            {t.partners.subtitleIntl}
          </motion.p>

          {/* Category pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-5"
          >
            <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
              {t.partners.categoryBank} ({bankPartners.length})
            </span>
            <span className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-100 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-full">
              {t.partners.categoryIndustry} ({industryPartners.length})
            </span>
          </motion.div>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group"
              title={partner.name}
            >
              <div className="bg-neutral-light border border-neutral-border rounded-2xl p-5 flex items-center justify-center h-20 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 cursor-pointer relative overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
                {/* Tooltip on hover */}
                <span className="absolute bottom-0 inset-x-0 bg-primary text-white text-[10px] font-semibold text-center py-1 translate-y-full group-hover:translate-y-0 transition-transform duration-200 rounded-b-2xl">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-text-secondary mt-8 font-medium"
        >
          {t.partners.statText}
        </motion.p>
      </div>
    </section>
  );
}
