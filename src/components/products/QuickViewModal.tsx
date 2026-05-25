"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Phone } from "lucide-react";
import { Product } from "@/data/products";

interface Props {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: Props) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [product]);

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-neutral-border">
                <span className="text-xs font-semibold text-primary bg-primary-50 px-3 py-1 rounded-full">
                  {product.categoryGroup}
                </span>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-xl bg-neutral-light hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Đóng"
                >
                  <X className="w-4 h-4 text-text-secondary" />
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 p-6">
                {/* Image */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-light">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col">
                  <span className="text-xs text-text-secondary mb-1">{product.category}</span>
                  <h3 className="font-bold text-text-primary text-lg leading-snug mb-3">
                    {product.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
                    {product.shortDesc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-text-secondary px-2.5 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2.5">
                    <Link
                      href={`/san-pham/${product.slug}`}
                      onClick={onClose}
                      className="btn-primary w-full justify-center text-sm"
                    >
                      Xem chi tiết
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/bao-gia"
                      onClick={onClose}
                      className="btn-outline w-full justify-center text-sm"
                    >
                      Nhận báo giá
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
