"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Building2, ChevronRight, CheckCircle2, TrendingUp, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import CTASection from "@/components/CTASection";

interface Props {
  project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white pt-32 pb-16">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/du-an" className="hover:text-white transition-colors">Dự án</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white line-clamp-1">{project.client}</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="badge bg-white/10 border border-white/20 text-white mb-6">{project.category}</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-5">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
              <span className="flex items-center gap-2"><Building2 className="w-4 h-4" />{project.client}</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{project.location}</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{project.year}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-10">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative aspect-video rounded-2xl overflow-hidden"
              >
                <Image src={project.image} alt={project.title} fill className="object-cover" priority />
              </motion.div>

              {/* Description */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Giới thiệu dự án</h2>
                <p className="text-text-secondary leading-relaxed">{project.description}</p>
              </motion.div>

              {/* Scope */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-text-primary mb-6">Phạm vi thực hiện</h2>
                <div className="space-y-3">
                  {project.scope.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 bg-neutral-light rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Results */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-text-primary mb-6">Kết quả đạt được</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.results.map((result) => (
                    <div key={result} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                      <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-text-primary text-sm font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project info */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="card p-6">
                <h3 className="font-bold text-text-primary mb-4">Thông tin dự án</h3>
                <div className="space-y-4">
                  {[
                    { label: "Khách hàng", value: project.client, icon: Building2 },
                    { label: "Vị trí", value: project.location, icon: MapPin },
                    { label: "Năm thực hiện", value: String(project.year), icon: Calendar },
                    { label: "Lĩnh vực", value: project.category, icon: CheckCircle2 },
                  ].map(({ label, value, icon: Icon }) => (
                    <div key={label} className="flex items-start gap-3">
                      <Icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-text-secondary">{label}</p>
                        <p className="text-sm font-semibold text-text-primary">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <div className="bg-gradient-primary rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Dự án tương tự?</h3>
                <p className="text-white/70 text-sm mb-5">Liên hệ GVN để được tư vấn giải pháp phù hợp cho doanh nghiệp của bạn.</p>
                <Link href="/bao-gia" className="btn-accent w-full justify-center text-sm">
                  Yêu cầu báo giá <ArrowRight className="w-4 h-4" />
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
