"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users2 } from "lucide-react";

export default function CustomerFocusSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[48px] shadow-[0_12px_40px_rgba(27,79,191,0.14)] aspect-[4/5]">
              <Image
                src="https://placehold.co/640x800/2563EB/FFFFFF?text=Đội+ngũ+kỹ+thuật+GVN"
                alt="Đội ngũ kỹ thuật GVN hỗ trợ và tư vấn khách hàng"
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
              className="absolute -bottom-5 -right-4 bg-white rounded-2xl shadow-card-hover px-5 py-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <Users2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-text-primary text-sm leading-tight">50+ nhân sự</p>
                <p className="text-text-secondary text-xs">kỹ thuật viên chuyên nghiệp</p>
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
            <span className="badge mb-4 block w-fit">Khách hàng</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-3">
              Khách hàng
            </h2>
            <p className="text-primary font-semibold text-lg mb-6">
              Tinh thần lấy khách hàng làm trung tâm &amp; hỗ trợ kỹ thuật
            </p>
            <p className="text-text-secondary text-[1.05rem] leading-[1.9]">
              Chúng tôi cung cấp đa dạng sản phẩm và các dịch vụ kỹ thuật nâng cao nhằm hỗ trợ sự
              thành công trong kinh doanh của bạn. Dựa trên nền tảng tin tưởng này, chúng tôi mong
              muốn trở thành công ty giải pháp CNTT chuyên biệt, cùng đồng hành phát triển với
              khách hàng.
            </p>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Bảo hành chính hãng", "Hỗ trợ 24/7", "Cam kết tiến độ", "Tư vấn miễn phí"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-primary-50 text-primary text-sm font-medium px-4 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
