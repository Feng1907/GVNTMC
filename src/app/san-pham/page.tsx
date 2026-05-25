import type { Metadata } from "next";
import ProductsPageClient from "./ProductsPageClient";

export const metadata: Metadata = {
  title: "Sản phẩm CNTT chính hãng – GVN | Synology, Cisco, Dell, Hikvision",
  description:
    "Phân phối chính hãng thiết bị CNTT: ổ cứng Synology, camera Hikvision, switch Cisco, máy chủ Dell, UPS APC. Giá cạnh tranh, bảo hành chính hãng.",
  openGraph: {
    title: "Sản phẩm CNTT chính hãng – GVN",
    description: "Thiết bị CNTT chính hãng từ các thương hiệu hàng đầu thế giới.",
    type: "website",
  },
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
