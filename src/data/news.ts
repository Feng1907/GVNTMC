export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: NewsSection[];
  tags: string[];
  featured: boolean;
}

export interface NewsSection {
  type: "paragraph" | "heading2" | "heading3" | "list" | "cta";
  text?: string;
  items?: string[];
}

export const NEWS_CATEGORIES = [
  "Tất cả",
  "Bảo trì CNTT",
  "IT Outsourcing",
  "Thi công công trình",
  "An ninh vật lý",
  "Giải pháp doanh nghiệp",
];

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "chien-luoc-an-ninh-vat-ly-hieu-qua",
    title: "Chiến lược an ninh vật lý hiệu quả cho doanh nghiệp và cơ sở hạ tầng",
    category: "An ninh vật lý",
    date: "2024-05-10",
    author: "GVN Security Team",
    image: "https://placehold.co/800x450/1B4FBF/ffffff?text=Physical+Security+Strategy",
    excerpt:
      "Trong môi trường kinh doanh và xã hội hiện đại, an ninh vật lý đóng vai trò quan trọng trong việc bảo vệ con người, tài sản và hệ thống vận hành.",
    tags: ["An ninh vật lý", "Camera CCTV", "Kiểm soát ra vào", "Doanh nghiệp"],
    featured: true,
    content: [
      {
        type: "heading2",
        text: "An ninh vật lý là gì?",
      },
      {
        type: "paragraph",
        text: "An ninh vật lý là tập hợp các biện pháp, hệ thống và quy trình nhằm bảo vệ con người, tài sản, trang thiết bị và dữ liệu khỏi các mối đe dọa từ thế giới thực như trộm cắp, phá hoại, thiên tai và xâm nhập trái phép. Đây là nền tảng không thể thiếu trong chiến lược bảo mật tổng thể của bất kỳ tổ chức nào.",
      },
      {
        type: "heading2",
        text: "Vì sao doanh nghiệp cần đầu tư an ninh vật lý?",
      },
      {
        type: "paragraph",
        text: "Theo thống kê từ các tổ chức bảo mật quốc tế, hơn 60% sự cố bảo mật nghiêm trọng có liên quan đến yếu tố vật lý — từ trộm cắp thiết bị chứa dữ liệu cho đến nhân viên bất hảo truy cập trái phép. Đối với doanh nghiệp tại Việt Nam, rủi ro này ngày càng gia tăng khi quy mô hoạt động mở rộng.",
      },
      {
        type: "list",
        items: [
          "Bảo vệ tài sản vật chất: máy chủ, thiết bị CNTT, hàng hóa có giá trị",
          "Kiểm soát người ra vào khu vực nhạy cảm: phòng máy chủ, kho, văn phòng điều hành",
          "Giảm thiểu rủi ro nội gián và trộm cắp nội bộ",
          "Đáp ứng yêu cầu tuân thủ (compliance) của ngành ngân hàng, sản xuất, y tế",
          "Tạo môi trường làm việc an toàn, nâng cao niềm tin của nhân viên và đối tác",
        ],
      },
      {
        type: "heading2",
        text: "Các thành phần quan trọng trong hệ thống an ninh",
      },
      {
        type: "paragraph",
        text: "Một hệ thống an ninh vật lý toàn diện bao gồm nhiều lớp bảo vệ tích hợp với nhau, tạo thành mạng lưới phòng thủ nhiều tầng. Mỗi lớp có vai trò và chức năng riêng biệt nhưng bổ trợ lẫn nhau.",
      },
      {
        type: "list",
        items: [
          "Hàng rào vật lý: tường, rào, cổng kiểm soát",
          "Hệ thống chiếu sáng: đảm bảo tầm nhìn rõ ràng, ngăn chặn hành vi xâm nhập ban đêm",
          "Camera giám sát (CCTV): ghi lại hình ảnh 24/7, hỗ trợ điều tra sự cố",
          "Hệ thống kiểm soát ra vào (Access Control): thẻ từ, vân tay, nhận diện khuôn mặt",
          "Hệ thống cảnh báo xâm nhập: phát hiện và thông báo ngay khi có sự cố",
          "Nhân viên bảo vệ và quy trình tuần tra",
        ],
      },
      {
        type: "heading2",
        text: "Camera giám sát, kiểm soát ra vào và hệ thống cảnh báo",
      },
      {
        type: "paragraph",
        text: "Camera IP thế hệ mới như Hikvision ColorVu, Dahua Full-color cung cấp hình ảnh màu sắc ngay cả ban đêm không cần đèn hồng ngoại. Tích hợp AI analytics giúp phát hiện người lạ, đếm người ra vào, nhận diện khuôn mặt và cảnh báo tự động qua email/điện thoại.",
      },
      {
        type: "paragraph",
        text: "Hệ thống kiểm soát ra vào (Access Control) hiện đại như ZKTeco, Hikvision DS-K series cho phép quản lý hàng nghìn thẻ, thiết lập lịch truy cập linh hoạt và ghi lịch sử chi tiết. Kết hợp với phần mềm quản lý trung tâm, quản trị viên có thể giám sát toàn bộ hệ thống từ xa.",
      },
      {
        type: "heading2",
        text: "Vai trò của GVN trong tư vấn và triển khai giải pháp",
      },
      {
        type: "paragraph",
        text: "GVN đã triển khai thành công hệ thống an ninh vật lý cho hàng chục nhà máy, văn phòng và tổ chức tài chính tại Việt Nam. Với kinh nghiệm thực tiễn từ các dự án lớn như Hyosung, Chemtronics, Shinhan Bank — chúng tôi hiểu rõ yêu cầu của từng ngành và đề xuất giải pháp phù hợp nhất.",
      },
      {
        type: "cta",
        text: "Liên hệ GVN để được tư vấn giải pháp an ninh vật lý phù hợp với doanh nghiệp của bạn.",
      },
    ],
  },
  {
    id: "2",
    slug: "dich-vu-bao-tri-nang-cap-he-thong-cntt",
    title: "Dịch vụ bảo trì và nâng cấp hệ thống CNTT",
    category: "Bảo trì CNTT",
    date: "2024-04-18",
    author: "GVN Tech Team",
    image: "https://placehold.co/800x450/0F3A8F/ffffff?text=IT+Maintenance+Service",
    excerpt:
      "Giải pháp bảo trì, kiểm tra và nâng cấp hệ thống CNTT giúp doanh nghiệp duy trì hoạt động ổn định, an toàn và hiệu quả.",
    tags: ["Bảo trì CNTT", "Nâng cấp hệ thống", "Server", "Mạng", "Dịch vụ"],
    featured: false,
    content: [
      {
        type: "heading2",
        text: "Tầm quan trọng của bảo trì CNTT định kỳ",
      },
      {
        type: "paragraph",
        text: "Hệ thống CNTT là xương sống của mọi hoạt động kinh doanh hiện đại. Một sự cố kỹ thuật có thể gây gián đoạn nghiêm trọng, tổn thất doanh thu và ảnh hưởng đến uy tín doanh nghiệp. Bảo trì định kỳ chính là chìa khóa để ngăn chặn những sự cố này trước khi xảy ra.",
      },
      {
        type: "paragraph",
        text: "Theo nghiên cứu, chi phí bảo trì phòng ngừa chỉ bằng 1/5 đến 1/10 chi phí khắc phục sự cố. Đây là lý do tại sao các doanh nghiệp hàng đầu luôn ưu tiên đầu tư vào dịch vụ bảo trì chuyên nghiệp.",
      },
      {
        type: "heading2",
        text: "Các hạng mục bảo trì hệ thống",
      },
      {
        type: "list",
        items: [
          "Kiểm tra và vệ sinh máy chủ, thiết bị mạng (switch, router, firewall)",
          "Cập nhật firmware, driver và hệ điều hành",
          "Kiểm tra dung lượng lưu trữ, RAM và CPU",
          "Backup dữ liệu và kiểm tra khả năng phục hồi",
          "Kiểm tra hệ thống điện dự phòng UPS",
          "Rà soát bảo mật: quét malware, kiểm tra log truy cập",
          "Tối ưu hóa hiệu suất mạng LAN/WAN",
          "Kiểm tra camera và hệ thống lưu trữ video",
        ],
      },
      {
        type: "heading2",
        text: "Lợi ích khi doanh nghiệp sử dụng dịch vụ bảo trì chuyên nghiệp",
      },
      {
        type: "paragraph",
        text: "Sử dụng dịch vụ bảo trì outsource từ GVN mang lại nhiều lợi thế so với việc tự vận hành đội ngũ IT nội bộ, đặc biệt với các doanh nghiệp vừa và nhỏ.",
      },
      {
        type: "list",
        items: [
          "Tiết kiệm chi phí: không cần tuyển dụng và đào tạo nhân sự IT cố định",
          "Chuyên môn cao: đội ngũ GVN có kinh nghiệm trên nhiều nền tảng và thương hiệu",
          "Phản ứng nhanh: cam kết SLA rõ ràng, hỗ trợ 24/7 khi cần",
          "Báo cáo minh bạch: báo cáo tình trạng hệ thống định kỳ sau mỗi lần bảo trì",
          "Tư vấn nâng cấp: phát hiện sớm thiết bị lỗi thời, đề xuất nâng cấp kịp thời",
        ],
      },
      {
        type: "heading2",
        text: "Quy trình hỗ trợ của GVN",
      },
      {
        type: "list",
        items: [
          "Bước 1: Khảo sát và đánh giá hiện trạng hệ thống CNTT",
          "Bước 2: Xây dựng kế hoạch bảo trì định kỳ (hàng tháng/quý)",
          "Bước 3: Thực hiện bảo trì theo lịch đã thỏa thuận",
          "Bước 4: Lập biên bản bảo trì và báo cáo tình trạng",
          "Bước 5: Hỗ trợ xử lý sự cố phát sinh ngoài lịch (hotline 24/7)",
        ],
      },
      {
        type: "cta",
        text: "Liên hệ GVN để được tư vấn gói bảo trì CNTT phù hợp với quy mô và ngân sách của doanh nghiệp.",
      },
    ],
  },
  {
    id: "3",
    slug: "dich-vu-helpdesk-it-outsourcing-onsite",
    title: "Dịch vụ Helpdesk & IT Outsourcing – Cho thuê nhân sự IT Onsite",
    category: "IT Outsourcing",
    date: "2024-03-25",
    author: "GVN HR Team",
    image: "https://placehold.co/800x450/2563EB/ffffff?text=IT+Outsourcing+Helpdesk",
    excerpt:
      "Dịch vụ nhân sự IT onsite giúp doanh nghiệp xử lý sự cố nhanh chóng, hỗ trợ người dùng và vận hành hệ thống CNTT hằng ngày.",
    tags: ["IT Outsourcing", "Helpdesk", "Nhân sự IT", "Onsite", "Dịch vụ"],
    featured: false,
    content: [
      {
        type: "heading2",
        text: "IT Outsourcing là gì?",
      },
      {
        type: "paragraph",
        text: "IT Outsourcing (thuê ngoài CNTT) là mô hình doanh nghiệp ủy thác một phần hoặc toàn bộ hoạt động CNTT cho một đơn vị cung cấp dịch vụ chuyên nghiệp bên ngoài. Thay vì tuyển dụng và quản lý đội ngũ IT nội bộ, doanh nghiệp trả phí dịch vụ cho GVN và nhận lại nguồn nhân lực chất lượng cao theo nhu cầu.",
      },
      {
        type: "heading2",
        text: "Khi nào doanh nghiệp nên thuê nhân sự IT onsite?",
      },
      {
        type: "list",
        items: [
          "Doanh nghiệp có từ 20–200 nhân viên nhưng chưa cần IT department riêng",
          "Cần bổ sung nhân sự IT tạm thời trong dự án lớn hoặc mùa cao điểm",
          "Chi nhánh hoặc văn phòng tại địa phương cần hỗ trợ IT tại chỗ",
          "Muốn giảm chi phí so với thuê nhân sự IT full-time",
          "Cần chuyên môn đặc biệt (network, security, server) mà đội ngũ hiện tại không có",
        ],
      },
      {
        type: "heading2",
        text: "Các công việc hỗ trợ hằng ngày",
      },
      {
        type: "paragraph",
        text: "Nhân sự IT onsite từ GVN đảm nhận toàn bộ hoặc một phần công việc CNTT hằng ngày tại văn phòng khách hàng, bao gồm:",
      },
      {
        type: "list",
        items: [
          "Helpdesk: tiếp nhận và xử lý yêu cầu hỗ trợ kỹ thuật của nhân viên",
          "Cài đặt, cấu hình máy tính, laptop, máy in, thiết bị ngoại vi",
          "Quản lý tài khoản người dùng (Active Directory, Microsoft 365)",
          "Giám sát hệ thống mạng, phát hiện và xử lý sự cố",
          "Hỗ trợ họp video (Zoom, Teams), quản lý phòng họp thông minh",
          "Sao lưu dữ liệu và bảo mật endpoint",
          "Báo cáo tình trạng hệ thống định kỳ cho ban quản lý",
        ],
      },
      {
        type: "heading2",
        text: "Lợi ích về chi phí và vận hành",
      },
      {
        type: "paragraph",
        text: "So sánh chi phí thuê nhân sự IT outsourcing với việc tuyển dụng nhân viên IT chính thức:",
      },
      {
        type: "list",
        items: [
          "Tiết kiệm 30–50% chi phí so với nhân viên IT full-time (không tính bảo hiểm, thưởng, đào tạo)",
          "Linh hoạt điều chỉnh số lượng nhân sự theo mùa vụ",
          "Không mất thời gian và chi phí tuyển dụng khi cần gấp",
          "Được hỗ trợ bởi cả đội ngũ chuyên gia GVN phía sau, không chỉ 1 người",
          "Cam kết SLA rõ ràng, thay thế ngay nếu nhân sự không đáp ứng yêu cầu",
        ],
      },
      {
        type: "cta",
        text: "Liên hệ GVN để được tư vấn gói IT Outsourcing phù hợp với quy mô doanh nghiệp của bạn.",
      },
    ],
  },
  {
    id: "4",
    slug: "tu-van-thiet-ke-thi-cong-cong-trinh",
    title: "Tư vấn – Thiết kế – Thi công công trình",
    category: "Thi công công trình",
    date: "2024-02-14",
    author: "GVN Engineering Team",
    image: "https://placehold.co/800x450/1B4FBF/ffffff?text=Construction+Consulting",
    excerpt:
      "GVN cung cấp dịch vụ tư vấn, thiết kế và thi công hệ thống mạng, camera, điện nhẹ, phòng máy và hạ tầng CNTT cho doanh nghiệp.",
    tags: ["Thi công", "Thiết kế", "Tư vấn", "Hạ tầng CNTT", "Công trình"],
    featured: false,
    content: [
      {
        type: "heading2",
        text: "Quy trình khảo sát và tư vấn",
      },
      {
        type: "paragraph",
        text: "Mỗi dự án thi công bắt đầu bằng giai đoạn khảo sát hiện trường kỹ lưỡng. Đội ngũ kỹ sư GVN sẽ đến tận nơi để đo đạc, đánh giá hiện trạng hạ tầng, trao đổi chi tiết với khách hàng về nhu cầu và ngân sách.",
      },
      {
        type: "list",
        items: [
          "Khảo sát thực địa: đo vẽ mặt bằng, đánh giá điều kiện thi công",
          "Đánh giá nhu cầu: số lượng điểm mạng, camera, loa, thiết bị đầu cuối",
          "Đề xuất giải pháp kỹ thuật phù hợp với ngân sách và tiêu chuẩn ngành",
          "Lập hồ sơ thiết kế sơ bộ và dự toán chi phí",
          "Trình bày và thảo luận với khách hàng, điều chỉnh theo yêu cầu",
        ],
      },
      {
        type: "heading2",
        text: "Thiết kế hệ thống mạng, camera, điện nhẹ",
      },
      {
        type: "paragraph",
        text: "Sau khi được phê duyệt, GVN tiến hành lập hồ sơ thiết kế kỹ thuật chi tiết bao gồm bản vẽ sơ đồ hệ thống, sơ đồ đi dây, thuyết minh kỹ thuật và danh sách thiết bị cụ thể.",
      },
      {
        type: "list",
        items: [
          "Thiết kế sơ đồ topo mạng LAN/WAN",
          "Bản vẽ lắp đặt camera: vị trí, góc bao phủ, loại camera",
          "Bản vẽ hệ thống điện nhẹ: sơ đồ đấu nối, tủ điện, đường dây",
          "Thiết kế phòng máy chủ theo tiêu chuẩn TIA-942",
          "Thiết kế hệ thống loa PA, hệ thống âm thanh hội trường",
        ],
      },
      {
        type: "heading2",
        text: "Thi công, kiểm thử và bàn giao",
      },
      {
        type: "paragraph",
        text: "Giai đoạn thi công được thực hiện bởi đội ngũ kỹ thuật viên lành nghề của GVN, tuân thủ nghiêm ngặt hồ sơ thiết kế và tiêu chuẩn kỹ thuật. Trong quá trình thi công, chúng tôi luôn phối hợp chặt chẽ với các đơn vị khác (xây dựng, nội thất) để đảm bảo tiến độ chung.",
      },
      {
        type: "list",
        items: [
          "Thi công đi dây ngầm hoặc đi nổi theo thiết kế",
          "Lắp đặt thiết bị đầu cuối: switch, router, access point, camera, loa",
          "Cấu hình và tích hợp hệ thống",
          "Kiểm thử toàn bộ hệ thống theo danh sách checklist",
          "Nghiệm thu cùng đại diện khách hàng",
          "Bàn giao hồ sơ hoàn công, hướng dẫn vận hành và sử dụng",
        ],
      },
      {
        type: "heading2",
        text: "Bảo trì sau triển khai",
      },
      {
        type: "paragraph",
        text: "GVN cam kết hỗ trợ kỹ thuật sau bàn giao theo điều khoản bảo hành trong hợp đồng. Ngoài ra, chúng tôi cung cấp gói bảo trì định kỳ để đảm bảo hệ thống luôn hoạt động tốt trong dài hạn.",
      },
      {
        type: "list",
        items: [
          "Bảo hành thiết bị và thi công theo hợp đồng",
          "Hỗ trợ kỹ thuật từ xa qua hotline/remote",
          "Bảo trì định kỳ theo gói dịch vụ hàng tháng/quý",
          "Nâng cấp hệ thống khi cần thiết",
        ],
      },
      {
        type: "cta",
        text: "Liên hệ GVN để được khảo sát và tư vấn giải pháp thi công hạ tầng CNTT cho công trình của bạn.",
      },
    ],
  },
];
