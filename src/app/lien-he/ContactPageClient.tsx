"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Send,
  CheckCircle,
} from "lucide-react";

/* ─── Contact Form (inline, matches spec exactly) ─── */
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Vui lòng nhập họ tên";
    if (!form.email.trim()) e.email = "Vui lòng nhập email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email không hợp lệ";
    if (!form.phone.trim()) e.phone = "Vui lòng nhập số điện thoại";
    else if (!/^[0-9+\-\s()]{8,15}$/.test(form.phone)) e.phone = "Số điện thoại không hợp lệ";
    if (!form.message.trim()) e.message = "Vui lòng nhập nội dung";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof Errors]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl border border-neutral-border text-text-primary placeholder:text-text-secondary text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition bg-white";
  const inputError = "border-red-400 focus:border-red-400 focus:ring-red-100";

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-10 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">Gửi thành công!</h3>
        <p className="text-text-secondary leading-relaxed">
          Cảm ơn bạn đã liên hệ. GVN sẽ phản hồi trong thời gian sớm nhất.
        </p>
        <button onClick={() => setSuccess(false)} className="btn-primary mt-6">
          Gửi tin nhắn khác
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name full width */}
      <div>
        <label className="block text-sm font-semibold text-text-primary mb-1.5">
          Họ và Tên <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Họ và Tên"
          className={`${inputBase} ${errors.name ? inputError : ""}`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Email + Phone 2 cols */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className={`${inputBase} ${errors.email ? inputError : ""}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Số điện thoại"
            className={`${inputBase} ${errors.phone ? inputError : ""}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Message full width */}
      <div>
        <label className="block text-sm font-semibold text-text-primary mb-1.5">
          Nội dung <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Nội dung"
          className={`${inputBase} resize-none ${errors.message ? inputError : ""}`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Đang gửi...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            GỬI
          </>
        )}
      </button>
    </form>
  );
}

/* ─── Info cards ─── */
const INFO_CARDS = [
  {
    icon: Phone,
    title: "Điện thoại",
    desc: "Hãy gọi cho chúng tôi để nói chuyện trực tiếp với nhóm của chúng tôi.",
    lines: ["028 62515094", "091 970 4433"],
    href: "tel:02862515094",
  },
  {
    icon: MessageSquare,
    title: "Chat trực tiếp",
    desc: "Cần câu trả lời ngay lập tức? Sử dụng trực tiếp để được hỗ trợ theo thời gian thực.",
    lines: ["support@gvntmc.com"],
    href: "mailto:support@gvntmc.com",
  },
  {
    icon: MapPin,
    title: "Địa chỉ",
    desc: "Ghé văn phòng GVN – Chúng tôi luôn sẵn sàng hỗ trợ!",
    lines: [
      "HCM: 51 Đường số 9, KDC Him Lam, P. Tân Hưng, TP. HCM",
      "HN: F9 Kim Ánh, 78/1 Duy Tân, Cầu Giấy, Hà Nội",
    ],
  },
];

/* ─── Map offices ─── */
const OFFICES = [
  {
    id: "hcm",
    label: "Văn phòng HCM",
    address: "51 Đường số 9, Khu Dân Cư Him Lam, Phường Tân Hưng, TP. Hồ Chí Minh, Việt Nam",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9!2d106.698!3d10.733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQzJzU5LjkiTiAxMDbCsDQxJzU0LjAiRQ!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s",
    mapsUrl: "https://maps.google.com/?q=51+Đường+số+9+Tân+Hưng+TP.HCM",
  },
  {
    id: "hn",
    label: "Văn phòng Hà Nội",
    address: "F9 Tòa nhà Kim Ánh, 78/1 Duy Tân, Cầu Giấy, Hà Nội",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9!2d105.787!3d21.028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAxJzQyLjAiTiAxMDXCsDQ3JzE0LjAiRQ!5e0!3m2!1svi!2s!4v1620000000001!5m2!1svi!2s",
    mapsUrl: "https://maps.google.com/?q=78/1+Duy+Tân+Cầu+Giấy+Hà+Nội",
  },
];

/* ─── Page ─── */
export default function ContactPageClient() {
  const [activeOffice, setActiveOffice] = useState("hcm");
  const office = OFFICES.find((o) => o.id === activeOffice)!;

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-28 pb-12 border-b border-neutral-border">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-text-primary font-medium">Liên hệ</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="badge mb-5 mx-auto">Liên hệ</div>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Liên hệ với Chúng tôi
            </h1>
            <p className="text-text-secondary leading-relaxed">
              GVN luôn sẵn sàng tư vấn và hỗ trợ doanh nghiệp trong các giải pháp CNTT, hạ tầng
              mạng, camera, điện nhẹ, thiết bị công nghệ và bảo trì hệ thống.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Form section ── */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-card p-8 md:p-10 border border-neutral-border">
              {/* Section header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-text-primary">Gửi thông tin liên hệ</h2>
                  <p className="text-text-secondary text-sm">GVN sẽ phản hồi trong vòng 2 giờ làm việc</p>
                </div>
              </div>

              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact info — blue bg ── */}
      <section className="bg-gradient-primary py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Thông tin liên hệ</h2>
            <p className="text-white/70">Nhiều cách để kết nối với GVN</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {INFO_CARDS.map((card, i) => {
              const Icon = card.icon;
              const inner = (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 border border-white/20 rounded-2xl p-7 text-white hover:bg-white/15 transition-colors h-full"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{card.desc}</p>
                  <div className="space-y-1">
                    {card.lines.map((line) => (
                      <p key={line} className="text-white font-semibold text-sm">{line}</p>
                    ))}
                  </div>
                </motion.div>
              );

              return card.href ? (
                <a key={card.title} href={card.href} className="block h-full">
                  {inner}
                </a>
              ) : (
                <div key={card.title} className="h-full">{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Map section ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-text-primary mb-2 text-center">
              Địa chỉ văn phòng
            </h2>
            <p className="text-text-secondary text-center mb-8">GVN có mặt tại TP. Hồ Chí Minh và Hà Nội</p>

            {/* Office tabs */}
            <div className="flex gap-2 justify-center mb-6">
              {OFFICES.map((o) => (
                <button
                  key={o.id}
                  onClick={() => setActiveOffice(o.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeOffice === o.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-100 text-text-secondary hover:bg-gray-200"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>

            {/* Address line */}
            <div className="flex items-center justify-center gap-2 text-text-secondary text-sm mb-5">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{office.address}</span>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-card border border-neutral-border aspect-[16/7]">
              <iframe
                key={activeOffice}
                src={office.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Bản đồ ${office.label}`}
              />
            </div>

            <div className="text-center mt-4">
              <a
                href={office.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                Xem trên Google Maps <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="bg-gradient-primary rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="contact-cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact-cta-grid)" />
            </svg>

            <div className="relative max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Bạn cần tư vấn giải pháp CNTT cho doanh nghiệp?
              </h2>
              <p className="text-white/70 text-base mb-8 leading-relaxed">
                Đội ngũ GVN sẵn sàng khảo sát, tư vấn và đề xuất giải pháp phù hợp với nhu cầu
                vận hành của doanh nghiệp bạn.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/bao-gia" className="btn-accent">
                  Nhận báo giá <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:02862515094"
                  className="btn bg-white/10 border border-white/30 text-white hover:bg-white/20"
                >
                  <Phone className="w-4 h-4" /> Gọi ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
