"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, Package, Landmark, Headphones, Monitor, HardHat } from "lucide-react";
import { ServiceItem } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  wrench: Wrench,
  package: Package,
  landmark: Landmark,
  headphones: Headphones,
  monitor: Monitor,
  hardhat: HardHat,
};

// Distinct accent color per card index
const accents = [
  { light: "bg-blue-50", icon: "text-blue-600", bar: "bg-blue-500" },
  { light: "bg-indigo-50", icon: "text-indigo-600", bar: "bg-indigo-500" },
  { light: "bg-sky-50", icon: "text-sky-600", bar: "bg-sky-500" },
  { light: "bg-violet-50", icon: "text-violet-600", bar: "bg-violet-500" },
  { light: "bg-emerald-50", icon: "text-emerald-600", bar: "bg-emerald-500" },
  { light: "bg-orange-50", icon: "text-orange-500", bar: "bg-orange-500" },
];

interface Props {
  service: ServiceItem;
  index: number;
}

export default function ServiceCard({ service, index }: Props) {
  const Icon = iconMap[service.icon] ?? Wrench;
  const accent = accents[index % accents.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link
        href={`/dich-vu/${service.slug}`}
        className="flex flex-col h-full bg-white rounded-2xl border border-neutral-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        aria-label={`Xem chi tiết: ${service.title}`}
      >
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* Icon badge over image */}
          <div className={`absolute top-4 left-4 w-10 h-10 ${accent.light} rounded-xl flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110`}>
            <Icon className={`w-5 h-5 ${accent.icon}`} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          {/* Top accent bar */}
          <div className={`w-10 h-1 bg-gradient-to-r ${accent.bar} to-transparent rounded-full mb-4`} />

          <h2 className="font-bold text-[1.05rem] text-text-primary leading-snug mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {service.title}
          </h2>

          <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
            {service.shortDesc}
          </p>

          <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
            Xem chi tiết
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
