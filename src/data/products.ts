export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;       // danh mục chi tiết (sidebar filter)
  categoryGroup: string;  // nhóm lớn (dropdown header)
  brand: string;
  image: string;
  shortDesc: string;
  description: string;
  specs: { label: string; value: string }[];
  tags: string[];
  featured: boolean;
}

// ─── Nhóm danh mục lớn ───────────────────────────────────────────────────────
export const categoryGroups = [
  {
    label: "Sản phẩm CNTT – Công Trình",
    slug: "san-pham-cntt-cong-trinh",
    children: [
      "Linh kiện máy tính",
      "UPS / Bộ lưu điện",
      "Thiết bị mạng",
      "Máy chủ",
      "Lưu trữ",
      "Camera an ninh",
    ],
  },
  {
    label: "Thiết Bị Chuyên Dụng Cho Ngân Hàng",
    slug: "thiet-bi-chuyen-dung-cho-ngan-hang",
    children: [
      "Thiết bị ngân hàng",
      "Máy đọc thẻ",
      "Máy in ngân hàng",
    ],
  },
  {
    label: "Giải pháp – Phần mềm cho doanh nghiệp",
    slug: "giai-phap-phan-mem-cho-doanh-nghiep",
    children: [
      "Phần mềm bản quyền",
      "Phần mềm bảo mật",
      "Phần mềm văn phòng",
    ],
  },
];

// Flat list of sidebar categories
export const productCategories = [
  "Tất cả",
  "Linh kiện máy tính",
  "UPS / Bộ lưu điện",
  "Thiết bị mạng",
  "Máy chủ",
  "Lưu trữ",
  "Camera an ninh",
  "Thiết bị ngân hàng",
  "Phần mềm bản quyền",
  "Phần mềm bảo mật",
];

export const products: Product[] = [
  // ─── Linh kiện máy tính ───────────────────────────────────────────────────
  {
    id: "1",
    slug: "a4tech-kk-3",
    name: "Bàn phím A4TECH USB KK-3",
    category: "Linh kiện máy tính",
    categoryGroup: "Sản phẩm CNTT – Công Trình",
    brand: "A4TECH",
    image: "https://placehold.co/600x480/F8FAFC/1B4FBF?text=A4TECH+KK-3",
    shortDesc: "Bàn phím USB văn phòng thiết kế mỏng nhẹ, nhập liệu êm, bền bỉ cho môi trường doanh nghiệp.",
    description:
      "Bàn phím A4TECH KK-3 là lựa chọn lý tưởng cho môi trường văn phòng và doanh nghiệp. Với thiết kế chuẩn full-size, kết nối USB ổn định và phím bấm êm, sản phẩm phù hợp cho nhu cầu nhập liệu hàng ngày trong các tổ chức, văn phòng, ngân hàng.",
    specs: [
      { label: "Kết nối", value: "USB" },
      { label: "Số phím", value: "104 phím" },
      { label: "Loại phím", value: "Membrane" },
      { label: "Chiều dài dây", value: "1.5m" },
      { label: "Tương thích", value: "Windows 7/8/10/11" },
      { label: "Bảo hành", value: "12 tháng" },
    ],
    tags: ["Bàn phím", "A4TECH", "USB", "Văn phòng"],
    featured: false,
  },
  {
    id: "2",
    slug: "logitech-k120",
    name: "Bàn Phím Logitech K120",
    category: "Linh kiện máy tính",
    categoryGroup: "Sản phẩm CNTT – Công Trình",
    brand: "Logitech",
    image: "https://placehold.co/600x480/F8FAFC/0F3A8F?text=Logitech+K120",
    shortDesc: "Bàn phím USB chuẩn văn phòng Logitech K120, layout tiêu chuẩn, hành trình phím thoải mái.",
    description:
      "Logitech K120 là bàn phím USB đáng tin cậy với thiết kế ergonomic nhẹ và chắc chắn. Với chân đế có thể điều chỉnh và phím bấm êm, K120 là giải pháp kinh tế hiệu quả cho văn phòng và triển khai số lượng lớn trong doanh nghiệp.",
    specs: [
      { label: "Kết nối", value: "USB" },
      { label: "Số phím", value: "104 phím" },
      { label: "Chân đế", value: "Có thể điều chỉnh" },
      { label: "Chiều dài dây", value: "1.5m" },
      { label: "Bảo hành", value: "3 năm" },
    ],
    tags: ["Bàn phím", "Logitech", "USB", "Văn phòng"],
    featured: false,
  },
  {
    id: "3",
    slug: "asus-b760m-ayw-wifi",
    name: "Bảng mạch chính Asus B760M-AYW WIFI DDR4",
    category: "Linh kiện máy tính",
    categoryGroup: "Sản phẩm CNTT – Công Trình",
    brand: "ASUS",
    image: "https://placehold.co/600x480/F8FAFC/1B4FBF?text=ASUS+B760M-AYW",
    shortDesc: "Mainboard Micro-ATX socket LGA1700, chipset B760, hỗ trợ DDR4, tích hợp WiFi 6.",
    description:
      "ASUS B760M-AYW WIFI là mainboard Micro-ATX chất lượng cao dành cho nền tảng Intel Gen 12/13. Tích hợp WiFi 6 và Bluetooth 5.2, hỗ trợ DDR4 tốc độ cao, phù hợp cho xây dựng hệ thống văn phòng hiệu năng tốt và tối ưu chi phí.",
    specs: [
      { label: "Socket", value: "LGA1700 (Intel Gen 12/13)" },
      { label: "Chipset", value: "Intel B760" },
      { label: "Form Factor", value: "Micro-ATX" },
      { label: "RAM", value: "DDR4, 2 khe, tối đa 64GB" },
      { label: "Kết nối", value: "WiFi 6, Bluetooth 5.2, 2.5G LAN" },
      { label: "Bảo hành", value: "36 tháng" },
    ],
    tags: ["Mainboard", "ASUS", "Intel", "B760", "DDR4", "WiFi"],
    featured: true,
  },
  {
    id: "4",
    slug: "gigabyte-a520m-k-v2",
    name: "Bảng mạch chính Gigabyte A520M-K V2",
    category: "Linh kiện máy tính",
    categoryGroup: "Sản phẩm CNTT – Công Trình",
    brand: "Gigabyte",
    image: "https://placehold.co/600x480/F8FAFC/0F3A8F?text=Gigabyte+A520M-K",
    shortDesc: "Mainboard Micro-ATX socket AM4 chipset A520, hỗ trợ AMD Ryzen, giá hợp lý cho văn phòng.",
    description:
      "Gigabyte A520M-K V2 là mainboard Micro-ATX đáng tin cậy cho nền tảng AMD Ryzen AM4. Thiết kế tối ưu cho hệ thống văn phòng và máy trạm chi phí thấp với độ ổn định cao, phù hợp triển khai hàng loạt trong doanh nghiệp.",
    specs: [
      { label: "Socket", value: "AM4 (AMD Ryzen 3000/4000/5000)" },
      { label: "Chipset", value: "AMD A520" },
      { label: "Form Factor", value: "Micro-ATX" },
      { label: "RAM", value: "DDR4, 2 khe, tối đa 64GB" },
      { label: "Kết nối", value: "Gigabit LAN, USB 3.2 Gen1" },
      { label: "Bảo hành", value: "36 tháng" },
    ],
    tags: ["Mainboard", "Gigabyte", "AMD", "A520", "DDR4"],
    featured: false,
  },
  {
    id: "5",
    slug: "gigabyte-b760m-ds3h-ax-ddr4",
    name: "Bảng mạch chính Gigabyte B760M DS3H AX DDR4 (Wifi+Bluetooth)",
    category: "Linh kiện máy tính",
    categoryGroup: "Sản phẩm CNTT – Công Trình",
    brand: "Gigabyte",
    image: "https://placehold.co/600x480/F8FAFC/1B4FBF?text=Gigabyte+B760M+DS3H",
    shortDesc: "Mainboard Micro-ATX Intel B760, DDR4, WiFi 6E, Bluetooth 5.2, 2.5G LAN cho hệ thống văn phòng hiện đại.",
    description:
      "Gigabyte B760M DS3H AX DDR4 là lựa chọn tối ưu cho hệ thống văn phòng Intel Gen 12/13 với kết nối không dây WiFi 6E và Bluetooth 5.2 tích hợp. Phù hợp triển khai cho nhân viên văn phòng, ngân hàng và môi trường doanh nghiệp cần kết nối linh hoạt.",
    specs: [
      { label: "Socket", value: "LGA1700 (Intel Gen 12/13)" },
      { label: "Chipset", value: "Intel B760" },
      { label: "Form Factor", value: "Micro-ATX" },
      { label: "RAM", value: "DDR4, 4 khe, tối đa 128GB" },
      { label: "Kết nối", value: "WiFi 6E, Bluetooth 5.2, 2.5G LAN" },
      { label: "Bảo hành", value: "36 tháng" },
    ],
    tags: ["Mainboard", "Gigabyte", "Intel", "B760", "WiFi 6E", "DDR4"],
    featured: true,
  },
  {
    id: "6",
    slug: "gigabyte-z790-d-ddr4",
    name: "Bảng mạch chính Gigabyte Z790 D DDR4",
    category: "Linh kiện máy tính",
    categoryGroup: "Sản phẩm CNTT – Công Trình",
    brand: "Gigabyte",
    image: "https://placehold.co/600x480/F8FAFC/0F3A8F?text=Gigabyte+Z790+D+DDR4",
    shortDesc: "Mainboard ATX Intel Z790 cao cấp, DDR4, PCIe 5.0, phù hợp máy trạm và workstation doanh nghiệp.",
    description:
      "Gigabyte Z790 D DDR4 là mainboard flagship cấp doanh nghiệp với chipset Intel Z790, hỗ trợ bộ nhớ DDR4 tốc độ cao và PCIe 5.0. Đây là nền tảng lý tưởng để xây dựng máy trạm workstation hiệu năng cao cho các phòng kỹ thuật, đồ họa và phát triển phần mềm.",
    specs: [
      { label: "Socket", value: "LGA1700 (Intel Gen 12/13)" },
      { label: "Chipset", value: "Intel Z790" },
      { label: "Form Factor", value: "ATX" },
      { label: "RAM", value: "DDR4, 4 khe, tối đa 128GB" },
      { label: "Kết nối", value: "2.5G LAN, USB 3.2 Gen2x2" },
      { label: "Bảo hành", value: "36 tháng" },
    ],
    tags: ["Mainboard", "Gigabyte", "Intel", "Z790", "DDR4", "Workstation"],
    featured: false,
  },
  {
    id: "7",
    slug: "corsair-rs120-argb",
    name: "Bộ 3 quạt máy tính Corsair RS120 ARGB Black CO-9050181-WW",
    category: "Linh kiện máy tính",
    categoryGroup: "Sản phẩm CNTT – Công Trình",
    brand: "Corsair",
    image: "https://placehold.co/600x480/F8FAFC/1B4FBF?text=Corsair+RS120+ARGB",
    shortDesc: "Bộ 3 quạt case 120mm ARGB tốc độ cao, kiểm soát nhiệt hiệu quả, đồng bộ ánh sáng RGB.",
    description:
      "Corsair RS120 ARGB là bộ 3 quạt case 120mm với hiệu suất tản nhiệt xuất sắc và hiệu ứng ánh sáng ARGB có thể tùy chỉnh. Phù hợp cho các hệ thống máy tính yêu cầu kiểm soát nhiệt độ tốt và thẩm mỹ hiện đại trong phòng kỹ thuật doanh nghiệp.",
    specs: [
      { label: "Kích thước", value: "120mm x 3 quạt" },
      { label: "Tốc độ", value: "500–1500 RPM" },
      { label: "Lưu lượng khí", value: "47.7 CFM (max)" },
      { label: "Tiếng ồn", value: "≤25 dBA" },
      { label: "Đầu nối", value: "3-pin ARGB, 4-pin PWM" },
      { label: "Bảo hành", value: "24 tháng" },
    ],
    tags: ["Quạt máy tính", "Corsair", "ARGB", "120mm", "Tản nhiệt"],
    featured: false,
  },
  {
    id: "8",
    slug: "logitech-mk220-wireless",
    name: "Bộ bàn phím chuột không dây Logitech MK220 Wireless",
    category: "Linh kiện máy tính",
    categoryGroup: "Sản phẩm CNTT – Công Trình",
    brand: "Logitech",
    image: "https://placehold.co/600x480/F8FAFC/0F3A8F?text=Logitech+MK220",
    shortDesc: "Combo bàn phím chuột không dây Logitech MK220, kết nối USB Nano, pin bền lâu, lý tưởng cho văn phòng.",
    description:
      "Logitech MK220 là bộ bàn phím và chuột không dây tiết kiệm chi phí cho văn phòng và doanh nghiệp. Với đầu thu USB Nano nhỏ gọn, kết nối ổn định lên đến 10m và pin bền lên đến 24 tháng (bàn phím), đây là giải pháp lý tưởng để triển khai số lượng lớn.",
    specs: [
      { label: "Kết nối", value: "Nano USB receiver 2.4GHz" },
      { label: "Phạm vi", value: "Lên đến 10m" },
      { label: "Pin bàn phím", value: "24 tháng (2x AA)" },
      { label: "Pin chuột", value: "12 tháng (1x AA)" },
      { label: "DPI chuột", value: "1000 DPI" },
      { label: "Bảo hành", value: "3 năm" },
    ],
    tags: ["Bàn phím", "Chuột", "Logitech", "Không dây", "Văn phòng"],
    featured: true,
  },
  // ─── Thiết bị ngân hàng ───────────────────────────────────────────────────
  {
    id: "9",
    slug: "davisoft-bo-dieu-khien-may-lay-so",
    name: "Bộ điều khiển thuộc hệ máy lấy số DAVISOFT",
    category: "Thiết bị ngân hàng",
    categoryGroup: "Thiết Bị Chuyên Dụng Cho Ngân Hàng",
    brand: "DAVISOFT",
    image: "https://placehold.co/600x480/F8FAFC/1B4FBF?text=DAVISOFT+Queue+Controller",
    shortDesc: "Bộ điều khiển hệ thống xếp hàng lấy số thứ tự chuyên dụng cho ngân hàng và dịch vụ công.",
    description:
      "Bộ điều khiển DAVISOFT là trung tâm điều hành của hệ thống máy lấy số (queue management system), được thiết kế đặc biệt cho ngân hàng, bưu điện và các điểm dịch vụ công. Hỗ trợ quản lý nhiều quầy giao dịch đồng thời, tích hợp màn hình hiển thị và âm thanh thông báo.",
    specs: [
      { label: "Số quầy hỗ trợ", value: "Tối đa 32 quầy" },
      { label: "Giao tiếp", value: "RS-485, Ethernet" },
      { label: "Nguồn điện", value: "220V AC" },
      { label: "Nhiệt độ hoạt động", value: "0°C – 50°C" },
      { label: "Chứng nhận", value: "CE, FCC" },
      { label: "Bảo hành", value: "12 tháng" },
    ],
    tags: ["Ngân hàng", "DAVISOFT", "Xếp hàng", "Queue System", "Dịch vụ công"],
    featured: true,
  },
  // ─── UPS / Bộ lưu điện ───────────────────────────────────────────────────
  {
    id: "10",
    slug: "apc-srt10000xli",
    name: "Bộ lưu điện APC UPS 10KVA SRT10000XLI",
    category: "UPS / Bộ lưu điện",
    categoryGroup: "Sản phẩm CNTT – Công Trình",
    brand: "APC",
    image: "https://placehold.co/600x480/F8FAFC/0F3A8F?text=APC+UPS+10KVA",
    shortDesc: "UPS Online Double Conversion 10KVA dành cho trung tâm dữ liệu, server room và hệ thống quan trọng.",
    description:
      "APC Smart-UPS SRT10000XLI là UPS Online Double Conversion 10KVA/10000W chuyên dụng cho trung tâm dữ liệu, phòng máy chủ và các hệ thống CNTT quan trọng. Với công nghệ Double Conversion đảm bảo nguồn điện sạch và ổn định tuyệt đối, không phụ thuộc vào chất lượng điện lưới.",
    specs: [
      { label: "Công suất", value: "10KVA / 10000W" },
      { label: "Kiểu", value: "Online Double Conversion" },
      { label: "Điện áp vào", value: "200–240V" },
      { label: "Dạng sóng", value: "Sine thuần túy" },
      { label: "Giao tiếp", value: "USB, RS-232, SmartSlot" },
      { label: "Bảo hành", value: "2 năm" },
    ],
    tags: ["UPS", "APC", "10KVA", "Online", "Server Room", "Data Center"],
    featured: true,
  },
  {
    id: "11",
    slug: "apc-srtg20kxli",
    name: "Bộ lưu điện APC UPS 20KVA SRTG20KXLI",
    category: "UPS / Bộ lưu điện",
    categoryGroup: "Sản phẩm CNTT – Công Trình",
    brand: "APC",
    image: "https://placehold.co/600x480/F8FAFC/1B4FBF?text=APC+UPS+20KVA",
    shortDesc: "UPS Online 20KVA 3-phase input/single-phase output, dành cho hạ tầng CNTT quy mô lớn.",
    description:
      "APC SRTG20KXLI là UPS Online 20KVA 3 pha vào/1 pha ra, phù hợp cho các trung tâm dữ liệu quy mô lớn, nhà máy và hệ thống CNTT phức tạp. Trang bị pin dự phòng lớn, hỗ trợ mở rộng thời gian backup với battery pack ngoài.",
    specs: [
      { label: "Công suất", value: "20KVA / 20000W" },
      { label: "Kiểu", value: "Online Double Conversion" },
      { label: "Điện áp vào", value: "380/400/415V 3 pha" },
      { label: "Điện áp ra", value: "220/230/240V 1 pha" },
      { label: "Dạng sóng", value: "Sine thuần túy" },
      { label: "Bảo hành", value: "2 năm" },
    ],
    tags: ["UPS", "APC", "20KVA", "3-phase", "Data Center", "Enterprise"],
    featured: false,
  },
  {
    id: "12",
    slug: "apc-gvsups30kb4hs",
    name: "Bộ lưu điện UPS 30KVA APC GVSUPS30KB4HS",
    category: "UPS / Bộ lưu điện",
    categoryGroup: "Sản phẩm CNTT – Công Trình",
    brand: "APC",
    image: "https://placehold.co/600x480/F8FAFC/0F3A8F?text=APC+UPS+30KVA",
    shortDesc: "UPS Online 3 pha 30KVA dành cho data center, nhà máy và hạ tầng CNTT quy mô doanh nghiệp lớn.",
    description:
      "APC GVSUPS30KB4HS là UPS 3 pha đầu vào/đầu ra 30KVA dành cho các ứng dụng công nghiệp và trung tâm dữ liệu quy mô lớn. Với hiệu suất cao lên đến 96%, hệ thống tản nhiệt tiên tiến và khả năng mở rộng linh hoạt, đây là giải pháp bảo vệ nguồn điện toàn diện cho nhà máy và tập đoàn lớn.",
    specs: [
      { label: "Công suất", value: "30KVA / 27000W" },
      { label: "Kiểu", value: "Online Double Conversion" },
      { label: "Điện áp vào", value: "380/400/415V 3 pha" },
      { label: "Điện áp ra", value: "380/400/415V 3 pha" },
      { label: "Hiệu suất", value: "Lên đến 96%" },
      { label: "Bảo hành", value: "2 năm" },
    ],
    tags: ["UPS", "APC", "30KVA", "3-phase", "Data Center", "Industrial"],
    featured: false,
  },
];
