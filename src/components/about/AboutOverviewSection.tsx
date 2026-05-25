"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const bullets = [
  "Đề xuất cấu hình thiết bị tối ưu",
  "Vận hành mạng lưới hiệu quả",
  "Lên kế hoạch bảo trì dài hạn, hợp lý và tiết kiệm",
];

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutOverviewSection() {
  return (
    <section className="section-padding bg-neutral-light">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="badge mb-4 block w-fit">Về chúng tôi</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-6">
              Về chúng tôi
            </h2>

            <p className="text-text-secondary text-[1.05rem] leading-[1.85] mb-5">
              Đúng như tên gọi,{" "}
              <strong className="text-text-primary font-semibold">
                GLOBAL VN TECHNOLOGY &amp; MAINTENANCE COMPANY
              </strong>{" "}
              tự hào sở hữu năng lực kỹ thuật vượt trội trong lĩnh vực thiết kế, xây dựng và bảo
              trì các hệ thống công nghệ thông tin (CNTT), hệ thống điện và các dự án mạng lưới
              phức hợp.
            </p>

            <p className="text-text-secondary text-[1.05rem] leading-[1.85]">
              Với nhiều năm kinh nghiệm triển khai và bảo trì hạ tầng CNTT cho các tổ chức tài
              chính, tập đoàn lớn, nhà máy và nhiều đơn vị khác, chúng tôi cam kết đồng hành cùng
              doanh nghiệp tại Việt Nam, đáp ứng linh hoạt các nhu cầu đa dạng.
            </p>
          </motion.div>

          {/* Right — bullets + closing text */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-card"
          >
            <ul className="space-y-4 mb-7">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-text-secondary text-[1.05rem] leading-[1.85] border-t border-neutral-border pt-6">
              Chúng tôi không theo đuổi lợi nhuận ngắn hạn, mà kiên định với sứ mệnh trở thành đối
              tác tin cậy, cùng khách hàng phát triển bền vững, đặt chữ{" "}
              <strong className="text-primary">&ldquo;Tín&rdquo;</strong> và{" "}
              <strong className="text-primary">&ldquo;Trách nhiệm&rdquo;</strong> lên hàng đầu trong mọi hoạt
              động.
            </p>

            <Link
              href="/bao-gia"
              className="btn-primary mt-7 w-full sm:w-auto justify-center"
            >
              Yêu cầu báo giá
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
