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
      <section className="bg-gradient-to-b from-slate-50 to-white pt-28 pb-12 border-b border-neutral-border">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-text-primary font-medium">Tin tức</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="badge mb-5">Tin tức & Kiến thức</div>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Tin tức</h1>
            <p className="text-text-secondary leading-relaxed">
              Cập nhật kiến thức, giải pháp và thông tin mới nhất về hạ tầng CNTT, bảo trì hệ
              thống, thiết bị công nghệ và thi công công trình cho doanh nghiệp.
            </p>
          </motion.div>
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
