"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://placehold.co/800x560/1B4FBF/FFFFFF?text=Thi+công+hệ+thống+mạng",
    alt: "Đội ngũ kỹ thuật thi công hệ thống mạng tại công trình",
  },
  {
    src: "https://placehold.co/800x560/0F3A8F/FFFFFF?text=Lắp+đặt+Camera+CCTV",
    alt: "Lắp đặt hệ thống camera quan sát CCTV cho doanh nghiệp",
  },
  {
    src: "https://placehold.co/800x560/2563EB/FFFFFF?text=Hạ+tầng+Server+Room",
    alt: "Triển khai hạ tầng phòng máy chủ cho ngân hàng",
  },
];

export default function AboutGallery() {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="container-custom">
        {/* Desktop: 3-col grid | Mobile: stacked */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 aspect-[4/3]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
