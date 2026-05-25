"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { ServiceItem } from "@/data/services";

interface Props {
  service: ServiceItem;
}

export default function ServiceDetailHero({ service }: Props) {
  return (
    <section className="bg-gradient-to-b from-[#EBF0FB] to-white pt-28 pb-0 md:pt-32">
      <div className="container-custom">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-text-secondary mb-8 flex-wrap"
        >
          <Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link>
          <ChevronRight className="w-3.5 h-3.5 text-text-light flex-shrink-0" />
          <Link href="/dich-vu" className="hover:text-primary transition-colors">Dịch vụ</Link>
          <ChevronRight className="w-3.5 h-3.5 text-text-light flex-shrink-0" />
          <span className="text-text-primary font-medium line-clamp-1">{service.title}</span>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pb-12">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="badge mb-5 block w-fit">Dịch vụ GVN</span>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-5">
              {service.title}
            </h1>
            <p className="text-text-secondary text-[1.05rem] leading-relaxed mb-8">
              {service.shortDesc}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/bao-gia" className="btn-primary">
                Nhận báo giá
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/lien-he" className="btn-outline">
                Liên hệ tư vấn
              </Link>
            </div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(27,79,191,0.14)]"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Bottom border */}
        <div className="h-px bg-neutral-border" />
      </div>
    </section>
  );
}
