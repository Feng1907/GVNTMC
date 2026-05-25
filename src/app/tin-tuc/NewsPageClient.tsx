"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { newsArticles, NEWS_CATEGORIES } from "@/data/news";
import NewsCard from "@/components/news/NewsCard";
import NewsSidebar from "@/components/news/NewsSidebar";
import NewsCTASection from "@/components/news/NewsCTASection";

const PER_PAGE = 6;

export default function NewsPageClient() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = newsArticles;
    if (activeCategory !== "Tất cả") {
      list = list.filter((a) => a.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    setPage(1);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-hero overflow-hidden pt-28 pb-16">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90 font-medium">Tin tức</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Tin tức & Kiến thức
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Kiến thức &amp; <span className="text-accent">Tin tức CNTT</span>
              </h1>
              <p className="text-white/70 leading-relaxed text-lg">
                Cập nhật giải pháp và thông tin mới nhất về hạ tầng CNTT, bảo trì hệ thống,
                thiết bị công nghệ và thi công công trình cho doanh nghiệp.
              </p>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-6 md:gap-8 flex-shrink-0"
            >
              {[
                { value: newsArticles.length.toString(), label: "Bài viết" },
                { value: NEWS_CATEGORIES.length - 1 + "+", label: "Chủ đề" },
                { value: "100%", label: "Miễn phí" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-white/60 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 0C1440 0 1080 40 720 40C360 40 0 0 0 0L0 40Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10">
            {/* Left — article list */}
            <div>
              {/* Result info */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-text-secondary">
                  Hiển thị{" "}
                  <span className="font-semibold text-text-primary">{filtered.length}</span> bài viết
                  {activeCategory !== "Tất cả" && (
                    <>
                      {" "}trong danh mục{" "}
                      <span className="font-semibold text-primary">{activeCategory}</span>
                    </>
                  )}
                  {searchQuery && (
                    <>
                      {" "}cho từ khóa{" "}
                      <span className="font-semibold text-primary">&ldquo;{searchQuery}&rdquo;</span>
                    </>
                  )}
                </p>
              </div>

              {/* Grid */}
              {paginated.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-6">
                  {paginated.map((article, i) => (
                    <NewsCard key={article.id} article={article} index={i} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-neutral-border p-12 text-center text-text-secondary">
                  Không tìm thấy bài viết phù hợp.
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-10">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => {
                        setPage(p);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`w-9 h-9 rounded-full text-sm font-semibold transition-all ${
                        p === page
                          ? "bg-primary text-white"
                          : "bg-white border border-neutral-border text-text-secondary hover:border-primary hover:text-primary"
                      }`}
                      aria-current={p === page ? "page" : undefined}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right — sidebar */}
            <NewsSidebar
              searchQuery={searchQuery}
              onSearch={handleSearch}
              activeCategory={activeCategory}
              onCategory={handleCategory}
            />
          </div>
        </div>
      </section>

      <NewsCTASection />
    </>
  );
}
