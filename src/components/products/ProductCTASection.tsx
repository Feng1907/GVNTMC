"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function ProductCTASection() {
  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary to-blue-600" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="prod-cta-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#prod-cta-dots)" />
        </svg>
      </div>

      <div className="absolute -top-16 -right-16 w-60 h-60 bg-blue-400/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-indigo-300/15 rounded-full blur-3xl" />

      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            Không tìm thấy sản phẩm bạn cần?
          </h2>
          <p className="text-white/75 text-[1.05rem] leading-relaxed mb-8 max-w-xl mx-auto">
            Liên hệ GVN để được tư vấn cấu hình, thiết bị và giải pháp phù hợp với nhu cầu doanh
            nghiệp của bạn.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/bao-gia"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Nhận báo giá
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Liên hệ tư vấn
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
