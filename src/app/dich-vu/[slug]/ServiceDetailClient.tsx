"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import { ServiceItem as Service } from "@/data/services";
import CTASection from "@/components/CTASection";

interface Props {
  service: Service;
}

export default function ServiceDetailClient({ service }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white pt-32 pb-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/dich-vu" className="hover:text-white transition-colors">Dịch vụ</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white line-clamp-1">{service.title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="badge bg-white/10 border border-white/20 text-white mb-6">Dịch vụ</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-5">{service.title}</h1>
            <p className="text-white/75 text-lg leading-relaxed">{service.shortDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative aspect-video rounded-2xl overflow-hidden"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">Mô tả dịch vụ</h2>
                <p className="text-text-secondary leading-relaxed">{service.description}</p>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-6">Lợi ích mang lại</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3 p-4 bg-neutral-light rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-text-primary text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-6">Quy trình thực hiện</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {service.process.map((step) => (
                    <div key={step.step} className="bg-neutral-light rounded-2xl p-5 text-center">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>
                      <h3 className="font-bold text-text-primary text-sm mb-2">{step.title}</h3>
                      <p className="text-text-secondary text-xs">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-primary rounded-2xl p-6 text-white sticky top-24"
              >
                <h3 className="font-bold text-lg mb-3">Quan tâm dịch vụ này?</h3>
                <p className="text-white/70 text-sm mb-5">
                  Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết.
                </p>
                <Link href="/bao-gia" className="btn-accent w-full justify-center mb-3">
                  Nhận báo giá
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/lien-he" className="block text-center text-white/70 hover:text-white text-sm transition-colors">
                  Liên hệ tư vấn →
                </Link>

                <div className="mt-6 pt-6 border-t border-white/15 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Tư vấn miễn phí
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Phản hồi trong 2 giờ
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Hỗ trợ 24/7
                  </div>
                </div>
              </motion.div>

              {/* Other services */}
              <div className="card p-5">
                <h3 className="font-bold text-text-primary mb-4">Dịch vụ khác</h3>
                <Link href="/dich-vu" className="flex items-center gap-2 text-primary text-sm font-medium">
                  Xem tất cả dịch vụ
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
