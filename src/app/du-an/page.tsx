import type { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = {
  title: "Dự án tiêu biểu – GVN | Thi công hạ tầng CNTT, Camera, Mạng, Server",
  description:
    "GVN đã hoàn thành 200+ dự án CNTT cho các tập đoàn lớn: Shinhan Bank, Hyosung, KEB Hana Bank, CJ, Chemtronics. Xem các dự án tiêu biểu.",
  openGraph: {
    title: "Dự án tiêu biểu – GVN CNTT",
    description: "200+ dự án hoàn thành cho các tập đoàn lớn trong và ngoài nước.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
