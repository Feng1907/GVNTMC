"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Shield, Zap, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  const { t } = useLanguage();

  const stats = [
    { icon: Zap, to: 10, suffix: "+", label: t.hero.stat1.label },
    { icon: Shield, to: 200, suffix: "+", label: t.hero.stat2.label },
    { icon: Users, to: 30, suffix: "+", label: t.hero.stat3.label },
  ];

  const titleLines = t.hero.title.split("\n");

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-24 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="shimmer inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              {t.hero.badge}
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              {titleLines.map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? (
                    <span className="animated-gradient-text">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="/dich-vu" className="btn-accent btn-shine text-base px-7 py-3.5 hover:scale-105">
                {t.hero.cta1}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 text-white border-2 border-white/30 hover:border-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-base"
              >
                <Play className="w-4 h-4" />
                {t.hero.cta2}
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-8"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <AnimatedCounter
                    to={stat.to}
                    suffix={stat.suffix}
                    duration={2}
                    className="text-3xl font-bold text-white"
                  />
                  <p className="text-xs text-white/60 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl scale-90" />

              {/* Main SVG illustration */}
              <svg
                viewBox="0 0 520 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-xl relative z-10 drop-shadow-2xl"
              >
                {/* Background card */}
                <rect x="20" y="20" width="480" height="380" rx="24" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.1" />

                {/* Server rack - left */}
                <rect x="50" y="60" width="140" height="280" rx="12" fill="#0F3A8F" fillOpacity="0.8" stroke="white" strokeOpacity="0.2" />
                <rect x="60" y="80" width="120" height="40" rx="6" fill="#1B4FBF" />
                <rect x="68" y="92" width="60" height="8" rx="4" fill="white" fillOpacity="0.4" />
                <rect x="140" y="92" width="12" height="8" rx="4" fill="#F97316">
                  <animate attributeName="opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite" />
                </rect>
                <rect x="60" y="130" width="120" height="40" rx="6" fill="#1B4FBF" />
                <rect x="68" y="142" width="60" height="8" rx="4" fill="white" fillOpacity="0.4" />
                <rect x="140" y="142" width="12" height="8" rx="4" fill="#22C55E">
                  <animate attributeName="opacity" values="1;0.3;1" dur="2.2s" repeatCount="indefinite" />
                </rect>
                <rect x="60" y="180" width="120" height="40" rx="6" fill="#1B4FBF" />
                <rect x="68" y="192" width="60" height="8" rx="4" fill="white" fillOpacity="0.4" />
                <rect x="140" y="192" width="12" height="8" rx="4" fill="#22C55E">
                  <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" begin="0.5s" />
                </rect>
                <rect x="60" y="230" width="120" height="30" rx="6" fill="#2563EB" fillOpacity="0.5" />
                <rect x="60" y="270" width="120" height="30" rx="6" fill="#2563EB" fillOpacity="0.5" />
                {/* Server label */}
                <text x="120" y="320" textAnchor="middle" fill="white" fillOpacity="0.7" fontSize="11" fontFamily="sans-serif">SERVER RACK</text>

                {/* Cloud - center top */}
                <ellipse cx="280" cy="110" rx="70" ry="40" fill="#1B4FBF" fillOpacity="0.6" />
                <ellipse cx="255" cy="115" rx="55" ry="35" fill="#1B4FBF" fillOpacity="0.7" />
                <ellipse cx="305" cy="115" rx="55" ry="35" fill="#2563EB" fillOpacity="0.5" />
                <ellipse cx="280" cy="125" rx="75" ry="30" fill="white" fillOpacity="0.12" />
                <text x="280" y="118" textAnchor="middle" fill="white" fontSize="11" fontFamily="sans-serif" fontWeight="600">CLOUD</text>

                {/* Network switch */}
                <rect x="220" y="200" width="120" height="55" rx="10" fill="#1B4FBF" stroke="white" strokeOpacity="0.2" />
                <text x="280" y="220" textAnchor="middle" fill="white" fillOpacity="0.8" fontSize="9" fontFamily="sans-serif">NETWORK SWITCH</text>
                {/* Ports */}
                {[0,1,2,3,4,5,6,7].map(i => (
                  <rect key={i} x={228 + i * 13} y="228" width="9" height="7" rx="2" fill={i < 5 ? "#22C55E" : "#64748B"} fillOpacity="0.8" />
                ))}

                {/* Storage device */}
                <rect x="350" y="160" width="120" height="110" rx="12" fill="#0F3A8F" stroke="white" strokeOpacity="0.15" />
                <rect x="360" y="175" width="100" height="25" rx="6" fill="#1B4FBF" />
                <rect x="368" y="183" width="55" height="8" rx="4" fill="white" fillOpacity="0.4" />
                <rect x="430" y="183" width="12" height="8" rx="4" fill="#22C55E" />
                <rect x="360" y="208" width="100" height="25" rx="6" fill="#1B4FBF" />
                <rect x="368" y="216" width="55" height="8" rx="4" fill="white" fillOpacity="0.4" />
                <rect x="430" y="216" width="12" height="8" rx="4" fill="#22C55E" />
                <text x="410" y="258" textAnchor="middle" fill="white" fillOpacity="0.7" fontSize="11" fontFamily="sans-serif">STORAGE</text>

                {/* Camera icon */}
                <circle cx="410" cy="80" r="30" fill="#F97316" fillOpacity="0.15" stroke="#F97316" strokeOpacity="0.3" />
                <rect x="396" y="70" width="28" height="20" rx="4" fill="white" fillOpacity="0.3" />
                <circle cx="424" cy="78" r="3" fill="#F97316" />
                <text x="410" y="115" textAnchor="middle" fill="white" fillOpacity="0.7" fontSize="10" fontFamily="sans-serif">CAMERA</text>

                {/* Connection lines */}
                <line x1="190" y1="155" x2="220" y2="220" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="280" y1="150" x2="280" y2="200" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="340" y1="225" x2="350" y2="215" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="380" y1="150" x2="410" y2="110" stroke="#F97316" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 4" />

                {/* Floating data particles */}
                <circle cx="225" cy="170" r="3" fill="#F97316" fillOpacity="0.7">
                  <animate attributeName="cy" values="170;160;170" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="330" cy="220" r="3" fill="#22C55E" fillOpacity="0.7">
                  <animate attributeName="cy" values="220;210;220" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="280" cy="175" r="2.5" fill="white" fillOpacity="0.5">
                  <animate attributeName="cy" values="175;165;175" dur="1.8s" repeatCount="indefinite" />
                </circle>

                {/* Bottom info bar */}
                <rect x="50" y="355" width="420" height="30" rx="8" fill="white" fillOpacity="0.05" />
                <circle cx="75" cy="370" r="6" fill="#22C55E" fillOpacity="0.8" />
                <text x="88" y="374" fill="white" fillOpacity="0.7" fontSize="9" fontFamily="sans-serif">System Online</text>
                <text x="220" y="374" fill="white" fillOpacity="0.5" fontSize="9" fontFamily="sans-serif">Uptime: 99.99%</text>
                <text x="360" y="374" fill="white" fillOpacity="0.5" fontSize="9" fontFamily="sans-serif">24/7 Support</text>
              </svg>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white rounded-[20px] shadow-[0_8px_32px_rgba(27,79,191,0.18)] p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-text-primary text-sm">{t.hero.floatingBadge1}</p>
                <p className="text-xs text-text-secondary">{t.hero.floatingBadge1Sub}</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-8 -right-4 bg-white rounded-[20px] shadow-[0_8px_32px_rgba(27,79,191,0.18)] p-4"
            >
              <div className="flex items-center gap-0.5 mb-1">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-bold text-text-primary text-sm">4.9/5</p>
              <p className="text-xs text-text-secondary">{t.hero.floatingBadge2Sub}</p>
            </motion.div>

            {/* Korean FDI badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -translate-y-1/2 -right-2 bg-white rounded-[16px] shadow-[0_6px_24px_rgba(27,79,191,0.15)] px-3 py-2.5 items-center gap-2.5 hidden xl:flex"
            >
              <span className="text-xl leading-none">🇰🇷</span>
              <div>
                <p className="font-bold text-text-primary text-xs leading-tight">Korean FDI Partners</p>
                <p className="text-[10px] text-text-secondary leading-tight mt-0.5">Shinhan · Hyosung · LG</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
