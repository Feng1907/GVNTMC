"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle2, Award, FileText } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

const benefits = [
  { icon: Clock, title: "Phản hồi nhanh", desc: "Nhận báo giá trong vòng 2 giờ làm việc" },
  { icon: CheckCircle2, title: "Miễn phí tư vấn", desc: "Không mất phí cho dịch vụ tư vấn ban đầu" },
  { icon: Award, title: "Sản phẩm chính hãng", desc: "Cam kết 100% hàng chính hãng" },
  { icon: FileText, title: "Báo giá chi tiết", desc: "Báo giá rõ ràng, không phát sinh chi phí ẩn" },
];

export default function QuotePageClient() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white pt-32 pb-16">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <div className="badge bg-white/10 border border-white/20 text-white mb-6">Báo giá</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nhận báo giá<br />
              <span className="text-accent">miễn phí</span>
            </h1>
            <p className="text-white/75 text-xl leading-relaxed">
              Điền thông tin để nhận báo giá tốt nhất từ đội ngũ tư vấn GVN trong vòng 2 giờ làm việc.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-10 border-b border-neutral-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-bold text-text-primary text-sm mb-1">{b.title}</p>
                  <p className="text-text-secondary text-xs">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2"
            >
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-text-primary mb-2">Thông tin yêu cầu báo giá</h2>
                <p className="text-text-secondary mb-8">Điền đầy đủ thông tin để chúng tôi tư vấn chính xác nhất.</p>
                <QuoteForm />
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Process */}
              <div className="card p-6">
                <h3 className="font-bold text-text-primary mb-5">Quy trình báo giá</h3>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Gửi yêu cầu", desc: "Điền form với thông tin dự án" },
                    { step: "02", title: "Tư vấn viên liên hệ", desc: "Trong 2 giờ làm việc" },
                    { step: "03", title: "Khảo sát (nếu cần)", desc: "Đánh giá yêu cầu chi tiết" },
                    { step: "04", title: "Nhận báo giá", desc: "Báo giá chi tiết và minh bạch" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">{item.step}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary text-sm">{item.title}</p>
                        <p className="text-text-secondary text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact alternative */}
              <div className="bg-gradient-primary rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Hoặc liên hệ trực tiếp</h3>
                <p className="text-white/70 text-sm mb-4">Gọi ngay để được tư vấn trực tiếp</p>
                <a href="tel:+842812345678" className="btn-accent w-full justify-center text-sm">
                  📞 +84 (28) 1234 5678
                </a>
                <a href="mailto:sales@gvntmc.com" className="block text-center text-white/60 hover:text-white text-sm mt-3 transition-colors">
                  ✉ sales@gvntmc.com
                </a>
              </div>

              {/* Trust */}
              <div className="card p-6">
                <h3 className="font-bold text-text-primary mb-4">Khách hàng tin tưởng</h3>
                <div className="grid grid-cols-3 gap-2">
                  {["Shinhan Bank", "Hyosung", "KEB Hana", "Chemtronics", "CJ Group", "LG Display"].map((client) => (
                    <div key={client} className="bg-neutral-light rounded-xl p-2 text-center">
                      <p className="text-xs text-text-secondary font-medium">{client}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
