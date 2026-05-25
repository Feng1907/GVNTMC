"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  {
    icon: MapPin,
    title: "Địa chỉ",
    lines: ["123 Đường Nguyễn Văn Linh", "Quận 7, TP. Hồ Chí Minh"],
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Phone,
    title: "Điện thoại",
    lines: ["+84 (28) 1234 5678", "+84 912 345 678"],
    color: "text-green-600 bg-green-50",
    href: "tel:+842812345678",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@gvntmc.com", "sales@gvntmc.com"],
    color: "text-orange-500 bg-orange-50",
    href: "mailto:info@gvntmc.com",
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    lines: ["Thứ 2 – Thứ 6: 8:00 – 17:30", "Thứ 7: 8:00 – 12:00"],
    color: "text-purple-600 bg-purple-50",
  },
];

export default function ContactPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white pt-32 pb-16">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <div className="badge bg-white/10 border border-white/20 text-white mb-6">Liên hệ</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hãy để chúng tôi<br />
              <span className="text-accent">giúp bạn</span>
            </h1>
            <p className="text-white/75 text-xl leading-relaxed">
              Đội ngũ chuyên gia GVN sẵn sàng tư vấn miễn phí và hỗ trợ bạn tìm giải pháp CNTT phù hợp nhất.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              const content = (
                <div className="card p-6 text-center group h-full">
                  <div className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-text-primary mb-3">{info.title}</h3>
                  {info.lines.map((line) => (
                    <p key={line} className="text-text-secondary text-sm">{line}</p>
                  ))}
                </div>
              );

              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {info.href ? (
                    <a href={info.href}>{content}</a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-bold text-text-primary text-xl">Gửi tin nhắn</h2>
                    <p className="text-text-secondary text-sm">Chúng tôi phản hồi trong 2 giờ</p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </motion.div>

            {/* Map + additional info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map placeholder */}
              <div className="aspect-[4/3] bg-gradient-primary rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-accent" />
                    <p className="font-bold text-xl mb-2">GVN Technology</p>
                    <p className="text-white/70">123 Nguyễn Văn Linh, Quận 7</p>
                    <p className="text-white/70">TP. Hồ Chí Minh</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block bg-white/20 hover:bg-white/30 text-white text-sm px-4 py-2 rounded-xl transition-colors"
                    >
                      Xem trên Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="card p-6">
                <h3 className="font-bold text-text-primary mb-4">Câu hỏi thường gặp</h3>
                <div className="space-y-4">
                  {[
                    { q: "Tư vấn có mất phí không?", a: "Hoàn toàn miễn phí. GVN cung cấp tư vấn ban đầu miễn phí cho tất cả khách hàng." },
                    { q: "Thời gian phản hồi sau liên hệ?", a: "Chúng tôi cam kết phản hồi trong vòng 2 giờ làm việc." },
                    { q: "GVN có hỗ trợ ngoài giờ không?", a: "Có, đội ngũ hỗ trợ kỹ thuật của chúng tôi hoạt động 24/7 cho các hợp đồng bảo trì." },
                  ].map((item) => (
                    <div key={item.q} className="border-b border-neutral-border last:border-0 pb-4 last:pb-0">
                      <p className="font-semibold text-text-primary text-sm mb-1">{item.q}</p>
                      <p className="text-text-secondary text-sm">{item.a}</p>
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
