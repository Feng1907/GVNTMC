"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { NewsArticle } from "@/data/news";

interface Props {
  article: NewsArticle;
  index: number;
}

export function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export default function NewsCard({ article, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.1 }}
    >
      <Link
        href={`/tin-tuc/${article.slug}`}
        className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-neutral-border shadow-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full"
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-gray-100 flex-shrink-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-lg">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 text-xs text-text-secondary mb-3">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(article.date)}
          </div>

          <h3 className="font-bold text-text-primary leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>

          <p className="text-sm text-text-secondary line-clamp-3 flex-1 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-1 mt-4 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
            Xem thêm <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
