export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  location: string;
  year: number;
  image: string;
  shortDesc: string;
  description: string;
  scope: string[];
  results: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "chemtronics-nha-may",
    title: "Thi công hệ thống mạng, camera giám sát, loa cho nhà máy Chemtronics",
    client: "Chemtronics",
    category: "Nhà máy sản xuất",
    location: "KCN Đồng Nai, Việt Nam",
    year: 2023,
    image: "https://placehold.co/800x500/1B4FBF/ffffff?text=Chemtronics+Factory",
    shortDesc: "Triển khai hạ tầng CNTT toàn diện cho nhà máy sản xuất linh kiện điện tử Chemtronics.",
    description:
      "GVN đã hoàn thành dự án thi công hệ thống hạ tầng CNTT toàn diện cho nhà máy sản xuất Chemtronics tại KCN Đồng Nai. Dự án bao gồm hệ thống mạng LAN công nghiệp, camera giám sát an ninh IP và hệ thống loa thông báo (PA system) phục vụ toàn bộ khu vực nhà máy.",
    scope: [
      "Hệ thống mạng LAN/WAN toàn nhà máy",
      "65 camera IP Hikvision 4MP ngoài trời và trong nhà",
      "Hệ thống loa thông báo (PA) 40 loa",
      "Phòng server trung tâm",
      "Hệ thống UPS dự phòng",
    ],
    results: [
      "Hệ thống vận hành ổn định 24/7",
      "Giám sát an ninh toàn diện 100% khu vực",
      "Giảm 60% sự cố mạng so với hệ thống cũ",
      "Tiết kiệm 30% chi phí so với nhà thầu khác",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "busan-office-cntt",
    title: "Thi công hệ thống mạng, camera CCTV, loa cho văn phòng chi nhánh Busan",
    client: "Busan Branch Office",
    category: "Văn phòng",
    location: "TP. Hồ Chí Minh, Việt Nam",
    year: 2023,
    image: "https://placehold.co/800x500/0F3A8F/ffffff?text=Busan+Office",
    shortDesc: "Xây dựng hạ tầng CNTT hiện đại cho văn phòng chi nhánh công ty Hàn Quốc tại HCM.",
    description:
      "GVN triển khai hệ thống hạ tầng CNTT cho văn phòng chi nhánh công ty Busan tại TP. Hồ Chí Minh. Dự án bao gồm thiết kế và thi công hệ thống mạng văn phòng, camera CCTV và hệ thống loa thông báo, đáp ứng tiêu chuẩn của công ty mẹ tại Hàn Quốc.",
    scope: [
      "Hệ thống mạng văn phòng WiFi 6",
      "20 camera IP CCTV",
      "Hệ thống loa văn phòng",
      "Firewall và bảo mật mạng",
      "VPN kết nối về Hàn Quốc",
    ],
    results: [
      "Kết nối ổn định với trụ sở Hàn Quốc",
      "Bảo mật mạng đạt tiêu chuẩn quốc tế",
      "Triển khai đúng tiến độ trong 2 tuần",
      "Khách hàng hài lòng 100%",
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "hyosung-factory",
    title: "Thi công hệ thống mạng, camera CCTV, loa cho nhà máy Hyosung",
    client: "Hyosung",
    category: "Nhà máy sản xuất",
    location: "Đồng Nai, Việt Nam",
    year: 2022,
    image: "https://placehold.co/800x500/1B4FBF/ffffff?text=Hyosung+Factory",
    shortDesc: "Triển khai hạ tầng CNTT quy mô lớn cho tập đoàn Hyosung tại Việt Nam.",
    description:
      "GVN đã hoàn thành dự án lớn thi công hạ tầng CNTT cho nhà máy Hyosung – một trong những tập đoàn công nghiệp hàng đầu Hàn Quốc tại Việt Nam. Dự án đòi hỏi tiêu chuẩn kỹ thuật cao và quy trình triển khai nghiêm ngặt theo yêu cầu của khách hàng.",
    scope: [
      "Hệ thống mạng công nghiệp toàn nhà máy",
      "120 camera IP giám sát an ninh",
      "Hệ thống loa PA 80 điểm",
      "Network Operation Center (NOC)",
      "Hệ thống dự phòng điện UPS",
    ],
    results: [
      "Hệ thống hoạt động 99.9% uptime",
      "Giám sát an ninh toàn diện 24/7",
      "Hoàn thành trước tiến độ 1 tuần",
      "Được Hyosung đánh giá xuất sắc",
    ],
    featured: true,
  },
  {
    id: "4",
    slug: "cj-cau-tre-nha-be",
    title: "Thi công hệ thống mạng, điện và loa – CJ Cầu Tre Nhà Bè",
    client: "CJ",
    category: "Khu công nghiệp",
    location: "Nhà Bè, TP. Hồ Chí Minh",
    year: 2022,
    image: "https://placehold.co/800x500/0F3A8F/ffffff?text=CJ+Cau+Tre",
    shortDesc: "Hệ thống mạng, điện và âm thanh cho khu công nghiệp CJ Cầu Tre tại Nhà Bè.",
    description:
      "Dự án thi công hệ thống hạ tầng CNTT và điện nhẹ cho khu công nghiệp thực phẩm CJ Cầu Tre tại Nhà Bè. GVN đảm nhận toàn bộ phần hạ tầng mạng, hệ thống điện nhẹ và loa thông báo, đáp ứng yêu cầu vận hành của nhà máy thực phẩm theo tiêu chuẩn CJ Hàn Quốc.",
    scope: [
      "Hệ thống mạng LAN toàn khu vực",
      "Hệ thống điện nhẹ (cabling)",
      "Hệ thống loa PA 60 loa",
      "Tích hợp với hệ thống ERP của CJ",
      "Hệ thống access control",
    ],
    results: [
      "Tích hợp thành công với hệ thống CJ Korea",
      "Đạt tiêu chuẩn nhà máy thực phẩm quốc tế",
      "Vận hành ổn định ngay từ ngày đầu",
    ],
    featured: false,
  },
  {
    id: "5",
    slug: "shinhan-bank-server",
    title: "Lắp đặt hệ thống máy chủ và lưu trữ cho Shinhan Bank Vietnam",
    client: "Shinhan Bank Vietnam",
    category: "Ngân hàng",
    location: "Hà Nội & TP. Hồ Chí Minh",
    year: 2023,
    image: "https://placehold.co/800x500/1B4FBF/ffffff?text=Shinhan+Bank+Server",
    shortDesc: "Triển khai hệ thống server và storage cho Shinhan Bank Vietnam đạt tiêu chuẩn ngân hàng.",
    description:
      "GVN hoàn thành dự án lắp đặt và cấu hình hệ thống máy chủ và lưu trữ cho Shinhan Bank Vietnam. Dự án yêu cầu tuân thủ nghiêm ngặt các quy định về bảo mật và độ sẵn sàng cao (HA) của ngành ngân hàng. Hệ thống được thiết kế với khả năng dự phòng hoàn toàn và kế hoạch phục hồi thảm họa (DR).",
    scope: [
      "6 máy chủ Dell PowerEdge R750",
      "Hệ thống lưu trữ SAN dung lượng 100TB",
      "Virtualization platform VMware vSphere",
      "Backup & DR solution",
      "Monitoring & management system",
    ],
    results: [
      "Hệ thống đạt 99.99% uptime",
      "Tuân thủ 100% quy định NHNN",
      "RTO < 4 giờ, RPO < 1 giờ",
      "Khách hàng hài lòng, tái hợp tác năm tiếp theo",
    ],
    featured: true,
  },
  {
    id: "6",
    slug: "keb-hana-bank-camera",
    title: "Triển khai hệ thống camera an ninh cho KEB Hana Bank",
    client: "KEB Hana Bank",
    category: "Ngân hàng",
    location: "TP. Hồ Chí Minh, Việt Nam",
    year: 2022,
    image: "https://placehold.co/800x500/0F3A8F/ffffff?text=KEB+Hana+Bank",
    shortDesc: "Hệ thống camera an ninh IP toàn diện cho các chi nhánh KEB Hana Bank tại Việt Nam.",
    description:
      "GVN triển khai hệ thống camera an ninh IP cho toàn bộ các chi nhánh KEB Hana Bank tại TP. Hồ Chí Minh. Hệ thống đáp ứng yêu cầu bảo mật nghiêm ngặt của ngân hàng, với khả năng giám sát 24/7, lưu trữ video an toàn và tích hợp với hệ thống bảo mật của ngân hàng.",
    scope: [
      "80 camera IP độ phân giải cao tại 5 chi nhánh",
      "NVR và storage lưu trữ 90 ngày",
      "Hệ thống giám sát trung tâm",
      "Tích hợp với hệ thống báo động",
      "Đào tạo nhân viên vận hành",
    ],
    results: [
      "Phủ sóng camera 100% khu vực quan trọng",
      "Lưu trữ video 90 ngày liên tục",
      "Hoàn thành triển khai trong 3 tuần",
      "Đạt tiêu chuẩn bảo mật ngân hàng",
    ],
    featured: false,
  },
];

export const projectCategories = [
  "Tất cả",
  "Nhà máy sản xuất",
  "Văn phòng",
  "Ngân hàng",
  "Khu công nghiệp",
];
