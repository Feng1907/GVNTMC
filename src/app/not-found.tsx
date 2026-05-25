import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Trang không tìm thấy | GVN",
};

export default function NotFound() {
  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
        }}
      />

      <div className="container-custom relative z-10 text-center py-32">
        <div className="text-[120px] md:text-[180px] font-black text-white/10 leading-none select-none mb-2">
          404
        </div>

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-accent rounded-full" />
          Trang không tìm thấy
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Oops! Trang bạn tìm <span className="text-accent">không tồn tại</span>
        </h1>
        <p className="text-white/70 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          Có thể đường dẫn đã thay đổi hoặc trang đã bị xóa. Hãy quay về trang chủ hoặc khám phá các mục bên dưới.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link href="/" className="btn-accent text-base px-7 py-3.5 inline-flex items-center gap-2">
            <Home className="w-4 h-4" />
            Về trang chủ
          </Link>
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-2 text-white border-2 border-white/30 hover:border-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-base"
          >
            Liên hệ hỗ trợ
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { label: "Dịch vụ", href: "/dich-vu" },
            { label: "Sản phẩm", href: "/san-pham" },
            { label: "Dự án", href: "/du-an" },
            { label: "Tin tức", href: "/tin-tuc" },
            { label: "Báo giá", href: "/bao-gia" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/60 hover:text-white text-sm border border-white/20 hover:border-white/50 px-4 py-2 rounded-lg transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
