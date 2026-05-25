export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Nguyễn Văn Minh",
    title: "IT Manager",
    company: "Shinhan Bank Vietnam",
    avatar: "https://placehold.co/100x100/1B4FBF/ffffff?text=NVM",
    rating: 5,
    quote:
      "GVN đã triển khai hệ thống máy chủ và lưu trữ cho chúng tôi với chất lượng xuất sắc. Đội ngũ kỹ thuật chuyên nghiệp, làm việc đúng tiến độ và đáp ứng đầy đủ các yêu cầu khắt khe của ngành ngân hàng. Đặc biệt, dịch vụ hỗ trợ sau bàn giao rất tận tâm và nhanh chóng. Chúng tôi rất hài lòng và sẽ tiếp tục hợp tác lâu dài với GVN.",
  },
  {
    id: "2",
    name: "Park Ji Hoon",
    title: "General Manager",
    company: "Hyosung Vietnam",
    avatar: "https://placehold.co/100x100/0F3A8F/ffffff?text=PJH",
    rating: 5,
    quote:
      "Chúng tôi đã lựa chọn GVN để thi công hạ tầng CNTT cho nhà máy Hyosung và kết quả vượt xa mong đợi. Hệ thống mạng, camera và loa được thiết kế bài bản, thi công gọn gàng và hoàn thành trước tiến độ. GVN thực sự hiểu yêu cầu của khách hàng Hàn Quốc và đáp ứng đúng tiêu chuẩn của tập đoàn. Tôi sẽ giới thiệu GVN cho các đối tác khác.",
  },
  {
    id: "3",
    name: "Trần Thị Lan Anh",
    title: "Head of Operations",
    company: "KEB Hana Bank Vietnam",
    avatar: "https://placehold.co/100x100/1B4FBF/ffffff?text=TLA",
    rating: 5,
    quote:
      "GVN đã triển khai hệ thống camera an ninh cho toàn bộ chi nhánh của chúng tôi một cách chuyên nghiệp và hiệu quả. Sản phẩm chính hãng, chất lượng cao, và đội ngũ kỹ thuật của GVN luôn sẵn sàng hỗ trợ 24/7 khi có sự cố. Đây là đối tác CNTT tin cậy mà chúng tôi đặt trọn niềm tin.",
  },
];
