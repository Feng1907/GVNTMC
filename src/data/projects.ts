export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  categories: string[];   // multi-tag, dùng cho filter
  location: string;
  year: number;
  image: string;
  gallery: string[];
  shortDesc: string;
  description: string;
  scope: string[];
  results: string[];
  featured: boolean;
}

export const PROJECT_FILTERS = [
  "Tất cả",
  "Ngân hàng",
  "Nhà máy",
  "Văn phòng",
  "Hệ thống mạng",
  "Camera CCTV",
  "Hệ thống điện",
  "Loa thông báo",
];

export const projects: Project[] = [
  {
    id: "1",
    slug: "shinhan-bank-dien-mang",
    title: "Thi công chuyển địa điểm chi nhánh và xây dựng hệ thống điện, mạng – Chi nhánh ngân hàng Shinhan",
    client: "Shinhan Bank Vietnam",
    categories: ["Ngân hàng", "Hệ thống điện", "Hệ thống mạng"],
    location: "TP. Hồ Chí Minh, Việt Nam",
    year: 2023,
    image: "https://placehold.co/800x600/1B4FBF/ffffff?text=Shinhan+Bank+Branch",
    gallery: [
      "https://placehold.co/800x600/1B4FBF/ffffff?text=Shinhan+Bank+Overview",
      "https://placehold.co/800x600/0F3A8F/ffffff?text=Network+Cabling",
      "https://placehold.co/800x600/2563EB/ffffff?text=Power+System",
      "https://placehold.co/800x600/1B4FBF/ffffff?text=Server+Room",
    ],
    shortDesc: "Triển khai hệ thống điện, mạng và hạ tầng CNTT cho chi nhánh ngân hàng Shinhan.",
    description:
      "GVN thực hiện toàn bộ phần kỹ thuật cho dự án chuyển địa điểm chi nhánh Shinhan Bank Vietnam. Dự án bao gồm thiết kế và thi công hệ thống điện nhẹ, hạ tầng mạng LAN/WAN, phòng máy chủ mini và các hệ thống hỗ trợ vận hành ngân hàng. Tất cả được thực hiện theo tiêu chuẩn bảo mật và độ sẵn sàng cao của ngành ngân hàng.",
    scope: [
      "Khảo sát hiện trạng và tư vấn giải pháp kỹ thuật",
      "Thi công hệ thống điện nhẹ toàn chi nhánh",
      "Thi công hệ thống mạng LAN/WAN",
      "Lắp đặt thiết bị phòng máy chủ",
      "Kiểm tra, nghiệm thu và bàn giao",
    ],
    results: [
      "Hoàn thành đúng tiến độ, không ảnh hưởng hoạt động ngân hàng",
      "Hệ thống đạt tiêu chuẩn bảo mật ngân hàng",
      "Khách hàng hài lòng, tái hợp tác nhiều dự án tiếp theo",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "comet-vina-dien-mang",
    title: "Thi công hệ thống điện và mạng cho nhà máy Comet Vina",
    client: "Comet Vina",
    categories: ["Nhà máy", "Hệ thống điện", "Hệ thống mạng"],
    location: "KCN Long An, Việt Nam",
    year: 2023,
    image: "https://placehold.co/800x600/0F3A8F/ffffff?text=Comet+Vina+Factory",
    gallery: [
      "https://placehold.co/800x600/0F3A8F/ffffff?text=Comet+Vina+Overview",
      "https://placehold.co/800x600/1B4FBF/ffffff?text=Electrical+System",
      "https://placehold.co/800x600/2563EB/ffffff?text=Network+Infrastructure",
    ],
    shortDesc: "Thi công hạ tầng điện và mạng cho khu vực nhà máy, đảm bảo vận hành ổn định.",
    description:
      "GVN triển khai hệ thống điện nhẹ và hạ tầng mạng toàn diện cho nhà máy Comet Vina. Dự án yêu cầu thi công trong điều kiện nhà máy đang vận hành, đảm bảo không gián đoạn sản xuất. GVN đã hoàn thành đúng tiến độ với chất lượng được Comet Vina đánh giá cao.",
    scope: [
      "Khảo sát hiện trạng thực địa",
      "Thi công hệ thống điện nhẹ toàn nhà máy",
      "Thi công hệ thống mạng LAN công nghiệp",
      "Lắp đặt thiết bị mạng: switch, router, access point",
      "Kiểm tra, nghiệm thu và bàn giao",
    ],
    results: [
      "Hệ thống vận hành ổn định từ ngày đầu bàn giao",
      "Không gián đoạn hoạt động sản xuất trong quá trình thi công",
      "Đạt yêu cầu kỹ thuật của khách hàng",
    ],
    featured: false,
  },
  {
    id: "3",
    slug: "chemtronics-mang-camera-loa",
    title: "Thi công hệ thống mạng, camera giám sát, loa cho nhà máy và văn phòng Chemtronics",
    client: "Chemtronics",
    categories: ["Nhà máy", "Văn phòng", "Camera CCTV", "Loa thông báo", "Hệ thống mạng"],
    location: "KCN Đồng Nai, Việt Nam",
    year: 2023,
    image: "https://placehold.co/800x600/1B4FBF/ffffff?text=Chemtronics+Factory",
    gallery: [
      "https://placehold.co/800x600/1B4FBF/ffffff?text=Chemtronics+Overview",
      "https://placehold.co/800x600/0F3A8F/ffffff?text=Network+System",
      "https://placehold.co/800x600/2563EB/ffffff?text=Camera+Install",
      "https://placehold.co/800x600/1B4FBF/ffffff?text=PA+Speaker+System",
    ],
    shortDesc: "Triển khai hệ thống mạng, camera giám sát và loa thông báo cho nhà máy, văn phòng.",
    description:
      "GVN thực hiện thi công tổng thể hệ thống hạ tầng CNTT cho nhà máy và văn phòng Chemtronics. Dự án bao gồm hệ thống mạng LAN công nghiệp, 65 camera IP giám sát an ninh và hệ thống loa PA phủ sóng toàn khu vực nhà máy và văn phòng.",
    scope: [
      "Thi công hệ thống mạng LAN/WAN toàn khu vực",
      "Lắp đặt 65 camera IP Hikvision 4MP",
      "Thi công hệ thống loa PA 40 điểm",
      "Xây dựng phòng server trung tâm",
      "Lắp đặt hệ thống UPS dự phòng",
      "Kiểm tra, nghiệm thu và bàn giao",
    ],
    results: [
      "Hệ thống vận hành ổn định 24/7",
      "Giám sát an ninh toàn diện 100% khu vực",
      "Hoàn thành đúng tiến độ",
    ],
    featured: true,
  },
  {
    id: "4",
    slug: "busan-office-mang-camera-loa",
    title: "Thi công hệ thống mạng, camera giám sát CCTV, loa cho văn phòng chi nhánh Busan",
    client: "Busan Branch Office",
    categories: ["Văn phòng", "Camera CCTV", "Loa thông báo", "Hệ thống mạng"],
    location: "TP. Hồ Chí Minh, Việt Nam",
    year: 2023,
    image: "https://placehold.co/800x600/0F3A8F/ffffff?text=Busan+Office",
    gallery: [
      "https://placehold.co/800x600/0F3A8F/ffffff?text=Busan+Office+Overview",
      "https://placehold.co/800x600/1B4FBF/ffffff?text=WiFi+Setup",
      "https://placehold.co/800x600/2563EB/ffffff?text=Security+Cameras",
    ],
    shortDesc: "Thi công hệ thống mạng, CCTV và loa thông báo cho văn phòng chi nhánh Busan.",
    description:
      "GVN triển khai hệ thống hạ tầng CNTT cho văn phòng chi nhánh công ty Busan tại TP. HCM. Dự án bao gồm hệ thống mạng văn phòng WiFi 6, camera CCTV và loa thông báo, đáp ứng tiêu chuẩn của công ty mẹ tại Hàn Quốc.",
    scope: [
      "Thi công hệ thống mạng văn phòng WiFi 6",
      "Lắp đặt 20 camera IP CCTV",
      "Thi công hệ thống loa văn phòng",
      "Cài đặt firewall và bảo mật mạng",
      "Thiết lập VPN kết nối về Hàn Quốc",
    ],
    results: [
      "Kết nối ổn định với trụ sở Hàn Quốc",
      "Bảo mật mạng đạt tiêu chuẩn quốc tế",
      "Triển khai hoàn thành trong 2 tuần",
    ],
    featured: true,
  },
  {
    id: "5",
    slug: "hyosung-mang-camera-loa",
    title: "Thi công hệ thống mạng, camera giám sát CCTV, loa cho nhà máy và văn phòng Hyosung",
    client: "Hyosung",
    categories: ["Nhà máy", "Văn phòng", "Camera CCTV", "Loa thông báo", "Hệ thống mạng"],
    location: "Đồng Nai, Việt Nam",
    year: 2022,
    image: "https://placehold.co/800x600/2563EB/ffffff?text=Hyosung+Factory",
    gallery: [
      "https://placehold.co/800x600/2563EB/ffffff?text=Hyosung+Overview",
      "https://placehold.co/800x600/0F3A8F/ffffff?text=NOC+Center",
      "https://placehold.co/800x600/1B4FBF/ffffff?text=Camera+System",
      "https://placehold.co/800x600/2563EB/ffffff?text=PA+System",
    ],
    shortDesc: "Lắp đặt hệ thống mạng, camera và loa thông báo cho khu vực nhà máy và văn phòng Hyosung.",
    description:
      "GVN hoàn thành dự án thi công hạ tầng CNTT quy mô lớn cho nhà máy và văn phòng Hyosung — một trong những tập đoàn hàng đầu Hàn Quốc tại Việt Nam. Dự án yêu cầu tiêu chuẩn kỹ thuật cao và quy trình triển khai nghiêm ngặt.",
    scope: [
      "Thi công hệ thống mạng công nghiệp toàn nhà máy",
      "Lắp đặt 120 camera IP giám sát an ninh",
      "Thi công hệ thống loa PA 80 điểm",
      "Xây dựng Network Operation Center (NOC)",
      "Lắp đặt hệ thống dự phòng điện UPS",
    ],
    results: [
      "Hệ thống hoạt động 99.9% uptime",
      "Giám sát an ninh toàn diện 24/7",
      "Hoàn thành trước tiến độ 1 tuần",
    ],
    featured: true,
  },
  {
    id: "6",
    slug: "cj-cau-tre-mang-dien-loa",
    title: "Thi công hệ thống mạng, điện và loa – CJ Cầu Tre Nhà Bè",
    client: "CJ",
    categories: ["Nhà máy", "Hệ thống điện", "Hệ thống mạng", "Loa thông báo"],
    location: "Nhà Bè, TP. Hồ Chí Minh",
    year: 2022,
    image: "https://placehold.co/800x600/0F3A8F/ffffff?text=CJ+Cau+Tre",
    gallery: [
      "https://placehold.co/800x600/0F3A8F/ffffff?text=CJ+Cau+Tre+Overview",
      "https://placehold.co/800x600/1B4FBF/ffffff?text=Network+Infrastructure",
      "https://placehold.co/800x600/2563EB/ffffff?text=PA+System+Install",
    ],
    shortDesc: "Thi công hệ thống mạng, điện nhẹ và loa thông báo cho nhà máy CJ Cầu Tre Nhà Bè.",
    description:
      "GVN đảm nhận toàn bộ phần hạ tầng mạng, hệ thống điện nhẹ và loa thông báo cho khu công nghiệp thực phẩm CJ Cầu Tre tại Nhà Bè. Dự án đáp ứng yêu cầu vận hành của nhà máy thực phẩm theo tiêu chuẩn CJ Hàn Quốc.",
    scope: [
      "Thi công hệ thống mạng LAN toàn khu vực",
      "Thi công hệ thống điện nhẹ (cabling)",
      "Lắp đặt hệ thống loa PA 60 điểm",
      "Tích hợp với hệ thống ERP của CJ",
      "Kiểm tra, nghiệm thu và bàn giao",
    ],
    results: [
      "Tích hợp thành công với hệ thống CJ Korea",
      "Đạt tiêu chuẩn nhà máy thực phẩm quốc tế",
      "Vận hành ổn định ngay từ ngày bàn giao",
    ],
    featured: false,
  },
  {
    id: "7",
    slug: "cj-studio-dien-mang",
    title: "Thi công hệ thống điện và mạng cho nhà máy và văn phòng CJ Studio",
    client: "CJ Studio",
    categories: ["Văn phòng", "Nhà máy", "Hệ thống điện", "Hệ thống mạng"],
    location: "TP. Hồ Chí Minh, Việt Nam",
    year: 2022,
    image: "https://placehold.co/800x600/1B4FBF/ffffff?text=CJ+Studio",
    gallery: [
      "https://placehold.co/800x600/1B4FBF/ffffff?text=CJ+Studio+Overview",
      "https://placehold.co/800x600/0F3A8F/ffffff?text=Electrical+System",
      "https://placehold.co/800x600/2563EB/ffffff?text=Network+Setup",
    ],
    shortDesc: "Triển khai hạ tầng điện và mạng cho nhà máy, văn phòng CJ Studio.",
    description:
      "GVN triển khai hệ thống điện nhẹ và hạ tầng mạng cho nhà máy và văn phòng CJ Studio. Dự án yêu cầu phối hợp chặt chẽ với đơn vị nội thất và xây dựng để đảm bảo thi công đồng bộ, đúng tiến độ chung của dự án.",
    scope: [
      "Thiết kế và thi công hệ thống điện nhẹ",
      "Thi công hệ thống mạng LAN/WAN",
      "Lắp đặt thiết bị mạng và kết nối internet",
      "Kiểm tra, nghiệm thu và bàn giao",
    ],
    results: [
      "Hoàn thành đúng tiến độ dự án tổng thể",
      "Hệ thống vận hành ổn định",
      "Được CJ Studio đánh giá tốt",
    ],
    featured: false,
  },
  {
    id: "8",
    slug: "cj-mill-mang-camera-loa",
    title: "Thi công hệ thống mạng, camera giám sát CCTV và loa cho nhà máy và văn phòng CJ Mill",
    client: "CJ Mill",
    categories: ["Nhà máy", "Văn phòng", "Camera CCTV", "Loa thông báo", "Hệ thống mạng"],
    location: "Long An, Việt Nam",
    year: 2021,
    image: "https://placehold.co/800x600/0F3A8F/ffffff?text=CJ+Mill+Factory",
    gallery: [
      "https://placehold.co/800x600/0F3A8F/ffffff?text=CJ+Mill+Overview",
      "https://placehold.co/800x600/1B4FBF/ffffff?text=Network+System",
      "https://placehold.co/800x600/2563EB/ffffff?text=CCTV+System",
    ],
    shortDesc: "Lắp đặt hệ thống mạng, camera CCTV và loa thông báo cho khu vực nhà máy CJ Mill.",
    description:
      "GVN thực hiện thi công hệ thống mạng, camera CCTV và loa PA cho nhà máy và văn phòng CJ Mill tại Long An. Dự án được triển khai theo tiêu chuẩn kỹ thuật của tập đoàn CJ, đảm bảo tính đồng bộ với các chi nhánh khác.",
    scope: [
      "Thi công hệ thống mạng LAN công nghiệp",
      "Lắp đặt camera CCTV IP toàn khu vực",
      "Thi công hệ thống loa PA thông báo",
      "Kiểm tra, nghiệm thu và bàn giao",
    ],
    results: [
      "Hệ thống đồng bộ với tiêu chuẩn CJ Group",
      "Vận hành ổn định sau bàn giao",
    ],
    featured: false,
  },
  {
    id: "9",
    slug: "cj-mill-dien",
    title: "Thi công hệ thống điện nhà máy và văn phòng CJ Mill",
    client: "CJ Mill",
    categories: ["Nhà máy", "Văn phòng", "Hệ thống điện"],
    location: "Long An, Việt Nam",
    year: 2021,
    image: "https://placehold.co/800x600/2563EB/ffffff?text=CJ+Mill+Electrical",
    gallery: [
      "https://placehold.co/800x600/2563EB/ffffff?text=CJ+Mill+Electrical+Overview",
      "https://placehold.co/800x600/1B4FBF/ffffff?text=Power+System",
    ],
    shortDesc: "Thi công hệ thống điện cho khu vực nhà máy và văn phòng CJ Mill.",
    description:
      "GVN thi công hệ thống điện nhẹ toàn diện cho nhà máy và văn phòng CJ Mill. Dự án bao gồm thiết kế và lắp đặt hệ thống cáp điện, tủ phân phối và các hạng mục điện nhẹ đảm bảo an toàn và hiệu quả vận hành.",
    scope: [
      "Thiết kế hệ thống điện nhẹ",
      "Thi công cabling điện toàn khu vực",
      "Lắp đặt tủ phân phối điện",
      "Kiểm tra, nghiệm thu và bàn giao",
    ],
    results: [
      "Hệ thống điện đạt tiêu chuẩn an toàn",
      "Hoàn thành đúng tiến độ dự án",
    ],
    featured: false,
  },
  {
    id: "10",
    slug: "cj-long-an-dien",
    title: "Thi công hệ thống điện cho nhà máy và văn phòng CJ Long An",
    client: "CJ Long An",
    categories: ["Nhà máy", "Văn phòng", "Hệ thống điện"],
    location: "Long An, Việt Nam",
    year: 2021,
    image: "https://placehold.co/800x600/1B4FBF/ffffff?text=CJ+Long+An",
    gallery: [
      "https://placehold.co/800x600/1B4FBF/ffffff?text=CJ+Long+An+Overview",
      "https://placehold.co/800x600/0F3A8F/ffffff?text=Electrical+Work",
    ],
    shortDesc: "Triển khai hệ thống điện cho nhà máy và văn phòng CJ Long An.",
    description:
      "GVN thực hiện thi công hệ thống điện nhẹ cho nhà máy và văn phòng CJ Long An. Dự án là một phần trong chuỗi dự án hợp tác dài hạn giữa GVN và tập đoàn CJ tại Việt Nam.",
    scope: [
      "Thiết kế và thi công hệ thống điện nhẹ",
      "Lắp đặt tủ điện và cáp ngầm",
      "Kiểm tra an toàn điện",
      "Nghiệm thu và bàn giao",
    ],
    results: [
      "Đảm bảo an toàn điện theo tiêu chuẩn CJ",
      "Hoàn thành đúng kế hoạch",
    ],
    featured: false,
  },
  {
    id: "11",
    slug: "hana-bank-ha-tang",
    title: "Hana Bank – Triển khai hạ tầng CNTT và hệ thống kỹ thuật",
    client: "KEB Hana Bank Vietnam",
    categories: ["Ngân hàng", "Hệ thống mạng", "Hệ thống điện"],
    location: "TP. Hồ Chí Minh, Việt Nam",
    year: 2022,
    image: "https://placehold.co/800x600/0F3A8F/ffffff?text=Hana+Bank",
    gallery: [
      "https://placehold.co/800x600/0F3A8F/ffffff?text=Hana+Bank+Overview",
      "https://placehold.co/800x600/1B4FBF/ffffff?text=IT+Infrastructure",
      "https://placehold.co/800x600/2563EB/ffffff?text=Network+Setup",
      "https://placehold.co/800x600/0F3A8F/ffffff?text=Server+Room",
    ],
    shortDesc: "Triển khai hạ tầng CNTT và hệ thống kỹ thuật cho Hana Bank.",
    description:
      "GVN thực hiện triển khai hạ tầng CNTT và các hệ thống kỹ thuật cho KEB Hana Bank Vietnam. Dự án bao gồm hệ thống mạng, điện nhẹ và các hạ tầng kỹ thuật hỗ trợ hoạt động ngân hàng, đáp ứng tiêu chuẩn nghiêm ngặt của ngành tài chính.",
    scope: [
      "Thi công hệ thống mạng ngân hàng",
      "Thi công hệ thống điện nhẹ",
      "Lắp đặt thiết bị phòng máy chủ",
      "Bảo mật và kiểm soát truy cập",
      "Nghiệm thu và bàn giao",
    ],
    results: [
      "Hệ thống đạt tiêu chuẩn ngân hàng quốc tế",
      "Vận hành ổn định từ ngày đầu",
      "Khách hàng hài lòng với chất lượng thi công",
    ],
    featured: true,
  },
];

// Legacy single-string category for backward compat
export const projectCategories = PROJECT_FILTERS;
