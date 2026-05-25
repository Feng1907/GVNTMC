"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PackageSearch } from "lucide-react";
import { products, Product } from "@/data/products";
import ProductSidebar from "@/components/products/ProductSidebar";
import ProductToolbar from "@/components/products/ProductToolbar";
import ProductCard from "@/components/products/ProductCard";
import QuickViewModal from "@/components/products/QuickViewModal";
import ProductPagination from "@/components/products/ProductPagination";
import ProductCTASection from "@/components/products/ProductCTASection";
import ProductBreadcrumb from "@/components/products/ProductBreadcrumb";

const PER_PAGE = 9;
type SortOption = "default" | "name-asc" | "name-desc" | "newest";

export default function ProductsPageClient() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState<SortOption>("default");
  const [page, setPage] = useState(1);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  }, []);

  const handleSearchChange = useCallback((q: string) => {
    setSearchQuery(q);
    setPage(1);
  }, []);

  const handleSortChange = useCallback((s: SortOption) => {
    setSort(s);
    setPage(1);
  }, []);

  // Filter
  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchCat =
        activeCategory === "Tất cả" ||
        p.category === activeCategory ||
        p.categoryGroup === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });

    // Sort
    switch (sort) {
      case "name-asc":
        list = [...list].sort((a, b) => a.name.localeCompare(b.name, "vi"));
        break;
      case "name-desc":
        list = [...list].sort((a, b) => b.name.localeCompare(a.name, "vi"));
        break;
      case "newest":
        list = [...list].sort((a, b) => Number(b.id) - Number(a.id));
        break;
    }

    return list;
  }, [activeCategory, searchQuery, sort]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-hero overflow-hidden pt-28 pb-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Thiết bị chính hãng
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Sản phẩm &amp; <span className="text-accent">Thiết bị CNTT</span>
              </h1>
              <p className="text-white/70 leading-relaxed text-lg">
                Thiết bị CNTT, linh kiện, UPS, thiết bị ngân hàng và phần mềm doanh nghiệp chính hãng — bảo hành đầy đủ.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-6 md:gap-8 flex-shrink-0"
            >
              {[
                { value: products.length + "+", label: "Sản phẩm" },
                { value: "10+", label: "Thương hiệu" },
                { value: "100%", label: "Chính hãng" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-white/60 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 0C1440 0 1080 40 720 40C360 40 0 0 0 0L0 40Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Breadcrumb */}
      <ProductBreadcrumb crumbs={[{ label: "Sản phẩm" }]} />

      {/* Mobile sidebar drawer */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 left-0 w-80 z-50 overflow-y-auto lg:hidden"
            >
              <ProductSidebar
                activeCategory={activeCategory}
                searchQuery={searchQuery}
                onCategoryChange={handleCategoryChange}
                onSearchChange={handleSearchChange}
                onClose={() => setSidebarOpen(false)}
                isMobile
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="flex gap-7 items-start">
            {/* Desktop sidebar */}
            <div className="hidden lg:block w-64 flex-shrink-0 sticky top-24">
              <ProductSidebar
                activeCategory={activeCategory}
                searchQuery={searchQuery}
                onCategoryChange={handleCategoryChange}
                onSearchChange={handleSearchChange}
              />
            </div>

            {/* Right — grid */}
            <div className="flex-1 min-w-0">
              <ProductToolbar
                total={filtered.length}
                page={page}
                perPage={PER_PAGE}
                sort={sort}
                onSortChange={handleSortChange}
                onOpenFilter={() => setSidebarOpen(true)}
              />

              {paginated.length === 0 ? (
                <div className="text-center py-24 bg-white rounded-2xl border border-neutral-border">
                  <PackageSearch className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                  <p className="text-text-primary font-semibold text-lg mb-2">
                    Không tìm thấy sản phẩm phù hợp
                  </p>
                  <p className="text-text-secondary text-sm mb-6">
                    Thử thay đổi từ khóa hoặc danh mục tìm kiếm.
                  </p>
                  <button
                    onClick={() => {
                      handleCategoryChange("Tất cả");
                      handleSearchChange("");
                    }}
                    className="btn-primary"
                  >
                    Xóa bộ lọc
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {paginated.map((product, i) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={i}
                      onQuickView={setQuickViewProduct}
                    />
                  ))}
                </div>
              )}

              {/* Pagination */}
              <ProductPagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={(p) => {
                  setPage(p);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <ProductCTASection />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  );
}
