"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowRight, Tag } from "lucide-react";
import { products } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductCarousel() {
  const { t } = useLanguage();
  const swiperRef = useRef<{ swiper: { autoplay: { stop: () => void; start: () => void } } } | null>(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge mb-4"
            >
              {t.products.badge}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title"
            >
              {t.products.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="section-subtitle mt-3"
            >
              {t.products.subtitle}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/san-pham" className="btn-outline whitespace-nowrap">
              {t.products.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="card group h-full flex flex-col border border-transparent hover:border-primary/10">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {product.featured && (
                      <div className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-2 py-1 rounded-lg">
                        Nổi bật
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary-50 px-2 py-0.5 rounded-lg">
                        {product.brand}
                      </span>
                      <span className="text-xs text-text-secondary">{product.category}</span>
                    </div>

                    <h3 className="font-bold text-text-primary text-sm leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-xs text-text-secondary line-clamp-2 mb-4 flex-1">
                      {product.shortDesc}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-1 text-accent font-semibold text-sm">
                        <Tag className="w-3.5 h-3.5" />
                        Liên hệ
                      </div>
                      <Link
                        href={`/san-pham/${product.slug}`}
                        className="text-xs font-semibold text-primary hover:text-primary-700 flex items-center gap-1 transition-colors"
                      >
                        Chi tiết
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
