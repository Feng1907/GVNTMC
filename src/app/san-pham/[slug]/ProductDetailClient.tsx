"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Tag, Shield, Phone, ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { Product, products } from "@/data/products";
import CTASection from "@/components/CTASection";

interface Props {
  product: Product;
}

export default function ProductDetailClient({ product }: Props) {
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-neutral-light border-b border-neutral-border pt-24 pb-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-text-secondary">
            <Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/san-pham" className="hover:text-primary transition-colors">Sản phẩm</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-text-primary line-clamp-1">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product detail */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {product.featured && (
                <div className="absolute top-4 left-4 bg-accent text-white font-bold px-3 py-1 rounded-xl text-sm">
                  Sản phẩm nổi bật
                </div>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-bold text-primary bg-primary-50 px-3 py-1 rounded-xl">{product.brand}</span>
                  <span className="text-sm text-text-secondary">{product.category}</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-text-primary leading-snug">{product.name}</h1>
              </div>

              <p className="text-text-secondary leading-relaxed">{product.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-text-secondary text-xs px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="bg-neutral-light rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Tag className="w-5 h-5 text-accent" />
                  <span className="text-2xl font-bold text-accent">{product.price}</span>
                </div>
                <p className="text-sm text-text-secondary">
                  Liên hệ để nhận báo giá tốt nhất và tư vấn sản phẩm phù hợp với nhu cầu của bạn.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/bao-gia" className="btn-accent flex-1 justify-center">
                    Yêu cầu báo giá
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:+842812345678" className="btn-outline flex-1 justify-center">
                    <Phone className="w-4 h-4" />
                    Gọi ngay
                  </a>
                </div>
              </div>

              {/* Trust */}
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Shield, text: "Hàng chính hãng 100%" },
                  { icon: CheckCircle2, text: "Bảo hành theo NSX" },
                  { icon: CheckCircle2, text: "Hỗ trợ kỹ thuật" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-text-secondary">
                    <Icon className="w-4 h-4 text-green-500" />
                    {text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-text-primary mb-6">Thông số kỹ thuật</h2>
            <div className="bg-neutral-light rounded-2xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={spec.label} className={i % 2 === 0 ? "bg-white" : "bg-neutral-light"}>
                      <td className="px-6 py-4 text-sm font-semibold text-text-primary w-1/3">{spec.label}</td>
                      <td className="px-6 py-4 text-sm text-text-secondary">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Related products */}
          {related.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-6">Sản phẩm liên quan</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link key={p.id} href={`/san-pham/${p.slug}`} className="card group overflow-hidden">
                    <div className="relative aspect-[4/3] bg-gray-50">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-bold text-sm text-text-primary group-hover:text-primary transition-colors line-clamp-2">{p.name}</p>
                      <p className="text-xs text-accent font-semibold mt-2">{p.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
