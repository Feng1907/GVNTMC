"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Filter } from "lucide-react";
import { newsArticles, newsCategories } from "@/data/news";
import clsx from "clsx";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export default function NewsPageClient() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filtered = useMemo(() => {
    return activeCategory === "Tất cả" ? newsArticles : newsArticles.filter((n) => n.category === activeCategory);
  }, [activeCategory]);

  const featured = newsArticles.find((n) => n.featured);
  const rest = filtered.filter((n) => n.id !== featured?.id);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white pt-32 pb-16">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <div className="badge bg-white/10 border border-white/20 text-white mb-6">Tin tức</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tin tức &<br /><span className="text-accent">Kiến thức CNTT</span>
            </h1>
            <p className="text-white/75 text-xl leading-relaxed">
              Cập nhật tin tức, xu hướng công nghệ và kiến thức CNTT hữu ích cho doanh nghiệp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-neutral-border sticky top-16 z-30">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-text-secondary" />
            {newsCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                  activeCategory === cat ? "bg-primary text-white" : "bg-gray-100 text-text-secondary hover:bg-gray-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          {/* Featured article */}
          {activeCategory === "Tất cả" && featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <Link href={`/tin-tuc/${featured.slug}`} className="card group flex flex-col lg:flex-row overflow-hidden">
                <div className="relative lg:w-1/2 aspect-video lg:aspect-auto">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white text-sm font-bold px-3 py-1 rounded-xl">
                    Nổi bật
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <span className="text-sm font-semibold text-primary bg-primary-50 px-3 py-1 rounded-xl inline-block mb-4 w-fit">
                    {featured.category}
                  </span>
                  <h2 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors line-clamp-3">
                    {featured.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{formatDate(featured.date)}</span>
                    <span className="flex items-center gap-1"><User className="w-4 h-4" />{featured.author}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-4 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Đọc tiếp <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link href={`/tin-tuc/${article.slug}`} className="card group h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold text-primary bg-primary-50 px-2 py-0.5 rounded-lg inline-block mb-3 w-fit">
                      {article.category}
                    </span>
                    <h3 className="font-bold text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-text-secondary text-sm line-clamp-2 flex-1">{article.excerpt}</p>
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-neutral-border text-xs text-text-secondary">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{formatDate(article.date)}</span>
                      <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{article.author}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
