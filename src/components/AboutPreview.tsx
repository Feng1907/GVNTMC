"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Users2, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const highlights = [
  "Phân phối thiết bị CNTT chính hãng",
  "Đội ngũ kỹ sư và kỹ thuật viên giàu kinh nghiệm",
  "Đối tác tin cậy của các tập đoàn Hàn Quốc",
  "Dịch vụ hỗ trợ kỹ thuật 24/7",
  "Cam kết chất lượng và đúng tiến độ",
];

const achievements = [
  { icon: Award, to: 10, suffix: "+", label: "Năm kinh nghiệm", color: "text-blue-600 bg-blue-50" },
  { icon: Users2, to: 50, suffix: "+", label: "Khách hàng", color: "text-orange-500 bg-orange-50" },
  { icon: TrendingUp, to: 200, suffix: "+", label: "Dự án hoàn thành", color: "text-green-600 bg-green-50" },
];

export default function AboutPreview() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge mb-5">{t.about.badge}</div>
            <h2 className="section-title mb-5">{t.about.title}</h2>
            <p className="text-text-secondary leading-relaxed mb-5">{t.about.subtitle}</p>
            <p className="text-text-secondary leading-relaxed mb-8">{t.about.mission}</p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-primary">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/gioi-thieu" className="btn-primary">
              {t.about.learnMore}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right: Infographic */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main illustration */}
            <div className="relative bg-gradient-primary rounded-3xl p-8 overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white rounded-full" />
                <div className="absolute bottom-8 left-4 w-20 h-20 border-2 border-white rounded-full" />
                <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* SVG Company illustration */}
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full relative z-10">
                {/* Office building */}
                <rect x="120" y="100" width="160" height="170" rx="8" fill="white" fillOpacity="0.15" />
                <rect x="130" y="80" width="140" height="30" rx="6" fill="white" fillOpacity="0.2" />
                {/* Windows */}
                {[0,1,2,3].map(col => (
                  [0,1,2,3].map(row => {
                    const lit = (col + row) % 3 !== 0;
                    return (
                      <rect
                        key={`${col}-${row}`}
                        x={140 + col * 32}
                        y={115 + row * 38}
                        width="20"
                        height="24"
                        rx="3"
                        fill={lit ? "#F97316" : "white"}
                        fillOpacity={lit ? "0.7" : "0.25"}
                      />
                    );
                  })
                ))}
                {/* Door */}
                <rect x="175" y="228" width="50" height="42" rx="4" fill="#F97316" fillOpacity="0.5" />
                <circle cx="220" cy="249" r="3" fill="white" fillOpacity="0.6" />

                {/* People/icons around */}
                <circle cx="70" cy="200" r="25" fill="white" fillOpacity="0.15" />
                <text x="70" y="206" textAnchor="middle" fontSize="20">👨‍💼</text>

                <circle cx="330" cy="180" r="25" fill="white" fillOpacity="0.15" />
                <text x="330" y="186" textAnchor="middle" fontSize="20">🔧</text>

                <circle cx="70" cy="140" r="20" fill="white" fillOpacity="0.1" />
                <text x="70" y="146" textAnchor="middle" fontSize="16">💡</text>

                <circle cx="330" cy="120" r="20" fill="white" fillOpacity="0.1" />
                <text x="330" y="126" textAnchor="middle" fontSize="16">🛡️</text>

                {/* Company name */}
                <text x="200" y="92" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="sans-serif">GVN TECHNOLOGY</text>

                {/* Connection lines */}
                <line x1="95" y1="200" x2="120" y2="200" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 3" />
                <line x1="280" y1="180" x2="310" y2="180" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 3" />
                <line x1="90" y1="140" x2="120" y2="150" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 3" />
                <line x1="280" y1="150" x2="310" y2="130" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 3" />

                {/* Stars/awards */}
                <text x="200" y="280" textAnchor="middle" fill="white" fillOpacity="0.6" fontSize="11" fontFamily="sans-serif">★★★★★ Đối tác tin cậy</text>
              </svg>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {achievements.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="card-hover-lift bg-white rounded-2xl shadow-card p-4 text-center">
                    <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <AnimatedCounter to={item.to} suffix={item.suffix} className="font-bold text-2xl text-text-primary" />
                    <p className="text-xs text-text-secondary">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
