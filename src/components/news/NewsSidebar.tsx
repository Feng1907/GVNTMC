"use client";

import Link from "next/link";
import { Search, ArrowRight, X } from "lucide-react";
import { newsArticles, NEWS_CATEGORIES } from "@/data/news";
import { formatDate } from "./NewsCard";

interface Props {
  searchQuery: string;
  onSearch: (q: string) => void;
  activeCategory: string;
  onCategory: (c: string) => void;
}

export default function NewsSidebar({ searchQuery, onSearch, activeCategory, onCategory }: Props) {
  const recent = [...newsArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <aside className="space-y-6">
      {/* Search */}
      <div className="bg-white rounded-2xl border border-neutral-border p-5">
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">
          Tìm kiếm
        </h3>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Tìm kiếm bài viết..."
            className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-neutral-border text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
          />
          {searchQuery ? (
            <button
              onClick={() => onSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-primary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary pointer-events-none" />
          )}
        </div>
      </div>

      {/* Recent posts */}
      <div className="bg-white rounded-2xl border border-neutral-border p-5">
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">
          Bài viết mới
        </h3>
        <ul className="divide-y divide-neutral-border">
          {recent.map((article) => (
            <li key={article.id} className="py-3 first:pt-0 last:pb-0">
              <Link
                href={`/tin-tuc/${article.slug}`}
                className="group flex flex-col gap-1"
              >
                <span className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </span>
                <span className="text-xs text-text-secondary">{formatDate(article.date)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl border border-neutral-border p-5">
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">
          Danh mục
        </h3>
        <ul className="space-y-1">
          {NEWS_CATEGORIES.map((cat) => {
            const count =
              cat === "Tất cả"
                ? newsArticles.length
                : newsArticles.filter((a) => a.category === cat).length;
            const isActive = cat === activeCategory;
            return (
              <li key={cat}>
                <button
                  onClick={() => onCategory(cat)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all ${
                    isActive
                      ? "bg-primary text-white font-semibold"
                      : "text-text-secondary hover:bg-neutral-light hover:text-primary"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-gray-100 text-text-secondary"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* CTA */}
      <div className="bg-gradient-primary rounded-2xl p-5 text-white">
        <h3 className="font-bold mb-2">Cần tư vấn giải pháp CNTT?</h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Liên hệ GVN để được tư vấn giải pháp phù hợp với doanh nghiệp của bạn.
        </p>
        <Link href="/bao-gia" className="btn-accent w-full justify-center text-sm">
          Nhận báo giá <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </aside>
  );
}
