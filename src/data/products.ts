export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  brand: string;
  price?: string;
  image: string;
  shortDesc: string;
  description: string;
  specs: { label: string; value: string }[];
  tags: string[];
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "synology-sat5221-960g",
    name: "Ổ cứng SSD Synology SAT5221-960G 960GB Enterprise SATA",
    category: "Lưu trữ",
    brand: "Synology",
    price: "Liên hệ",
    image: "https://placehold.co/600x400/1B4FBF/ffffff?text=SSD+Synology+960GB",
    shortDesc: "Ổ cứng SSD Enterprise SATA 960GB, thiết kế cho NAS Synology, hiệu suất cao, bền bỉ.",
    description:
      "Ổ cứng SSD Synology SAT5221-960G là giải pháp lưu trữ enterprise cấp cao dành cho hệ thống NAS Synology. Với dung lượng 960GB và giao tiếp SATA, sản phẩm mang lại tốc độ đọc/ghi vượt trội, độ bền cao và đáng tin cậy cho môi trường doanh nghiệp. Được tích hợp liền mạch với Synology DSM, SAT5221 hỗ trợ giám sát sức khỏe ổ cứng theo thời gian thực.",
    specs: [
      { label: "Dung lượng", value: "960GB" },
      { label: "Giao tiếp", value: "SATA 6Gb/s" },
      { label: "Form factor", value: "2.5 inch" },
      { label: "Tốc độ đọc tuần tự", value: "530 MB/s" },
      { label: "Tốc độ ghi tuần tự", value: "500 MB/s" },
      { label: "MTBF", value: "2,000,000 giờ" },
      { label: "Bảo hành", value: "5 năm" },
    ],
    tags: ["SSD", "Synology", "Enterprise", "SATA", "NAS"],
    featured: true,
  },
  {
    id: "2",
    slug: "synology-hat3310-16t",
    name: "Ổ cứng HDD Synology HAT3310-16T 16TB 3.5\"",
    category: "Lưu trữ",
    brand: "Synology",
    price: "Liên hệ",
    image: "https://placehold.co/600x400/0F3A8F/ffffff?text=HDD+Synology+16TB",
    shortDesc: "Ổ cứng HDD 16TB 3.5 inch enterprise, tối ưu cho NAS Synology, hiệu suất cao.",
    description:
      "Synology HAT3310-16T là ổ cứng HDD dung lượng lớn 16TB, được thiết kế đặc biệt cho hệ thống NAS Synology. Ổ cứng sử dụng công nghệ CMR (Conventional Magnetic Recording) đảm bảo hiệu suất ổn định và đáng tin cậy trong môi trường doanh nghiệp 24/7.",
    specs: [
      { label: "Dung lượng", value: "16TB" },
      { label: "Form factor", value: "3.5 inch" },
      { label: "Giao tiếp", value: "SATA 6Gb/s" },
      { label: "Tốc độ quay", value: "7200 RPM" },
      { label: "Cache", value: "256MB" },
      { label: "MTBF", value: "1,000,000 giờ" },
      { label: "Bảo hành", value: "3 năm" },
    ],
    tags: ["HDD", "Synology", "16TB", "NAS", "Enterprise"],
    featured: true,
  },
  {
    id: "3",
    slug: "synology-hat3310-12t",
    name: "Ổ cứng HDD Synology HAT3310-12T 12TB 3.5\"",
    category: "Lưu trữ",
    brand: "Synology",
    price: "Liên hệ",
    image: "https://placehold.co/600x400/1B4FBF/ffffff?text=HDD+Synology+12TB",
    shortDesc: "Ổ cứng HDD 12TB 3.5 inch, tối ưu cho NAS Synology, độ bền cao.",
    description:
      "Synology HAT3310-12T mang lại dung lượng lưu trữ 12TB với độ tin cậy cao. Được tối ưu hóa để hoạt động liền mạch với các hệ thống NAS Synology, ổ cứng này lý tưởng cho các doanh nghiệp cần lưu trữ dữ liệu lớn với chi phí hợp lý.",
    specs: [
      { label: "Dung lượng", value: "12TB" },
      { label: "Form factor", value: "3.5 inch" },
      { label: "Giao tiếp", value: "SATA 6Gb/s" },
      { label: "Tốc độ quay", value: "7200 RPM" },
      { label: "Cache", value: "256MB" },
      { label: "MTBF", value: "1,000,000 giờ" },
      { label: "Bảo hành", value: "3 năm" },
    ],
    tags: ["HDD", "Synology", "12TB", "NAS"],
    featured: false,
  },
  {
    id: "4",
    slug: "synology-hat3320-8t",
    name: "Ổ cứng HDD Synology HAT3320-8T 8TB 3.5\"",
    category: "Lưu trữ",
    brand: "Synology",
    price: "Liên hệ",
    image: "https://placehold.co/600x400/0F3A8F/ffffff?text=HDD+Synology+8TB",
    shortDesc: "Ổ cứng HDD 8TB 3.5 inch, phù hợp cho văn phòng vừa và nhỏ.",
    description:
      "Synology HAT3320-8T là lựa chọn lý tưởng cho các doanh nghiệp vừa và nhỏ cần hệ thống lưu trữ tin cậy. Với dung lượng 8TB và khả năng tương thích hoàn hảo với các NAS Synology, ổ cứng này mang lại giá trị tuyệt vời cho khoản đầu tư.",
    specs: [
      { label: "Dung lượng", value: "8TB" },
      { label: "Form factor", value: "3.5 inch" },
      { label: "Giao tiếp", value: "SATA 6Gb/s" },
      { label: "Tốc độ quay", value: "5400 RPM" },
      { label: "Cache", value: "128MB" },
      { label: "MTBF", value: "1,000,000 giờ" },
      { label: "Bảo hành", value: "3 năm" },
    ],
    tags: ["HDD", "Synology", "8TB", "NAS", "SMB"],
    featured: false,
  },
  {
    id: "5",
    slug: "hikvision-ds-2cd2347g2-lu",
    name: "Camera IP Hikvision DS-2CD2347G2-LU 4MP ColorVu",
    category: "Camera an ninh",
    brand: "Hikvision",
    price: "Liên hệ",
    image: "https://placehold.co/600x400/1B4FBF/ffffff?text=Camera+Hikvision+4MP",
    shortDesc: "Camera IP 4MP ColorVu, hình ảnh màu ban đêm, tích hợp mic, bảo vệ IP67.",
    description:
      "Hikvision DS-2CD2347G2-LU là camera IP dome 4MP với công nghệ ColorVu tiên tiến, cho phép ghi hình màu sắc sống động ngay cả trong điều kiện ánh sáng cực thấp. Tích hợp microphone thu âm, bảo vệ chống nước/bụi IP67, phù hợp lắp đặt trong nhà và ngoài trời.",
    specs: [
      { label: "Độ phân giải", value: "4MP (2688×1520)" },
      { label: "Công nghệ", value: "ColorVu" },
      { label: "Góc nhìn", value: "102° (H)" },
      { label: "IR Range", value: "60m (hồng ngoại)" },
      { label: "Bảo vệ", value: "IP67, IK10" },
      { label: "Giao tiếp", value: "RJ45, PoE" },
      { label: "Bảo hành", value: "24 tháng" },
    ],
    tags: ["Camera", "Hikvision", "IP", "ColorVu", "4MP", "CCTV"],
    featured: true,
  },
  {
    id: "6",
    slug: "cisco-catalyst-2960x-24",
    name: "Switch Cisco Catalyst 2960-X 24 Port",
    category: "Thiết bị mạng",
    brand: "Cisco",
    price: "Liên hệ",
    image: "https://placehold.co/600x400/0F3A8F/ffffff?text=Cisco+Switch+2960-X",
    shortDesc: "Switch quản lý 24 cổng Gigabit PoE+, hiệu suất cao cho doanh nghiệp.",
    description:
      "Cisco Catalyst 2960-X là dòng switch Layer 2 enterprise với 24 cổng Gigabit PoE+, hỗ trợ cung cấp điện cho thiết bị IP như camera, điện thoại IP, AP không dây. Tích hợp Cisco IOS với đầy đủ tính năng bảo mật và quản lý tiên tiến.",
    specs: [
      { label: "Cổng mạng", value: "24x Gigabit Ethernet PoE+" },
      { label: "Uplink", value: "4x SFP Gigabit" },
      { label: "PoE Budget", value: "370W" },
      { label: "Switching Capacity", value: "88 Gbps" },
      { label: "MAC Address", value: "16,000" },
      { label: "VLAN", value: "4,096" },
      { label: "Bảo hành", value: "Lifetime Limited" },
    ],
    tags: ["Switch", "Cisco", "PoE", "Gigabit", "Enterprise", "Managed"],
    featured: true,
  },
  {
    id: "7",
    slug: "apc-smart-ups-1500va",
    name: "UPS APC Smart-UPS 1500VA",
    category: "UPS & Nguồn",
    brand: "APC",
    price: "Liên hệ",
    image: "https://placehold.co/600x400/1B4FBF/ffffff?text=APC+UPS+1500VA",
    shortDesc: "Bộ lưu điện UPS 1500VA, bảo vệ server và thiết bị mạng quan trọng.",
    description:
      "APC Smart-UPS 1500VA là giải pháp bảo vệ nguồn điện tin cậy cho server, thiết bị mạng và các hệ thống quan trọng. Với dạng sóng sine thuần túy và thời gian chuyển đổi nhanh, UPS đảm bảo thiết bị hoạt động ổn định ngay cả khi mất điện hoặc điện áp bất ổn.",
    specs: [
      { label: "Công suất", value: "1500VA / 1000W" },
      { label: "Dạng sóng", value: "Sine thuần túy" },
      { label: "Điện áp vào", value: "160-286V" },
      { label: "Thời gian backup", value: "~11 phút (full load)" },
      { label: "Số ổ cắm", value: "8 ổ cắm" },
      { label: "Giao tiếp", value: "USB, RS-232" },
      { label: "Bảo hành", value: "2 năm" },
    ],
    tags: ["UPS", "APC", "Nguồn", "Server", "Bảo vệ điện"],
    featured: false,
  },
  {
    id: "8",
    slug: "dell-poweredge-r750",
    name: "Server Dell PowerEdge R750",
    category: "Máy chủ",
    brand: "Dell",
    price: "Liên hệ",
    image: "https://placehold.co/600x400/0F3A8F/ffffff?text=Dell+PowerEdge+R750",
    shortDesc: "Máy chủ rack 2U hiệu năng cao, Intel Xeon Scalable thế hệ 3, tối ưu cho workload AI/ML.",
    description:
      "Dell PowerEdge R750 là máy chủ rack 2U flagship, trang bị bộ xử lý Intel Xeon Scalable thế hệ 3 (Ice Lake). Với kiến trúc linh hoạt, R750 hỗ trợ tối đa 2 CPU, 32 khe DIMM, nhiều tùy chọn lưu trữ NVMe/SAS/SATA. Phù hợp cho các workload đòi hỏi tài nguyên cao như AI/ML, ảo hóa, cơ sở dữ liệu lớn.",
    specs: [
      { label: "CPU", value: "2x Intel Xeon Scalable Gen3 (tối đa 40 nhân/CPU)" },
      { label: "RAM", value: "Tối đa 8TB DDR4 (32 khe DIMM)" },
      { label: "Lưu trữ", value: "Tối đa 24x 2.5\" SAS/SATA/NVMe" },
      { label: "RAID", value: "PERC H755/H345/H355" },
      { label: "Nguồn điện", value: "2x PSU redundant (600W–1400W)" },
      { label: "Form factor", value: "Rack 2U" },
      { label: "Bảo hành", value: "3 năm ProSupport" },
    ],
    tags: ["Server", "Dell", "PowerEdge", "Rack", "Xeon", "Enterprise"],
    featured: true,
  },
];

export const productCategories = [
  "Tất cả",
  "Lưu trữ",
  "Camera an ninh",
  "Thiết bị mạng",
  "Máy chủ",
  "UPS & Nguồn",
];
