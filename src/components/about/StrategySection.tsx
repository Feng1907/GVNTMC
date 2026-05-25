"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";

export default function StrategySection() {
  return (
    <section className="section-padding bg-neutral-light">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="badge mb-4 block w-fit">Chiến lược</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-3">
              Chiến lược
            </h2>
            <p className="text-primary font-semibold text-lg mb-6">
              Nhà cung cấp giải pháp trọn gói
            </p>
            <p className="text-text-secondary text-[1.05rem] leading-[1.9]">
              Đối tác kinh doanh CNTT một điểm đến, cung cấp thông tin kịp thời theo nhu cầu khách
              hàng, đồng thời cung cấp và triển khai các giải pháp hạ tầng CNTT toàn diện. Với
              chiến lược phát triển dài hạn, chúng tôi không chỉ đáp ứng nhu cầu hiện tại mà còn
              chuẩn bị nền tảng vững chắc cho tương lai của doanh nghiệp bạn.
            </p>

            {/* Highlight stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: "200+", label: "Dự án hoàn thành" },
                { value: "50+", label: "Đối tác doanh nghiệp" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-5 shadow-card">
                  <p className="text-3xl font-bold text-primary mb-1">{s.value}</p>
                  <p className="text-text-secondary text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[48px] shadow-[0_12px_40px_rgba(27,79,191,0.14)] aspect-[4/5]">
              <Image
                src="https://placehold.co/640x800/0F3A8F/FFFFFF?text=Hạ+tầng+CNTT+toàn+diện"
                alt="Hạ tầng CNTT toàn diện và không gian văn phòng hiện đại"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-5 -left-4 bg-white rounded-2xl shadow-card-hover px-5 py-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <Layers className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-text-primary text-sm leading-tight">Giải pháp</p>
                <p className="text-text-secondary text-xs">toàn diện, một điểm đến</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
