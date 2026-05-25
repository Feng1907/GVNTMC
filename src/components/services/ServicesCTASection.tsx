"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function ServicesCTASection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary to-blue-600" />

      {/* Tech network pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="svc-cta-grid" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M56 0L0 0 0 56" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="0" cy="0" r="2.5" fill="white" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#svc-cta-grid)" />
        </svg>
      </div>

      {/* Glow blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-indigo-300/20 rounded-full blur-3xl" />

      <div className="relative container-custom">
        {/* Rounded inner card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-7">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
            Bạn cần tư vấn giải pháp CNTT phù hợp?
          </h2>

          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Liên hệ GVN để được tư vấn, khảo sát và nhận báo giá dịch vụ phù hợp với nhu cầu
            doanh nghiệp của bạn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/bao-gia"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-[1rem]"
            >
              Nhận báo giá
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-[1rem]"
            >
              <Phone className="w-5 h-5" />
              Liên hệ tư vấn
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
