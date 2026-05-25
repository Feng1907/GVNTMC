"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

interface Props {
  product: Product;
  index: number;
  onQuickView: (p: Product) => void;
}

export default function ProductCard({ product, index, onQuickView }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="flex flex-col h-full bg-white rounded-2xl border border-neutral-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        {/* Image area */}
        <div className="relative aspect-square bg-neutral-light overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Featured badge */}
          {product.featured && (
            <div className="absolute top-3 left-3 bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-lg">
              Nổi bật
            </div>
          )}

          {/* Quick View overlay */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-end justify-center pb-4">
            <button
              onClick={() => onQuickView(product)}
              className="flex items-center gap-1.5 bg-white text-primary font-semibold text-xs px-4 py-2 rounded-full shadow-md
                         translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                         transition-all duration-300 hover:bg-primary hover:text-white"
            >
              <Eye className="w-3.5 h-3.5" />
              QUICK VIEW
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4">
          {/* Category badge */}
          <span className="text-[10px] font-semibold text-primary-500 uppercase tracking-wider mb-2">
            {product.category}
          </span>

          {/* Name */}
          <h3 className="font-semibold text-text-primary text-sm leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200 flex-1">
            {product.name}
          </h3>

          {/* Footer row */}
          <div className="flex items-center justify-between pt-3 border-t border-neutral-border mt-auto">
            <span className="text-xs font-medium text-accent bg-orange-50 px-2.5 py-1 rounded-lg">
              Liên hệ báo giá
            </span>
            <Link
              href={`/san-pham/${product.slug}`}
              className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-700 transition-colors group/link"
              aria-label={`Xem chi tiết ${product.name}`}
            >
              Chi tiết
              <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
