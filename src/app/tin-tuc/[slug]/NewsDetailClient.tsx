"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ChevronRight, ArrowLeft, Tag } from "lucide-react";
import { NewsArticle, newsArticles } from "@/data/news";
import CTASection from "@/components/CTASection";

interface Props {
  article: NewsArticle;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "long", year: "numeric" });
}

function renderContent(content: string) {
  const lines = content.split("\n").filter((l) => l.trim());
  return lines.map((line, i) => {
    if (line.startsWith("**") && line.endsWith("**")) {
      return <h3 key={i} className="text-xl font-bold text-text-primary mt-6 mb-3">{line.slice(2, -2)}</h3>;
    }
    if (line.startsWith("- ")) {
      return (
        <li key={i} className="flex items-start gap-2 text-text-secondary">
          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
          {line.slice(2)}
        </li>
      );
    }
    return <p key={i} className="text-text-secondary leading-relaxed">{line}</p>;
  });
}

export default function NewsDetailClient({ article }: Props) {
  const related = newsArticles.filter((n) => n.category === article.category && n.id !== article.id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white pt-32 pb-16">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/tin-tuc" className="hover:text-white transition-colors">Tin tức</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white line-clamp-1">{article.category}</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="badge bg-white/10 border border-white/20 text-white mb-6">{article.category}</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
            <div className="flex items-center gap-5 text-white/70 text-sm">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{formatDate(article.date)}</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" />{article.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative aspect-video rounded-2xl overflow-hidden mb-10">
                <Image src={article.image} alt={article.title} fill className="object-cover" priority />
              </motion.div>

              <div className="space-y-4">
                <div className="bg-neutral-light border-l-4 border-primary rounded-r-2xl p-5 mb-6">
                  <p className="text-text-secondary italic leading-relaxed">{article.excerpt}</p>
                </div>
                {renderContent(article.content)}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-neutral-border">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-text-secondary" />
                  {article.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-text-secondary text-sm px-3 py-1 rounded-full">#{tag}</span>
                  ))}
                </div>
              </div>

              <Link href="/tin-tuc" className="flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all">
                <ArrowLeft className="w-4 h-4" />
                Quay lại danh sách tin tức
              </Link>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {related.length > 0 && (
                <div className="card p-6">
                  <h3 className="font-bold text-text-primary mb-4">Bài viết liên quan</h3>
                  <div className="space-y-4">
                    {related.map((n) => (
                      <Link key={n.id} href={`/tin-tuc/${n.slug}`} className="flex gap-3 group">
                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
                          <Image src={n.image} alt={n.title} fill className="object-cover" sizes="80px" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors line-clamp-2">{n.title}</p>
                          <p className="text-xs text-text-secondary mt-1">{formatDate(n.date)}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-gradient-primary rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Cần tư vấn CNTT?</h3>
                <p className="text-white/70 text-sm mb-4">Đội ngũ chuyên gia GVN sẵn sàng hỗ trợ bạn.</p>
                <Link href="/lien-he" className="bg-white text-primary font-semibold text-sm px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors inline-block">
                  Liên hệ ngay
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
