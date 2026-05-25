"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-neutral-light relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-primary rounded-3xl overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/10 rounded-full -translate-x-1/4 translate-y-1/4" />
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* SVG Illustration */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:flex items-center justify-center opacity-35">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-64 h-64">
              <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="2" strokeDasharray="8 6" />
              <circle cx="100" cy="100" r="55" stroke="white" strokeWidth="2" />
              <circle cx="100" cy="100" r="30" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="2" />
              <path d="M100 50 L115 85 L155 85 L122 107 L135 142 L100 120 L65 142 L78 107 L45 85 L85 85 Z" fill="white" fillOpacity="0.15" />
            </svg>
          </div>

          <div className="relative z-10 py-16 px-8 md:px-16 lg:pr-1/3">
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-5"
              >
                {t.cta.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/75 text-lg leading-relaxed mb-8"
              >
                {t.cta.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/bao-gia" className="btn-accent btn-shine text-base px-8 py-4 hover:scale-105">
                  {t.cta.button}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+842812345678"
                  className="inline-flex items-center gap-2 text-white border-2 border-white/30 hover:border-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                  {t.cta.contact}
                </a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-white/15"
              >
                {[t.cta.trust1, t.cta.trust2, t.cta.trust3].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1 text-white/80 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
