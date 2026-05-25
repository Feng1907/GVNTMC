import type { Metadata } from "next";
import ProductsPageClient from "./ProductsPageClient";

export const metadata: Metadata = {
  title: "Sản phẩm GVN - Thiết bị CNTT, thiết bị công trình và phần mềm doanh nghiệp",
  description:
    "Danh mục sản phẩm GVN gồm thiết bị CNTT, linh kiện máy tính, UPS, thiết bị công trình, thiết bị ngân hàng và phần mềm doanh nghiệp cho khách hàng tại Việt Nam.",
  openGraph: {
    title: "Sản phẩm GVN - Thiết bị CNTT & Phần mềm doanh nghiệp",
    description:
      "Danh mục sản phẩm GVN: thiết bị CNTT, linh kiện, UPS, thiết bị ngân hàng và phần mềm chính hãng.",
    type: "website",
  },
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
