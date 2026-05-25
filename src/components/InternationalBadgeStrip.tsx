"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const icons = ["🇰🇷", "🌐", "🏦", "⏱"];

export default function InternationalBadgeStrip() {
  const { t } = useLanguage();

  const badges = [
    { icon: icons[0], title: t.intlStrip.badge1, sub: t.intlStrip.badge1Sub },
    { icon: icons[1], title: t.intlStrip.badge2, sub: t.intlStrip.badge2Sub },
    { icon: icons[2], title: t.intlStrip.badge3, sub: t.intlStrip.badge3Sub },
    { icon: icons[3], title: t.intlStrip.badge4, sub: t.intlStrip.badge4Sub },
  ];

  return (
    <section className="bg-slate-50 border-y border-neutral-border py-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-3"
            >
              <span className="text-3xl leading-none flex-shrink-0">{badge.icon}</span>
              <div>
                <p className="font-bold text-text-primary text-sm leading-tight">{badge.title}</p>
                <p className="text-xs text-text-secondary mt-0.5 leading-snug">{badge.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
