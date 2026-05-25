"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

export default function MottoSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — image with capsule/oval crop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[48px] shadow-[0_12px_40px_rgba(27,79,191,0.14)] aspect-[4/5]">
              <Image
                src="https://placehold.co/640x800/1B4FBF/FFFFFF?text=Thi+công+thực+tế"
                alt="Đội kỹ thuật GVN thi công hệ thống mạng thực tế"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Blue overlay gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-5 -right-4 bg-white rounded-2xl shadow-card-hover px-5 py-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-text-primary text-sm leading-tight">10+ năm</p>
                <p className="text-text-secondary text-xs">kinh nghiệm thực chiến</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="badge mb-4 block w-fit">Phương châm</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-3">
              Phương châm
            </h2>
            <p className="text-primary font-semibold text-lg mb-6">
              Nhà cung cấp giải pháp CNTT số 1
            </p>
            <p className="text-text-secondary text-[1.05rem] leading-[1.9]">
              Công ty chuyên nghiệp hàng đầu về CNTT, cung cấp các giải pháp toàn diện tối ưu
              cho nhu cầu CNTT của bạn. Chúng tôi không ngừng cải tiến, đổi mới và luôn đặt chất
              lượng dịch vụ lên trên lợi nhuận tức thời — bởi sự phát triển của khách hàng chính
              là sự phát triển của chúng tôi.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
