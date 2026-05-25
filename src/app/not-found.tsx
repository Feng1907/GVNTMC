import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center text-white px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold text-accent mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4">Trang không tìm thấy</h1>
        <p className="text-white/70 text-lg mb-8">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-accent">
            <Home className="w-4 h-4" />
            Về trang chủ
          </Link>
          <Link href="/lien-he" className="inline-flex items-center gap-2 text-white border-2 border-white/30 hover:border-white font-semibold px-6 py-3 rounded-xl transition-all">
            <ArrowLeft className="w-4 h-4" />
            Liên hệ hỗ trợ
          </Link>
        </div>
      </div>
    </div>
  );
}
