"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { newsArticles } from "@/data/news";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  type: "product" | "service" | "news";
  title: string;
  desc: string;
  href: string;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setResults([]);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const found: SearchResult[] = [];

    products
      .filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
      .slice(0, 3)
      .forEach((p) => {
        found.push({ type: "product", title: p.name, desc: p.category, href: `/san-pham/${p.slug}` });
      });

    services
      .filter((s) => s.title.toLowerCase().includes(q) || s.shortDesc.toLowerCase().includes(q))
      .slice(0, 2)
      .forEach((s) => {
        found.push({ type: "service", title: s.title, desc: s.shortDesc, href: `/dich-vu/${s.slug}` });
      });

    newsArticles
      .filter((n) => n.title.toLowerCase().includes(q) || n.excerpt.toLowerCase().includes(q))
      .slice(0, 2)
      .forEach((n) => {
        found.push({ type: "news", title: n.title, desc: n.excerpt, href: `/tin-tuc/${n.slug}` });
      });

    setResults(found);
  }, [query]);

  const typeLabel = { product: "Sản phẩm", service: "Dịch vụ", news: "Tin tức" };
  const typeColor = {
    product: "bg-blue-50 text-blue-700",
    service: "bg-orange-50 text-orange-700",
    news: "bg-green-50 text-green-700",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
              <Search className="w-5 h-5 text-text-secondary flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm kiếm sản phẩm, dịch vụ, tin tức..."
                className="flex-1 text-base text-text-primary placeholder:text-text-light focus:outline-none"
              />
              <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                <X className="w-5 h-5 text-text-secondary" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {query && results.length === 0 && (
                <div className="py-12 text-center text-text-secondary">
                  <Search className="w-12 h-12 mx-auto mb-3 text-gray-200" />
                  <p>Không tìm thấy kết quả cho &quot;<strong>{query}</strong>&quot;</p>
                </div>
              )}

              {results.length > 0 && (
                <div className="p-3">
                  {results.map((result, i) => (
                    <Link
                      key={i}
                      href={result.href}
                      onClick={onClose}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <span className={`text-xs font-semibold px-2 py-1 rounded-lg flex-shrink-0 mt-0.5 ${typeColor[result.type]}`}>
                        {typeLabel[result.type]}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-text-primary line-clamp-1 group-hover:text-primary transition-colors">
                          {result.title}
                        </p>
                        <p className="text-xs text-text-secondary line-clamp-1 mt-0.5">{result.desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-text-light flex-shrink-0 mt-1 group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              )}

              {!query && (
                <div className="p-5">
                  <p className="text-sm font-semibold text-text-secondary mb-3">Tìm kiếm phổ biến</p>
                  <div className="flex flex-wrap gap-2">
                    {["Synology NAS", "Camera Hikvision", "Server Dell", "Cisco Switch", "IT Outsourcing", "Bảo trì CNTT"].map((kw) => (
                      <button
                        key={kw}
                        onClick={() => setQuery(kw)}
                        className="px-3 py-1.5 bg-gray-100 hover:bg-primary-50 hover:text-primary text-sm text-text-secondary rounded-lg transition-colors"
                      >
                        {kw}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
