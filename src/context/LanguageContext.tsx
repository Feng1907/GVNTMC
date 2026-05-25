"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "vi" | "en";

interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    products: string;
    projects: string;
    news: string;
    contact: string;
    getQuote: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    stat1: { value: string; label: string };
    stat2: { value: string; label: string };
    stat3: { value: string; label: string };
    floatingBadge1: string;
    floatingBadge1Sub: string;
    floatingBadge2Sub: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    mission: string;
    learnMore: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    viewAll: string;
    learnMore: string;
  };
  products: {
    badge: string;
    title: string;
    subtitle: string;
    viewAll: string;
    viewDetail: string;
    contactPrice: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    viewAll: string;
    viewDetail: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
  };
  partners: {
    badge: string;
    title: string;
    subtitle: string;
    subtitleIntl: string;
    statText: string;
    categoryBank: string;
    categoryIndustry: string;
    categoryTech: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
    contact: string;
    trust1: string;
    trust2: string;
    trust3: string;
  };
  header: {
    allProducts: string;
    productCategories: {
      storage: string;
      camera: string;
      network: string;
      server: string;
      ups: string;
    };
  };
  footer: {
    tagline: string;
    newsletter: { title: string; placeholder: string; button: string };
    quickLinks: string;
    quickLinksItems: string[];
    servicesLabel: string;
    servicesItems: string[];
    contact: string;
    address: string;
    phone: string;
    email: string;
    copyright: string;
    subscribeSuccess: string;
    policyLinks: { privacy: string; terms: string };
  };
  contact: {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    send: string;
    sending: string;
    success: string;
  };
  intlStrip: {
    badge1: string;
    badge1Sub: string;
    badge2: string;
    badge2Sub: string;
    badge3: string;
    badge3Sub: string;
    badge4: string;
    badge4Sub: string;
  };
}

const vi: Translations = {
  nav: {
    home: "Trang chủ",
    about: "Giới thiệu",
    services: "Dịch vụ",
    products: "Sản phẩm",
    projects: "Dự án",
    news: "Tin tức",
    contact: "Liên hệ",
    getQuote: "Nhận báo giá",
  },
  hero: {
    badge: "Giải pháp CNTT toàn diện",
    title: "Đối tác CNTT\ntin cậy của doanh nghiệp",
    subtitle:
      "GVN cung cấp giải pháp công nghệ thông tin tổng thể: từ tư vấn, thiết kế, thi công đến bảo trì hạ tầng CNTT cho doanh nghiệp.",
    cta1: "Xem dịch vụ",
    cta2: "Liên hệ ngay",
    stat1: { value: "10+", label: "Năm kinh nghiệm" },
    stat2: { value: "200+", label: "Dự án hoàn thành" },
    stat3: { value: "50+", label: "Khách hàng tin tưởng" },
    floatingBadge1: "200+ Dự án",
    floatingBadge1Sub: "Hoàn thành thành công",
    floatingBadge2Sub: "Đánh giá khách hàng",
  },
  about: {
    badge: "Về chúng tôi",
    title: "Hơn 10 năm đồng hành cùng doanh nghiệp",
    subtitle:
      "GVN (GVNTMC) là công ty CNTT chuyên cung cấp giải pháp và dịch vụ công nghệ thông tin toàn diện cho doanh nghiệp tại Việt Nam.",
    mission:
      "Sứ mệnh của chúng tôi là trở thành đối tác CNTT tin cậy, giúp doanh nghiệp tối ưu hóa hạ tầng công nghệ, nâng cao năng suất và bảo vệ dữ liệu quan trọng.",
    learnMore: "Tìm hiểu thêm",
  },
  services: {
    badge: "Dịch vụ",
    title: "Giải pháp CNTT toàn diện",
    subtitle: "Chúng tôi cung cấp đầy đủ các dịch vụ CNTT từ tư vấn, triển khai đến vận hành và bảo trì.",
    viewAll: "Xem tất cả dịch vụ",
    learnMore: "Tìm hiểu thêm",
  },
  products: {
    badge: "Sản phẩm",
    title: "Thiết bị CNTT chính hãng",
    subtitle: "Phân phối chính hãng các thiết bị CNTT từ những thương hiệu hàng đầu thế giới.",
    viewAll: "Xem tất cả sản phẩm",
    viewDetail: "Xem chi tiết",
    contactPrice: "Liên hệ báo giá",
  },
  projects: {
    badge: "Dự án tiêu biểu",
    title: "Công trình chúng tôi đã thực hiện",
    subtitle: "Những dự án CNTT nổi bật mà GVN đã triển khai thành công cho các đối tác lớn.",
    viewAll: "Xem tất cả dự án",
    viewDetail: "Xem chi tiết",
  },
  testimonials: {
    badge: "Đánh giá",
    title: "Khách hàng nói gì về chúng tôi",
    subtitle: "Những phản hồi thực tế từ các đối tác và khách hàng đã tin tưởng sử dụng dịch vụ của GVN.",
  },
  partners: {
    badge: "Đối tác",
    title: "Đối tác & khách hàng tin tưởng",
    subtitle: "GVN tự hào là đối tác CNTT được tin tưởng bởi hàng chục tập đoàn lớn trong và ngoài nước.",
    subtitleIntl: "Bao gồm 15+ tập đoàn Hàn Quốc đang hoạt động tại Việt Nam",
    statText: "15 đối tác · 3 lĩnh vực · 10+ năm hợp tác",
    categoryBank: "🏦 Ngân hàng Hàn Quốc",
    categoryIndustry: "🏭 Tập đoàn công nghiệp",
    categoryTech: "💻 Công nghệ",
  },
  cta: {
    title: "Sẵn sàng nâng cấp hạ tầng CNTT?",
    subtitle:
      "Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận báo giá tốt nhất cho dự án của bạn.",
    button: "Nhận báo giá miễn phí",
    contact: "Gọi cho chúng tôi",
    trust1: "Tư vấn miễn phí",
    trust2: "Phản hồi trong 2 giờ",
    trust3: "Không ràng buộc hợp đồng",
  },
  header: {
    allProducts: "Tất cả sản phẩm →",
    productCategories: {
      storage: "Lưu trữ (SSD/HDD/NAS)",
      camera: "Camera an ninh",
      network: "Thiết bị mạng",
      server: "Máy chủ",
      ups: "UPS & Nguồn điện",
    },
  },
  footer: {
    tagline: "Đối tác CNTT toàn diện – Giải pháp công nghệ cho doanh nghiệp.",
    newsletter: {
      title: "Đăng ký nhận tin",
      placeholder: "Nhập email của bạn",
      button: "Đăng ký",
    },
    quickLinks: "Liên kết nhanh",
    quickLinksItems: [
      "Trang chủ",
      "Giới thiệu",
      "Dịch vụ",
      "Sản phẩm",
      "Dự án",
      "Tin tức",
      "Liên hệ",
      "Báo giá",
    ],
    servicesLabel: "Dịch vụ",
    servicesItems: [
      "Bảo trì hệ thống CNTT",
      "IT Outsourcing",
      "Camera an ninh",
      "Thi công hạ tầng",
      "Thiết bị ngân hàng",
    ],
    contact: "Liên hệ",
    address: "Địa chỉ",
    phone: "Điện thoại",
    email: "Email",
    copyright: "© 2024 GVNTMC. Bảo lưu mọi quyền.",
    subscribeSuccess: "Cảm ơn bạn đã đăng ký!",
    policyLinks: { privacy: "Chính sách bảo mật", terms: "Điều khoản sử dụng" },
  },
  contact: {
    name: "Họ và tên",
    email: "Email",
    phone: "Số điện thoại",
    company: "Công ty",
    message: "Nội dung",
    send: "Gửi tin nhắn",
    sending: "Đang gửi...",
    success: "Tin nhắn của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại sớm nhất.",
  },
  intlStrip: {
    badge1: "Đối tác FDI Hàn Quốc",
    badge1Sub: "Shinhan · Hyosung · LG · Doosan",
    badge2: "Hỗ trợ song ngữ",
    badge2Sub: "Tiếng Việt & Tiếng Anh",
    badge3: "Bảo mật cấp ngân hàng",
    badge3Sub: "Tuân thủ tiêu chuẩn quốc tế",
    badge4: "Phản hồi 24/7",
    badge4Sub: "Hỗ trợ kỹ thuật liên tục",
  },
};

const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    products: "Products",
    projects: "Projects",
    news: "News",
    contact: "Contact",
    getQuote: "Get a Quote",
  },
  hero: {
    badge: "Comprehensive IT Solutions",
    title: "Your Trusted\nIT Partner",
    subtitle:
      "GVN provides comprehensive IT solutions: from consulting, design, implementation to maintenance of IT infrastructure for businesses.",
    cta1: "Our Services",
    cta2: "Contact Us",
    stat1: { value: "10+", label: "Years of Experience" },
    stat2: { value: "200+", label: "Projects Completed" },
    stat3: { value: "50+", label: "Trusted Clients" },
    floatingBadge1: "200+ Projects",
    floatingBadge1Sub: "Successfully Completed",
    floatingBadge2Sub: "Client Rating",
  },
  about: {
    badge: "About Us",
    title: "10+ Years Supporting Businesses",
    subtitle:
      "GVN (GVNTMC) is an IT company specializing in comprehensive IT solutions and services for businesses in Vietnam.",
    mission:
      "Our mission is to be a trusted IT partner, helping businesses optimize their technology infrastructure, improve productivity and protect critical data.",
    learnMore: "Learn More",
  },
  services: {
    badge: "Services",
    title: "Comprehensive IT Solutions",
    subtitle: "We provide full IT services from consulting, implementation to operation and maintenance.",
    viewAll: "View All Services",
    learnMore: "Learn More",
  },
  products: {
    badge: "Products",
    title: "Genuine IT Equipment",
    subtitle: "Official distribution of IT equipment from the world's leading brands.",
    viewAll: "View All Products",
    viewDetail: "View Details",
    contactPrice: "Contact for Price",
  },
  projects: {
    badge: "Featured Projects",
    title: "Projects We Have Completed",
    subtitle: "Outstanding IT projects that GVN has successfully deployed for major partners.",
    viewAll: "View All Projects",
    viewDetail: "View Details",
  },
  testimonials: {
    badge: "Testimonials",
    title: "What Our Clients Say",
    subtitle: "Real feedback from partners and clients who have trusted GVN's services.",
  },
  partners: {
    badge: "Partners",
    title: "Trusted Partners & Clients",
    subtitle: "GVN is proud to be the trusted IT partner of dozens of major corporations.",
    subtitleIntl: "Including 15+ Korean corporations operating in Vietnam",
    statText: "15 partners · 3 sectors · 10+ years of partnership",
    categoryBank: "🏦 Korean Banks",
    categoryIndustry: "🏭 Korean Industry",
    categoryTech: "💻 Technology",
  },
  cta: {
    title: "Ready to Upgrade Your IT Infrastructure?",
    subtitle:
      "Contact us today for a free consultation and the best quote for your project.",
    button: "Get a Free Quote",
    contact: "Call Us",
    trust1: "Free Consultation",
    trust2: "Response within 2 hours",
    trust3: "No contract lock-in",
  },
  header: {
    allProducts: "All Products →",
    productCategories: {
      storage: "Storage (SSD/HDD/NAS)",
      camera: "Security Cameras",
      network: "Network Equipment",
      server: "Servers",
      ups: "UPS & Power Supply",
    },
  },
  footer: {
    tagline: "Comprehensive IT Partner – Technology solutions for businesses.",
    newsletter: {
      title: "Newsletter",
      placeholder: "Enter your email",
      button: "Subscribe",
    },
    quickLinks: "Quick Links",
    quickLinksItems: [
      "Home",
      "About",
      "Services",
      "Products",
      "Projects",
      "News",
      "Contact",
      "Get a Quote",
    ],
    servicesLabel: "Services",
    servicesItems: [
      "IT System Maintenance",
      "IT Outsourcing",
      "Security Camera Systems",
      "Infrastructure Installation",
      "Banking Equipment",
    ],
    contact: "Contact",
    address: "Address",
    phone: "Phone",
    email: "Email",
    copyright: "© 2024 GVNTMC. All rights reserved.",
    subscribeSuccess: "Thank you for subscribing!",
    policyLinks: { privacy: "Privacy Policy", terms: "Terms of Use" },
  },
  contact: {
    name: "Full Name",
    email: "Email",
    phone: "Phone Number",
    company: "Company",
    message: "Message",
    send: "Send Message",
    sending: "Sending...",
    success: "Your message has been sent successfully! We will get back to you soon.",
  },
  intlStrip: {
    badge1: "Korean FDI Partners",
    badge1Sub: "Shinhan · Hyosung · LG · Doosan",
    badge2: "Bilingual Support",
    badge2Sub: "Vietnamese & English",
    badge3: "Banking-Grade Security",
    badge3Sub: "International standards compliance",
    badge4: "24/7 Response",
    badge4Sub: "Continuous technical support",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "vi",
  setLanguage: () => {},
  t: vi,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi");

  const t = language === "vi" ? vi : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
