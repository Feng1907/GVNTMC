"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, User, Mail, Phone, Building2, MessageSquare, ChevronDown } from "lucide-react";
import clsx from "clsx";

const serviceOptions = [
  "Bảo trì & nâng cấp hệ thống CNTT",
  "Cung cấp linh kiện & thiết bị CNTT",
  "Thiết bị chuyên dụng ngân hàng",
  "Helpdesk & IT Outsourcing",
  "Giải pháp camera, máy chủ, lưu trữ, mạng",
  "Tư vấn – thiết kế – thi công hạ tầng",
  "Khác",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  serviceType: string;
  details: string;
  budget: string;
}

interface Errors {
  name?: string;
  phone?: string;
  email?: string;
  serviceType?: string;
  details?: string;
}

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    company: "",
    serviceType: "",
    details: "",
    budget: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): Errors => {
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = "Vui lòng nhập họ tên";
    if (!form.phone.trim()) {
      errs.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^[0-9+\-\s()]{8,15}$/.test(form.phone)) {
      errs.phone = "Số điện thoại không hợp lệ";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Email không hợp lệ";
    }
    if (!form.serviceType) errs.serviceType = "Vui lòng chọn dịch vụ";
    if (!form.details.trim()) errs.details = "Vui lòng mô tả yêu cầu";
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
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-text-primary mb-3">Yêu cầu đã được gửi!</h3>
        <p className="text-text-secondary max-w-md mx-auto mb-6">
          Cảm ơn bạn đã gửi yêu cầu báo giá. Đội ngũ tư vấn của GVN sẽ liên hệ với bạn trong vòng 2 giờ làm việc.
        </p>
        <button
          onClick={() => { setSuccess(false); setForm({ name: "", phone: "", email: "", company: "", serviceType: "", details: "", budget: "" }); }}
          className="btn-primary"
        >
          Gửi yêu cầu khác
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name & Phone */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nguyễn Văn A"
              className={clsx("input-field pl-10", errors.name && "border-red-400")}
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="0912 345 678"
              className={clsx("input-field pl-10", errors.phone && "border-red-400")}
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Email & Company */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@company.com"
              className={clsx("input-field pl-10", errors.email && "border-red-400")}
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">
            Công ty / Tổ chức
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Tên công ty"
              className="input-field pl-10"
            />
          </div>
        </div>
      </div>

      {/* Service Type */}
      <div>
        <label className="block text-sm font-semibold text-text-primary mb-1.5">
          Dịch vụ / Sản phẩm quan tâm <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
            className={clsx(
              "input-field appearance-none pr-10",
              errors.serviceType && "border-red-400",
              !form.serviceType && "text-text-light"
            )}
          >
            <option value="" disabled>Chọn dịch vụ...</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt} className="text-text-primary">{opt}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light pointer-events-none" />
        </div>
        {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>}
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm font-semibold text-text-primary mb-1.5">
          Ngân sách dự kiến
        </label>
        <div className="relative">
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={clsx("input-field appearance-none pr-10", !form.budget && "text-text-light")}
          >
            <option value="" disabled>Chọn ngân sách...</option>
            <option value="Dưới 50 triệu">Dưới 50 triệu đồng</option>
            <option value="50-200 triệu">50 – 200 triệu đồng</option>
            <option value="200-500 triệu">200 – 500 triệu đồng</option>
            <option value="Trên 500 triệu">Trên 500 triệu đồng</option>
            <option value="Chưa xác định">Chưa xác định</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light pointer-events-none" />
        </div>
      </div>

      {/* Details */}
      <div>
        <label className="block text-sm font-semibold text-text-primary mb-1.5">
          Mô tả yêu cầu <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-text-light" />
          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            rows={5}
            placeholder="Mô tả chi tiết nhu cầu, quy mô, thời gian triển khai mong muốn..."
            className={clsx("input-field pl-10 resize-none", errors.details && "border-red-400")}
          />
        </div>
        {errors.details && <p className="text-red-500 text-xs mt-1">{errors.details}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-accent w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Đang gửi yêu cầu...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Gửi yêu cầu báo giá
          </>
        )}
      </button>

      <p className="text-xs text-text-secondary text-center">
        Chúng tôi sẽ phản hồi trong vòng 2 giờ làm việc. Không ràng buộc hợp đồng.
      </p>
    </form>
  );
}
