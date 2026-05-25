"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ChevronRight,
  ArrowLeft,
  Tag,
  Facebook,
  Linkedin,
  Link as LinkIcon,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { NewsArticle, newsArticles, NewsSection } from "@/data/news";
import NewsSidebar from "@/components/news/NewsSidebar";
import NewsCard from "@/components/news/NewsCard";
import NewsCTASection from "@/components/news/NewsCTASection";
import { formatDate } from "@/components/news/NewsCard";

interface Props {
  article: NewsArticle;
}

function renderSection(section: NewsSection, i: number) {
  switch (section.type) {
    case "heading2":
      return (
        <h2 key={i} className="text-xl font-bold text-text-primary mt-8 mb-3">
          {section.text}
        </h2>
      );
    case "heading3":
      return (
        <h3 key={i} className="text-lg font-bold text-text-primary mt-6 mb-2">
          {section.text}
        </h3>
      );
    case "paragraph":
      return (
        <p key={i} className="text-text-secondary leading-[1.85] text-[1.02rem]">
          {section.text}
        </p>
      );
    case "list":
      return (
        <ul key={i} className="space-y-2">
          {section.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-2.5 text-text-secondary">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "cta":
      return (
        <div key={i} className="bg-primary-50 border-l-4 border-primary rounded-r-2xl p-5 mt-6">
          <p className="text-primary font-semibold leading-relaxed">{section.text}</p>
          <Link href="/bao-gia" className="btn-primary mt-4 text-sm">
            Nhận báo giá <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      );
    default:
      return null;
  }
}

export default function NewsDetailClient({ article }: Props) {
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(article.category);

  const related = newsArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 2);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-28 pb-10 border-b border-neutral-border">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/tin-tuc" className="hover:text-primary transition-colors">Tin tức</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-text-primary font-medium line-clamp-1">{article.title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="badge mb-5">{article.category}</span>
            <h1 className="text-2xl md:text-3xl font-bold text-text-primary leading-snug mb-5">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(article.date)}
              </span>
              <span className="text-neutral-border">•</span>
              <span>{article.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10">
            {/* Article */}
            <article>
              {/* Hero image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative aspect-video rounded-2xl overflow-hidden mb-8"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Excerpt */}
              <div className="bg-white border-l-4 border-primary rounded-r-2xl p-5 mb-8">
                <p className="text-text-secondary italic leading-relaxed">{article.excerpt}</p>
              </div>

              {/* Content sections */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-white rounded-2xl border border-neutral-border p-6 md:p-8 space-y-5"
              >
                {article.content.map((section, i) => renderSection(section, i))}
              </motion.div>

              {/* Tags */}
              <div className="mt-8 flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-text-secondary" />
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white border border-neutral-border text-text-secondary text-sm px-3 py-1 rounded-full hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="mt-6 flex items-center gap-3">
                <span className="text-sm font-semibold text-text-secondary">Chia sẻ:</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Chia sẻ Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Chia sẻ LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <button
                  onClick={handleCopy}
                  className="w-8 h-8 rounded-full bg-gray-100 text-text-secondary flex items-center justify-center hover:bg-gray-200 transition-colors"
                  aria-label="Sao chép link"
                  title={copied ? "Đã sao chép!" : "Sao chép link"}
                >
                  <LinkIcon className="w-4 h-4" />
                </button>
                {copied && (
                  <span className="text-xs text-green-600 font-medium">Đã sao chép!</span>
                )}
              </div>

              {/* Back */}
              <Link
                href="/tin-tuc"
                className="inline-flex items-center gap-2 mt-8 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Quay lại danh sách tin tức
              </Link>

              {/* Related */}
              {related.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <h2 className="text-xl font-bold text-text-primary mb-6">Bài viết liên quan</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {related.map((a, i) => (
                      <NewsCard key={a.id} article={a} index={i} />
                    ))}
                  </div>
                </motion.div>
              )}
            </article>

            {/* Sidebar */}
            <NewsSidebar
              searchQuery={searchQuery}
              onSearch={setSearchQuery}
              activeCategory={activeCategory}
              onCategory={setActiveCategory}
            />
          </div>
        </div>
      </section>

      <NewsCTASection />
    </>
  );
}
