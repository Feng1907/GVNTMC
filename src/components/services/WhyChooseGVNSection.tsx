"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, UserCheck, Zap, PiggyBank } from "lucide-react";

const reasons = [
  {
    icon: ClipboardCheck,
    title: "Kinh nghiệm triển khai thực tế",
    desc: "Hơn 10 năm triển khai hàng trăm dự án lớn nhỏ cho tập đoàn, ngân hàng, nhà máy trên toàn quốc.",
  },
  {
    icon: UserCheck,
    title: "Đội ngũ kỹ thuật chuyên môn cao",
    desc: "Kỹ thuật viên được đào tạo bài bản, có chứng chỉ quốc tế, am hiểu sâu về hạ tầng CNTT.",
  },
  {
    icon: Zap,
    title: "Hỗ trợ nhanh chóng, tận tâm",
    desc: "Phản hồi trong 2 giờ, hỗ trợ onsite hoặc remote, đảm bảo hệ thống hoạt động liên tục.",
  },
  {
    icon: PiggyBank,
    title: "Giải pháp tối ưu chi phí",
    desc: "Tư vấn giải pháp phù hợp ngân sách, không đề xuất thừa hay thiếu so với nhu cầu thực tế.",
  },
];

export default function WhyChooseGVNSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mb-4 block w-fit mx-auto"
          >
            Tại sao chọn GVN?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Vì sao doanh nghiệp chọn GVN?
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-neutral-light hover:bg-white rounded-2xl p-7 border border-transparent hover:border-primary/10 hover:shadow-card transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-text-primary text-[1rem] mb-3 leading-snug">
                  {r.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
