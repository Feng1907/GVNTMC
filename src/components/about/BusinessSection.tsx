"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Handshake, Building2, Factory, Landmark } from "lucide-react";

const sectors = [
  { icon: Landmark, label: "Tài chính & Ngân hàng" },
  { icon: Factory, label: "Sản xuất & Nhà máy" },
  { icon: Building2, label: "Doanh nghiệp & Văn phòng" },
];

export default function BusinessSection() {
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
            <span className="badge mb-4 block w-fit">Kinh doanh</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-3">
              Kinh doanh
            </h2>
            <p className="text-primary font-semibold text-lg mb-6">
              Đối tác kinh doanh đáng tin cậy của khách hàng
            </p>
            <p className="text-text-secondary text-[1.05rem] leading-[1.9] mb-8">
              GVNTMC hướng đến mô hình kinh doanh lấy khách hàng làm trung tâm, xây dựng niềm tin
              trong nhiều lĩnh vực như công, tài chính, sản xuất và viễn thông. Chúng tôi hiểu rằng
              mỗi doanh nghiệp có những nhu cầu và thách thức riêng — vì vậy giải pháp của chúng
              tôi luôn được thiết kế riêng biệt, phù hợp với từng khách hàng.
            </p>

            {/* Sector cards */}
            <div className="space-y-3">
              {sectors.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-card"
                  >
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-text-primary">{s.label}</span>
                  </div>
                );
              })}
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
                src="https://placehold.co/640x800/1E3A8A/FFFFFF?text=Đối+tác+doanh+nghiệp"
                alt="Hợp tác kinh doanh và đối tác doanh nghiệp GVNTMC"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-5 -left-4 bg-white rounded-2xl shadow-card-hover px-5 py-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                <Handshake className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-bold text-text-primary text-sm leading-tight">Tín &amp; Trách nhiệm</p>
                <p className="text-text-secondary text-xs">giá trị cốt lõi của GVN</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
