export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  icon: string;
  shortDesc: string;
  description: string;
  items: string[];        // Hạng mục triển khai
  benefits: string[];
  process: { step: number; title: string; desc: string }[];
  image: string;
  featured: boolean;
}

export const services: ServiceItem[] = [
  {
    id: "1",
    slug: "bao-tri-nang-cap-he-thong",
    title: "Dịch vụ bảo trì nâng cấp cho hệ thống CNTT cho doanh nghiệp",
    icon: "wrench",
    shortDesc:
      "Cung cấp dịch vụ bảo trì, nâng cấp, kiểm tra và tối ưu hệ thống CNTT cho doanh nghiệp, giúp hệ thống vận hành ổn định, an toàn và hiệu quả.",
    description:
      "GVN cung cấp dịch vụ bảo trì và nâng cấp hệ thống CNTT chuyên nghiệp, giúp doanh nghiệp duy trì hoạt động liên tục và tối ưu hiệu suất. Đội ngũ kỹ thuật viên giàu kinh nghiệm sẽ kiểm tra, bảo dưỡng định kỳ và khắc phục sự cố nhanh chóng để hệ thống luôn vận hành ổn định — đảm bảo sự nghiệp kinh doanh của bạn không bị gián đoạn.",
    items: [
      "Kiểm tra hệ thống mạng nội bộ",
      "Bảo trì server, máy tính, thiết bị mạng",
      "Nâng cấp phần cứng / phần mềm",
      "Kiểm tra bảo mật cơ bản",
      "Xử lý sự cố định kỳ hoặc theo yêu cầu",
    ],
    benefits: [
      "Giảm thiểu thời gian ngừng hoạt động",
      "Tối ưu hóa hiệu suất hệ thống",
      "Tiết kiệm chi phí sửa chữa phát sinh",
      "Hỗ trợ kỹ thuật nhanh chóng",
      "Báo cáo tình trạng hệ thống định kỳ",
      "Lên kế hoạch nâng cấp phù hợp ngân sách",
    ],
    process: [
      { step: 1, title: "Khảo sát hệ thống", desc: "Đánh giá toàn diện hệ thống CNTT hiện tại" },
      { step: 2, title: "Lập kế hoạch", desc: "Xây dựng kế hoạch bảo trì và nâng cấp chi tiết" },
      { step: 3, title: "Triển khai", desc: "Thực hiện bảo trì / nâng cấp theo kế hoạch" },
      { step: 4, title: "Kiểm tra & bàn giao", desc: "Kiểm tra chất lượng, nghiệm thu và báo cáo" },
    ],
    image: "https://placehold.co/800x520/1B4FBF/ffffff?text=Bảo+Trì+Hệ+Thống+CNTT",
    featured: true,
  },
  {
    id: "2",
    slug: "cung-cap-linh-kien",
    title: "Cung cấp Linh kiện CNTT, Thiết bị công trình",
    icon: "package",
    shortDesc:
      "Cung cấp máy tính, máy in, server, thiết bị mạng, thiết bị văn phòng và các linh kiện CNTT phục vụ triển khai công trình.",
    description:
      "GVN là đối tác phân phối chính hãng của nhiều thương hiệu CNTT hàng đầu thế giới như Synology, Cisco, Hikvision, Dell, APC. Chúng tôi cung cấp đa dạng sản phẩm từ linh kiện máy tính, thiết bị mạng, máy chủ đến thiết bị chuyên dụng cho các công trình xây dựng hạ tầng CNTT — đảm bảo nguồn gốc rõ ràng và bảo hành chính hãng.",
    items: [
      "Máy tính, laptop, server",
      "Máy in, máy scan, thiết bị văn phòng",
      "Switch, router, firewall, access point",
      "Dây mạng, tủ rack, patch panel",
      "Thiết bị phục vụ công trình CNTT",
    ],
    benefits: [
      "Sản phẩm chính hãng 100%",
      "Giá cạnh tranh nhất thị trường",
      "Bảo hành theo nhà sản xuất",
      "Giao hàng nhanh chóng",
      "Tư vấn lựa chọn sản phẩm phù hợp",
      "Hỗ trợ kỹ thuật sau bán hàng",
    ],
    process: [
      { step: 1, title: "Tư vấn nhu cầu", desc: "Phân tích yêu cầu và đề xuất cấu hình tối ưu" },
      { step: 2, title: "Báo giá chi tiết", desc: "Cung cấp báo giá minh bạch, rõ ràng" },
      { step: 3, title: "Đặt hàng & xác nhận", desc: "Xác nhận đơn hàng và tiến hành mua sắm" },
      { step: 4, title: "Giao hàng & lắp đặt", desc: "Giao hàng đúng tiến độ và hỗ trợ lắp đặt" },
    ],
    image: "https://placehold.co/800x520/0F3A8F/ffffff?text=Cung+Cấp+Linh+Kiện+CNTT",
    featured: true,
  },
  {
    id: "3",
    slug: "thiet-bi-ngan-hang",
    title: "Các thiết bị chuyên dụng dành cho Ngân hàng",
    icon: "landmark",
    shortDesc:
      "Cung cấp các thiết bị chuyên dụng cho ngân hàng như máy đọc thẻ, máy in chuyên dụng, thiết bị giao dịch và thiết bị hỗ trợ vận hành.",
    description:
      "GVN có kinh nghiệm sâu trong việc cung cấp và triển khai các thiết bị CNTT chuyên dụng cho ngành ngân hàng tài chính. Chúng tôi hiểu rõ yêu cầu khắt khe về bảo mật và độ tin cậy cao của ngành — đảm bảo thiết bị hoạt động ổn định, tuân thủ quy định và sẵn sàng hỗ trợ vận hành 24/7.",
    items: [
      "Thiết bị giao dịch ngân hàng",
      "Máy đọc thẻ, máy in chuyên dụng",
      "Thiết bị hỗ trợ quầy giao dịch",
      "Thiết bị bảo mật và kiểm soát",
      "Bảo trì và thay thế thiết bị định kỳ",
    ],
    benefits: [
      "Kinh nghiệm triển khai tại nhiều ngân hàng lớn",
      "Thiết bị đạt tiêu chuẩn bảo mật cao",
      "Triển khai nhanh, ít gián đoạn hoạt động",
      "Bảo trì cam kết uptime cao",
      "Tuân thủ quy định Ngân hàng Nhà nước",
      "Hỗ trợ DR / BCP",
    ],
    process: [
      { step: 1, title: "Phân tích yêu cầu", desc: "Nghiên cứu yêu cầu bảo mật và nghiệp vụ" },
      { step: 2, title: "Thiết kế giải pháp", desc: "Đề xuất thiết bị phù hợp tiêu chuẩn ngân hàng" },
      { step: 3, title: "Triển khai", desc: "Lắp đặt và cấu hình theo quy trình nghiêm ngặt" },
      { step: 4, title: "Vận hành & bàn giao", desc: "Đào tạo nhân viên và hỗ trợ vận hành" },
    ],
    image: "https://placehold.co/800x520/1B4FBF/ffffff?text=Thiết+Bị+Ngân+Hàng",
    featured: true,
  },
  {
    id: "4",
    slug: "helpdesk-it-outsourcing",
    title: "Dịch vụ Helpdesk & IT Outsourcing – Cho thuê nhân sự IT Onsite",
    icon: "headphones",
    shortDesc:
      "Cung cấp nhân sự IT onsite, hỗ trợ helpdesk, xử lý sự cố, bảo trì thiết bị, hỗ trợ người dùng và vận hành hệ thống CNTT hằng ngày.",
    description:
      "GVN cung cấp dịch vụ Helpdesk và IT Outsourcing toàn diện, giúp doanh nghiệp có đội ngũ kỹ thuật viên CNTT chuyên nghiệp mà không cần tốn chi phí tuyển dụng và đào tạo nội bộ. Nhân sự của chúng tôi được đào tạo bài bản, sẵn sàng làm việc onsite tại văn phòng khách hàng với cam kết SLA rõ ràng.",
    items: [
      "Nhân sự IT onsite theo ca / theo tháng",
      "Hỗ trợ người dùng cuối (end-user support)",
      "Cài đặt phần mềm, máy tính, máy in",
      "Xử lý sự cố mạng, email, thiết bị",
      "Báo cáo tình trạng hỗ trợ định kỳ",
    ],
    benefits: [
      "Tiết kiệm chi phí nhân sự 30–50%",
      "Kỹ thuật viên được chứng nhận quốc tế",
      "Linh hoạt điều chỉnh quy mô nhân sự",
      "SLA cam kết rõ ràng theo hợp đồng",
      "Hỗ trợ đa kênh (điện thoại, email, remote)",
      "Báo cáo KPI hàng tháng đầy đủ",
    ],
    process: [
      { step: 1, title: "Khảo sát nhu cầu", desc: "Đánh giá yêu cầu nhân sự và kỹ năng cần thiết" },
      { step: 2, title: "Tuyển chọn nhân sự", desc: "Chọn lọc kỹ thuật viên phù hợp với yêu cầu" },
      { step: 3, title: "Onboarding", desc: "Giới thiệu nhân sự và bắt đầu làm việc" },
      { step: 4, title: "Giám sát & báo cáo", desc: "Theo dõi hiệu suất và báo cáo định kỳ" },
    ],
    image: "https://placehold.co/800x520/0F3A8F/ffffff?text=IT+Outsourcing+Onsite",
    featured: false,
  },
  {
    id: "5",
    slug: "giai-phap-phan-mem",
    title: "Các giải pháp Phần mềm cho doanh nghiệp",
    icon: "monitor",
    shortDesc:
      "Tư vấn, cung cấp và triển khai phần mềm bản quyền, phần mềm bảo mật, hệ điều hành, giải pháp quản lý và các công cụ hỗ trợ doanh nghiệp.",
    description:
      "GVN tư vấn và cung cấp đầy đủ các giải pháp phần mềm bản quyền cho doanh nghiệp: từ hệ điều hành, phần mềm văn phòng, công cụ bảo mật đến các hệ thống quản lý chuyên nghiệp. Chúng tôi giúp doanh nghiệp lựa chọn đúng sản phẩm, triển khai đúng cách và tối ưu chi phí bản quyền phần mềm.",
    items: [
      "Phần mềm bản quyền (Microsoft, Adobe, ...)",
      "Phần mềm bảo mật (Kaspersky, Trend Micro, ...)",
      "Hệ điều hành Windows Server / Client",
      "Phần mềm văn phòng Microsoft 365",
      "Tư vấn triển khai phần mềm theo nhu cầu",
    ],
    benefits: [
      "Bản quyền phần mềm hợp lệ, an toàn pháp lý",
      "Tư vấn lựa chọn gói phù hợp ngân sách",
      "Cài đặt và cấu hình chuyên nghiệp",
      "Hỗ trợ kỹ thuật sau triển khai",
      "Cập nhật bản quyền và gia hạn kịp thời",
      "Bảo mật toàn diện cho hệ thống dữ liệu",
    ],
    process: [
      { step: 1, title: "Tư vấn nhu cầu", desc: "Phân tích nhu cầu phần mềm của doanh nghiệp" },
      { step: 2, title: "Đề xuất giải pháp", desc: "Đề xuất sản phẩm phù hợp và tối ưu chi phí" },
      { step: 3, title: "Triển khai", desc: "Cài đặt, cấu hình và kiểm thử phần mềm" },
      { step: 4, title: "Bàn giao & hỗ trợ", desc: "Đào tạo sử dụng và hỗ trợ kỹ thuật lâu dài" },
    ],
    image: "https://placehold.co/800x520/2563EB/ffffff?text=Giải+Pháp+Phần+Mềm",
    featured: false,
  },
  {
    id: "6",
    slug: "tu-van-thiet-ke-thi-cong",
    title: "Tư vấn – Thiết kế – Thi công công trình",
    icon: "hardhat",
    shortDesc:
      "Tư vấn, thiết kế và thi công hệ thống mạng, camera, điện nhẹ, phòng máy, hạ tầng CNTT và các hạng mục công trình công nghệ.",
    description:
      "GVN cung cấp dịch vụ tư vấn, thiết kế và thi công hạ tầng CNTT trọn gói. Từ hệ thống mạng LAN/WAN, phòng máy chủ (data room), hệ thống camera CCTV, đến hệ thống âm thanh, điện nhẹ. Đội ngũ kỹ sư và kỹ thuật viên lành nghề, nhiều năm kinh nghiệm thi công dự án cho các tập đoàn lớn trong và ngoài nước.",
    items: [
      "Khảo sát hiện trạng thực địa",
      "Thiết kế hệ thống mạng, camera, điện nhẹ",
      "Thi công hạ tầng CNTT",
      "Lắp đặt, cấu hình và kiểm thử hệ thống",
      "Bàn giao, hướng dẫn sử dụng và bảo trì",
    ],
    benefits: [
      "Thiết kế tối ưu, đúng tiêu chuẩn kỹ thuật",
      "Thi công nhanh, ít ảnh hưởng hoạt động",
      "Vật tư và thiết bị chính hãng",
      "Nghiệm thu theo tiêu chuẩn quốc tế",
      "Hỗ trợ vận hành sau bàn giao",
      "Bảo hành công trình dài hạn",
    ],
    process: [
      { step: 1, title: "Khảo sát & tư vấn", desc: "Khảo sát thực địa và tư vấn giải pháp tối ưu" },
      { step: 2, title: "Thiết kế kỹ thuật", desc: "Lập hồ sơ thiết kế kỹ thuật chi tiết" },
      { step: 3, title: "Thi công", desc: "Triển khai thi công theo thiết kế được duyệt" },
      { step: 4, title: "Nghiệm thu & bàn giao", desc: "Kiểm tra chất lượng và bàn giao công trình" },
    ],
    image: "https://placehold.co/800x520/0F3A8F/ffffff?text=Thi+Công+Hạ+Tầng+CNTT",
    featured: true,
  },
];
