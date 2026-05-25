"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Filter } from "lucide-react";
import { projects, projectCategories } from "@/data/projects";
import CTASection from "@/components/CTASection";
import clsx from "clsx";

export default function ProjectsPageClient() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filtered = useMemo(() => {
    return activeCategory === "Tất cả" ? projects : projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white pt-32 pb-16">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <div className="badge bg-white/10 border border-white/20 text-white mb-6">Dự án</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Công trình chúng tôi<br /><span className="text-accent">đã thực hiện</span>
            </h1>
            <p className="text-white/75 text-xl leading-relaxed">
              200+ dự án CNTT hoàn thành thành công cho các tập đoàn lớn trong và ngoài nước.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-neutral-border sticky top-16 z-30">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-text-secondary" />
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                  activeCategory === cat ? "bg-primary text-white shadow-sm" : "bg-gray-100 text-text-secondary hover:bg-gray-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <div className="card group h-full flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-white/90 text-primary text-xs font-bold px-2.5 py-1 rounded-lg">
                      {project.category}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-primary/90 text-white text-xs px-2 py-1 rounded-lg">
                      {project.year}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3 text-xs text-text-secondary">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </div>
                    <h2 className="font-bold text-text-primary text-base leading-snug mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-text-secondary text-sm line-clamp-2 flex-1">{project.shortDesc}</p>

                    <div className="mt-4 pt-4 border-t border-neutral-border flex items-center justify-between">
                      <span className="text-sm text-text-secondary font-medium">{project.client}</span>
                      <Link
                        href={`/du-an/${project.slug}`}
                        className="flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all"
                      >
                        Xem chi tiết <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
