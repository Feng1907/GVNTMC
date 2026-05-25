export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
  tags: string[];
  featured: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "gvn-trien-khai-he-thong-server-shinhan-bank",
    title: "GVN hoàn thành triển khai hệ thống máy chủ cho Shinhan Bank Vietnam",
    category: "Dự án",
    date: "2024-01-15",
    author: "GVN News",
    image: "https://placehold.co/800x450/1B4FBF/ffffff?text=GVN+Shinhan+Bank",
    excerpt:
      "GVN đã hoàn thành thành công dự án lắp đặt và cấu hình hệ thống máy chủ Dell PowerEdge R750 và hệ thống lưu trữ SAN 100TB cho Shinhan Bank Vietnam.",
    content: `GVN (Công ty TNHH Thương mại và Dịch vụ GVNTMC) vừa hoàn thành thành công dự án lớn: triển khai hệ thống máy chủ và lưu trữ cho Shinhan Bank Vietnam.

Dự án bao gồm lắp đặt 6 máy chủ Dell PowerEdge R750 mới nhất, hệ thống lưu trữ SAN dung lượng 100TB với khả năng mở rộng, cùng giải pháp ảo hóa VMware vSphere Enterprise Plus.

Tất cả hệ thống đều được thiết kế với khả năng dự phòng cao (HA - High Availability), đáp ứng yêu cầu uptime 99.99% của ngành ngân hàng. GVN cũng đã triển khai giải pháp Backup và Disaster Recovery (DR) hoàn chỉnh, đảm bảo RTO dưới 4 giờ và RPO dưới 1 giờ.

Ông Nguyễn Văn Minh, IT Manager của Shinhan Bank Vietnam, chia sẻ: "Chúng tôi rất hài lòng với chất lượng triển khai của GVN. Đội ngũ kỹ thuật chuyên nghiệp, làm việc đúng tiến độ và đáp ứng đầy đủ các yêu cầu khắt khe của ngành ngân hàng."`,
    tags: ["Shinhan Bank", "Server", "Dell", "Ngân hàng", "Dự án"],
    featured: true,
  },
  {
    id: "2",
    slug: "xu-huong-cntt-2024-doanh-nghiep",
    title: "5 xu hướng CNTT doanh nghiệp nổi bật năm 2024 tại Việt Nam",
    category: "Công nghệ",
    date: "2024-02-10",
    author: "GVN Tech Team",
    image: "https://placehold.co/800x450/0F3A8F/ffffff?text=IT+Trends+2024",
    excerpt:
      "Cùng GVN điểm qua 5 xu hướng công nghệ thông tin nổi bật nhất năm 2024 đang ảnh hưởng mạnh đến các doanh nghiệp tại Việt Nam.",
    content: `Năm 2024 chứng kiến sự bùng nổ của nhiều xu hướng công nghệ mới, tác động mạnh đến cách doanh nghiệp vận hành và quản lý hạ tầng CNTT.

**1. AI và Machine Learning trong doanh nghiệp**
Trí tuệ nhân tạo không còn là khái niệm xa xôi. Ngày càng nhiều doanh nghiệp Việt Nam ứng dụng AI vào vận hành, từ chatbot hỗ trợ khách hàng đến phân tích dữ liệu kinh doanh.

**2. Bảo mật Zero Trust**
Với sự gia tăng của các cuộc tấn công mạng, mô hình bảo mật Zero Trust đang được nhiều tổ chức áp dụng.

**3. Đám mây lai (Hybrid Cloud)**
Các doanh nghiệp đang kết hợp đám mây công cộng và riêng để tối ưu chi phí và hiệu suất.

**4. Edge Computing**
Xử lý dữ liệu tại biên mạng giúp giảm độ trễ và tăng hiệu suất cho các ứng dụng thời gian thực.

**5. Tự động hóa hạ tầng**
Infrastructure as Code (IaC) và tự động hóa vận hành đang trở thành tiêu chuẩn mới.`,
    tags: ["AI", "Cloud", "Bảo mật", "Xu hướng", "2024"],
    featured: true,
  },
  {
    id: "3",
    slug: "gvn-doi-tac-synology-chinh-hang",
    title: "GVN trở thành đối tác phân phối chính hãng Synology tại Việt Nam",
    category: "Tin tức công ty",
    date: "2024-03-05",
    author: "GVN News",
    image: "https://placehold.co/800x450/1B4FBF/ffffff?text=GVN+Synology+Partner",
    excerpt:
      "GVN chính thức ký kết hợp đồng hợp tác với Synology, trở thành đối tác phân phối chính hãng ổ cứng và NAS Synology tại thị trường Việt Nam.",
    content: `Công ty GVNTMC vừa chính thức ký kết hợp đồng hợp tác chiến lược với Synology Inc., một trong những thương hiệu lưu trữ hàng đầu thế giới.

Với tư cách là đối tác phân phối chính hãng, GVN cam kết cung cấp các sản phẩm Synology chính hãng 100% với mức giá cạnh tranh nhất thị trường Việt Nam.

Danh mục sản phẩm Synology mà GVN phân phối bao gồm:
- Ổ cứng SSD dòng SAT5200 Enterprise
- Ổ cứng HDD dòng HAT3300/HAT5300 Enterprise NAS
- NAS (Network Attached Storage) các dòng DS, RS, FS

Ông Nguyễn Văn A, Giám đốc kinh doanh GVN, cho biết: "Việc hợp tác với Synology là bước tiến quan trọng trong chiến lược mở rộng danh mục sản phẩm của chúng tôi. Chúng tôi tự hào mang đến cho khách hàng những sản phẩm lưu trữ tốt nhất từ Synology."`,
    tags: ["Synology", "Đối tác", "NAS", "Lưu trữ", "Tin tức"],
    featured: false,
  },
  {
    id: "4",
    slug: "huong-dan-chon-nas-doanh-nghiep",
    title: "Hướng dẫn chọn NAS phù hợp cho doanh nghiệp vừa và nhỏ",
    category: "Hướng dẫn",
    date: "2024-03-20",
    author: "GVN Tech Team",
    image: "https://placehold.co/800x450/0F3A8F/ffffff?text=NAS+Guide+SMB",
    excerpt:
      "NAS (Network Attached Storage) là giải pháp lưu trữ lý tưởng cho SMB. Hãy cùng GVN tìm hiểu cách chọn NAS phù hợp với nhu cầu và ngân sách của bạn.",
    content: `NAS (Network Attached Storage) đang trở thành giải pháp lưu trữ được nhiều doanh nghiệp vừa và nhỏ ưa chuộng nhờ tính linh hoạt và chi phí hợp lý.

**Tại sao nên dùng NAS cho SMB?**
- Tập trung dữ liệu, dễ quản lý
- Chi phí thấp hơn SAN truyền thống
- Dễ mở rộng dung lượng
- Hỗ trợ nhiều giao thức: SMB/CIFS, NFS, iSCSI

**Các tiêu chí chọn NAS:**

1. **Số lượng bay (bay)**: Tính toán dung lượng cần thiết hiện tại và tương lai
2. **Loại ổ cứng**: HDD cho dung lượng lớn, SSD cho hiệu suất cao
3. **RAM**: Càng nhiều RAM, hiệu suất NAS càng tốt
4. **Kết nối mạng**: 1GbE cho văn phòng nhỏ, 10GbE cho workload nặng
5. **Tính năng**: RAID, snapshot, replication, cloud backup

**Khuyến nghị của GVN:**
- Văn phòng < 20 người: Synology DS923+ (4 bay)
- Văn phòng 20-50 người: Synology DS1522+ (5 bay)
- Doanh nghiệp > 50 người: Synology RS1221+ (Rack 8 bay)`,
    tags: ["NAS", "Synology", "Lưu trữ", "SMB", "Hướng dẫn"],
    featured: false,
  },
  {
    id: "5",
    slug: "camera-ip-vs-analog-nen-chon-gi",
    title: "Camera IP vs Camera Analog: Doanh nghiệp nên chọn loại nào?",
    category: "Hướng dẫn",
    date: "2024-04-08",
    author: "GVN Security Team",
    image: "https://placehold.co/800x450/1B4FBF/ffffff?text=Camera+IP+vs+Analog",
    excerpt:
      "So sánh toàn diện giữa camera IP và camera analog để giúp bạn đưa ra quyết định đầu tư hệ thống camera an ninh phù hợp nhất.",
    content: `Khi đầu tư hệ thống camera an ninh, câu hỏi phổ biến nhất là: chọn camera IP hay camera analog?

**Camera Analog (AHD/TVI/CVI):**
Ưu điểm:
- Chi phí đầu tư thấp hơn
- Đơn giản, dễ lắp đặt
- Tương thích với hạ tầng cáp đồng trục cũ

Nhược điểm:
- Độ phân giải giới hạn (tối đa 4K AHD)
- Không hỗ trợ PoE
- Khó tích hợp với hệ thống thông minh

**Camera IP:**
Ưu điểm:
- Độ phân giải cao (4MP, 8MP, 4K và hơn)
- Hỗ trợ PoE – tiết kiệm cáp điện
- AI analytics: nhận diện khuôn mặt, đếm người
- Dễ tích hợp với hệ thống quản lý thông minh
- Quản lý từ xa qua internet

Nhược điểm:
- Chi phí đầu tư cao hơn
- Cần hạ tầng mạng LAN tốt

**Khuyến nghị của GVN:**
Với doanh nghiệp đầu tư mới, GVN luôn khuyên dùng camera IP. Chi phí đầu tư ban đầu cao hơn nhưng hiệu quả lâu dài tốt hơn rất nhiều. Đặc biệt với camera Hikvision ColorVu, bạn sẽ có hình ảnh màu ngay cả ban đêm.`,
    tags: ["Camera", "IP", "Analog", "Hikvision", "An ninh", "Hướng dẫn"],
    featured: false,
  },
  {
    id: "6",
    slug: "gvn-hoan-thanh-du-an-hyosung",
    title: "GVN hoàn thành dự án hạ tầng CNTT quy mô lớn cho nhà máy Hyosung",
    category: "Dự án",
    date: "2024-04-25",
    author: "GVN News",
    image: "https://placehold.co/800x450/0F3A8F/ffffff?text=GVN+Hyosung+Project",
    excerpt:
      "GVN vừa hoàn thành xuất sắc dự án thi công hạ tầng CNTT quy mô lớn cho nhà máy Hyosung tại Đồng Nai, bao gồm mạng LAN, 120 camera và hệ thống loa PA.",
    content: `GVN (GVNTMC) vừa hoàn thành thành công dự án hạ tầng CNTT lớn nhất từ trước đến nay tại nhà máy Hyosung Đồng Nai.

Dự án kéo dài 3 tháng với quy mô:
- Hệ thống mạng LAN/WAN toàn nhà máy 50.000 m²
- 120 camera IP Hikvision 4MP
- Hệ thống loa PA 80 điểm
- Network Operation Center (NOC) trung tâm

Điểm nổi bật của dự án là GVN đã hoàn thành trước tiến độ 1 tuần trong khi vẫn đảm bảo nhà máy hoạt động bình thường không gián đoạn.

Park Ji Hoon, General Manager Hyosung Vietnam, nhận xét: "GVN thực sự hiểu yêu cầu của chúng tôi và đáp ứng đúng tiêu chuẩn của tập đoàn. Hệ thống hoạt động ổn định ngay từ ngày đầu bàn giao."

Sau dự án này, Hyosung đã ký thêm hợp đồng bảo trì 3 năm với GVN, thể hiện sự tin tưởng cao vào chất lượng dịch vụ của chúng tôi.`,
    tags: ["Hyosung", "Nhà máy", "Camera", "Mạng", "Dự án"],
    featured: true,
  },
];

export const newsCategories = [
  "Tất cả",
  "Dự án",
  "Công nghệ",
  "Tin tức công ty",
  "Hướng dẫn",
];
