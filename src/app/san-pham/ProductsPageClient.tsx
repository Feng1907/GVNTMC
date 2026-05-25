"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, Tag, Filter, ArrowRight } from "lucide-react";
import { products, productCategories } from "@/data/products";
import clsx from "clsx";

export default function ProductsPageClient() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = activeCategory === "Tất cả" || p.category === activeCategory;
      const matchSearch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white pt-32 pb-16">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <div className="badge bg-white/10 border border-white/20 text-white mb-6">Sản phẩm</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thiết bị CNTT<br /><span className="text-accent">chính hãng</span>
            </h1>
            <p className="text-white/75 text-xl leading-relaxed">
              Phân phối chính hãng thiết bị CNTT từ các thương hiệu hàng đầu thế giới với giá cạnh tranh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-white border-b border-neutral-border sticky top-16 z-30 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full md:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm sản phẩm..."
                className="input-field pl-9 py-2 text-sm"
              />
            </div>

            {/* Category filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-text-secondary flex-shrink-0" />
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={clsx(
                    "px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200",
                    activeCategory === cat
                      ? "bg-primary text-white shadow-sm"
                      : "bg-gray-100 text-text-secondary hover:bg-gray-200"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <p className="text-sm text-text-secondary mb-6">
            Hiển thị <strong>{filtered.length}</strong> sản phẩm
            {activeCategory !== "Tất cả" && ` trong danh mục "${activeCategory}"`}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-200 mx-auto mb-4" />
              <p className="text-text-secondary text-lg">Không tìm thấy sản phẩm phù hợp</p>
              <button onClick={() => { setSearchQuery(""); setActiveCategory("Tất cả"); }} className="mt-4 btn-primary">
                Xóa bộ lọc
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
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
                        <div className="absolute top-2 left-2 bg-accent text-white text-xs font-bold px-2 py-0.5 rounded-lg">
                          Nổi bật
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-primary bg-primary-50 px-2 py-0.5 rounded-lg">{product.brand}</span>
                        <span className="text-xs text-text-secondary">{product.category}</span>
                      </div>

                      <h3 className="font-bold text-text-primary text-sm leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-text-secondary line-clamp-2 mb-4 flex-1">{product.shortDesc}</p>

                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-neutral-border">
                        <div className="flex items-center gap-1 text-accent font-bold text-sm">
                          <Tag className="w-3.5 h-3.5" />
                          {product.price}
                        </div>
                        <Link
                          href={`/san-pham/${product.slug}`}
                          className="text-xs font-semibold text-primary hover:text-primary-700 flex items-center gap-1 transition-colors"
                        >
                          Chi tiết <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
