import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function ProjectCTASection() {
  return (
    <section className="section-padding bg-neutral-light">
      <div className="container-custom">
        <div className="bg-gradient-primary rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">
          {/* SVG grid pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>

          <div className="relative max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              Triển khai dự án
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Bạn cần triển khai hạ tầng CNTT cho doanh nghiệp?
            </h2>
            <p className="text-white/70 text-base mb-8 leading-relaxed">
              GVN sẵn sàng khảo sát, tư vấn và triển khai giải pháp phù hợp nhất cho nhà máy, văn phòng
              và các công trình của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/bao-gia" className="btn-accent">
                Yêu cầu báo giá <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/lien-he" className="btn bg-white/10 border border-white/30 text-white hover:bg-white/20">
                <Phone className="w-4 h-4" /> Liên hệ ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
