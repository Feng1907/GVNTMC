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
      {/* Breadcrumb */}
      <div className="pt-16">
        <ProductBreadcrumb crumbs={[{ label: "Sản phẩm" }]} />
      </div>

      {/* Page header */}
      <section className="bg-gradient-to-b from-[#EBF0FB] to-neutral-light py-8 md:py-10">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary">Sản phẩm</h1>
          <p className="text-text-secondary mt-2">
            Thiết bị CNTT, linh kiện, UPS, thiết bị ngân hàng và phần mềm doanh nghiệp chính hãng.
          </p>
        </div>
      </section>

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
