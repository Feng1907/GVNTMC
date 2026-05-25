"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, List } from "lucide-react";
import { ServiceItem } from "@/data/services";
import ServiceProcessSection from "./ServiceProcessSection";

interface Props {
  service: ServiceItem;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function ServiceDetailContent({ service }: Props) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* ─── Main content ─── */}
          <div className="lg:col-span-2 space-y-14">
            {/* Giới thiệu dịch vụ */}
            <motion.div {...fadeUp(0)}>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Giới thiệu dịch vụ</h2>
              <div className="w-10 h-1 bg-primary rounded-full mb-5" />
              <p className="text-text-secondary text-[1.05rem] leading-[1.9]">
                {service.description}
              </p>
            </motion.div>

            {/* Hạng mục triển khai */}
            <motion.div {...fadeUp(0.05)}>
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <List className="w-6 h-6 text-primary" />
                Hạng mục triển khai
              </h2>
              <div className="w-10 h-1 bg-primary rounded-full mb-6" />
              <div className="space-y-3">
                {service.items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.45 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-neutral-light border border-neutral-border hover:border-primary/20 hover:bg-primary-50/30 transition-colors duration-200"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-primary font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quy trình */}
            <ServiceProcessSection process={service.process} />

            {/* Lợi ích */}
            <motion.div {...fadeUp(0.1)}>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Lợi ích cho doanh nghiệp</h2>
              <div className="w-10 h-1 bg-primary rounded-full mb-6" />
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((b, i) => (
                  <motion.div
                    key={b}
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 bg-neutral-light rounded-xl p-4 border border-neutral-border"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-text-primary text-sm font-medium leading-relaxed">{b}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ─── Sidebar ─── */}
          <div className="space-y-6">
            {/* Sticky CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gradient-primary rounded-2xl p-6 text-white sticky top-24"
            >
              <h3 className="font-bold text-lg mb-3">Cần tư vấn dịch vụ này?</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết phù hợp với quy mô
                doanh nghiệp của bạn.
              </p>

              <Link href="/bao-gia" className="btn-accent w-full justify-center mb-3 text-sm">
                Nhận báo giá ngay
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/lien-he"
                className="block text-center text-white/70 hover:text-white text-sm transition-colors"
              >
                Liên hệ ngay →
              </Link>

              <div className="mt-6 pt-6 border-t border-white/15 space-y-2.5">
                {["Tư vấn miễn phí", "Phản hồi trong 2 giờ", "Hỗ trợ 24/7"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Other services */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="card p-6"
            >
              <h3 className="font-bold text-text-primary mb-3">Xem tất cả dịch vụ</h3>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                GVN cung cấp 6 danh mục dịch vụ CNTT toàn diện cho doanh nghiệp.
              </p>
              <Link
                href="/dich-vu"
                className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                Xem tất cả dịch vụ
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
