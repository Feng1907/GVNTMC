"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { useLanguage } from "@/context/LanguageContext";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialSlider() {
  const { t, language } = useLanguage();

  return (
    <section className="section-padding bg-gradient-primary relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4"
          >
            {t.testimonials.badge}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {t.testimonials.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto"
          >
            {t.testimonials.subtitle}
          </motion.p>
        </div>

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
            autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              1024: { slidesPerView: 2 },
            }}
            className="pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-8 h-full">
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-accent mb-5 flex-shrink-0" />

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-white/85 leading-relaxed mb-8 italic">
                    &ldquo;{language === "en" && testimonial.quoteEn ? testimonial.quoteEn : testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-white/60">{testimonial.title}</p>
                      <p className="text-sm text-accent font-medium">{testimonial.company}</p>
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
