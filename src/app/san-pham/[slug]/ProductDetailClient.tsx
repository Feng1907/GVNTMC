"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, CheckCircle2, Tag } from "lucide-react";
import { Product, products } from "@/data/products";
import ProductBreadcrumb from "@/components/products/ProductBreadcrumb";
import ProductCTASection from "@/components/products/ProductCTASection";
import ProductCard from "@/components/products/ProductCard";
import QuickViewModal from "@/components/products/QuickViewModal";

interface Props {
  product: Product;
}

const TABS = ["Mô tả", "Thông số kỹ thuật"] as const;
type Tab = (typeof TABS)[number];

export default function ProductDetailClient({ product }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("Mô tả");
  const [quickView, setQuickView] = useState<Product | null>(null);

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-16">
        <ProductBreadcrumb
          crumbs={[
            { label: "Sản phẩm", href: "/san-pham" },
            { label: product.name },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left — image */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-light border border-neutral-border"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {product.featured && (
                <div className="absolute top-4 left-4 bg-accent text-white font-bold px-3 py-1 rounded-xl text-sm">
                  Sản phẩm nổi bật
                </div>
              )}
            </motion.div>

            {/* Right — info */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-bold text-primary bg-primary-50 px-3 py-1 rounded-full">
                  {product.brand}
                </span>
                <span className="text-xs text-text-secondary bg-neutral-light px-3 py-1 rounded-full border border-neutral-border">
                  {product.category}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-text-primary leading-snug mb-4">
                {product.name}
              </h1>

              <p className="text-text-secondary leading-relaxed mb-5">{product.shortDesc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-text-secondary text-xs px-2.5 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Price + CTA card */}
              <div className="bg-neutral-light rounded-2xl p-6 space-y-4 border border-neutral-border mb-5">
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-accent" />
                  <span className="text-lg font-bold text-accent">Liên hệ báo giá</span>
                </div>
                <p className="text-sm text-text-secondary">
                  Liên hệ để nhận báo giá tốt nhất và tư vấn sản phẩm phù hợp với nhu cầu doanh nghiệp.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/bao-gia" className="btn-accent flex-1 justify-center">
                    Nhận báo giá
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/lien-he" className="btn-outline flex-1 justify-center">
                    <Phone className="w-4 h-4" />
                    Liên hệ tư vấn
                  </Link>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Shield, text: "Hàng chính hãng 100%" },
                  { icon: CheckCircle2, text: "Bảo hành theo NSX" },
                  { icon: CheckCircle2, text: "Hỗ trợ kỹ thuật sau bán hàng" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 text-sm text-text-secondary">
                    <Icon className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Tab headers */}
            <div className="flex gap-1 border-b border-neutral-border mb-7">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3 text-sm font-semibold transition-all duration-200 border-b-2 -mb-px ${
                    activeTab === tab
                      ? "text-primary border-primary"
                      : "text-text-secondary border-transparent hover:text-text-primary"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            {activeTab === "Mô tả" && (
              <div className="max-w-3xl">
                <p className="text-text-secondary leading-[1.9] text-[1.05rem]">
                  {product.description}
                </p>
              </div>
            )}

            {activeTab === "Thông số kỹ thuật" && (
              <div className="max-w-2xl overflow-hidden rounded-2xl border border-neutral-border">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr
                        key={spec.label}
                        className={i % 2 === 0 ? "bg-white" : "bg-neutral-light"}
                      >
                        <td className="px-5 py-3.5 font-semibold text-text-primary w-2/5 border-r border-neutral-border">
                          {spec.label}
                        </td>
                        <td className="px-5 py-3.5 text-text-secondary">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>

          {/* Related products */}
          {related.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold text-text-primary mb-7">Sản phẩm liên quan</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((p, i) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    index={i}
                    onQuickView={setQuickView}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <ProductCTASection />

      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </>
  );
}
