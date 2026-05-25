"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, User, Mail, Phone, Building2, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import clsx from "clsx";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = "Vui lòng nhập họ tên";
    if (!form.email.trim()) {
      errs.email = "Vui lòng nhập email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Email không hợp lệ";
    }
    if (!form.phone.trim()) {
      errs.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^[0-9+\-\s()]{8,15}$/.test(form.phone)) {
      errs.phone = "Số điện thoại không hợp lệ";
    }
    if (!form.message.trim()) errs.message = "Vui lòng nhập nội dung";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-text-primary mb-2">Gửi thành công!</h3>
        <p className="text-text-secondary">{t.contact.success}</p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 btn-primary"
        >
          Gửi tin nhắn khác
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name & Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">
            {t.contact.name} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nguyễn Văn A"
              className={clsx("input-field pl-10", errors.name && "border-red-400 focus:ring-red-200")}
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">
            {t.contact.email} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@company.com"
              className={clsx("input-field pl-10", errors.email && "border-red-400 focus:ring-red-200")}
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Phone & Company */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">
            {t.contact.phone} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="0912 345 678"
              className={clsx("input-field pl-10", errors.phone && "border-red-400 focus:ring-red-200")}
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">
            {t.contact.company}
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Công ty của bạn"
              className="input-field pl-10"
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-text-primary mb-1.5">
          {t.contact.message} <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-text-light" />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Mô tả nhu cầu của bạn..."
            className={clsx("input-field pl-10 resize-none", errors.message && "border-red-400 focus:ring-red-200")}
          />
        </div>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            {t.contact.sending}
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {t.contact.send}
          </>
        )}
      </button>
    </form>
  );
}
