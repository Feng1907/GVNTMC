"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function ServicesIntroSection() {
  return (
    <section className="bg-gradient-to-b from-[#EBF0FB] to-white pt-32 pb-12 md:pt-36 md:pb-16">
      <div className="container-custom">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-5"
          >
            <span className="badge">
              <Cpu className="w-3.5 h-3.5" />
              Dịch vụ GVN
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6"
          >
            Dịch vụ của <span className="text-primary">GVN</span>
          </motion.h1>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="space-y-4"
          >
            <p className="text-xl font-semibold text-text-primary">
              Kính chào Quý khách,
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Chào mừng Quý khách đến với website của{" "}
              <strong className="text-text-primary font-semibold">Công Ty GVN chúng tôi</strong>.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Hiện tại, chúng tôi cung cấp{" "}
              <strong className="text-primary font-semibold">6 danh mục dịch vụ chính</strong>.
              Quý khách vui lòng lựa chọn danh mục phù hợp với nhu cầu để tham khảo thông tin
              chi tiết.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-10 h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent origin-left"
        />
      </div>
    </section>
  );
}
