"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export default function AboutSloganSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-8"
          >
            Nhà cung cấp tổng thể{" "}
            <span className="text-primary">hạ tầng &amp; dịch vụ CNTT</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/bao-gia" className="btn-primary text-base px-8 py-3.5">
              Nhận báo giá
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/du-an" className="btn-outline text-base px-8 py-3.5">
              <FileText className="w-4 h-4" />
              Dự án tiêu biểu
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
