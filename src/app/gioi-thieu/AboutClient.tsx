"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Users2, TrendingUp, Shield, Zap, Target, Eye } from "lucide-react";

const values = [
  { icon: Shield, title: "Chất lượng", desc: "Cam kết sản phẩm và dịch vụ chất lượng cao, đúng tiêu chuẩn.", color: "text-blue-600 bg-blue-50" },
  { icon: Zap, title: "Hiệu quả", desc: "Tối ưu giải pháp để mang lại hiệu quả tốt nhất với chi phí hợp lý.", color: "text-orange-500 bg-orange-50" },
  { icon: Users2, title: "Tận tâm", desc: "Luôn lắng nghe và đồng hành cùng khách hàng suốt quá trình.", color: "text-green-600 bg-green-50" },
  { icon: TrendingUp, title: "Sáng tạo", desc: "Không ngừng cải tiến và ứng dụng công nghệ mới nhất.", color: "text-purple-600 bg-purple-50" },
];

const milestones = [
  { year: "2014", title: "Thành lập công ty", desc: "GVN được thành lập với sứ mệnh cung cấp giải pháp CNTT cho doanh nghiệp." },
  { year: "2016", title: "Mở rộng dịch vụ", desc: "Phát triển thêm dịch vụ IT Outsourcing và bảo trì hệ thống." },
  { year: "2018", title: "Đối tác Korea", desc: "Ký kết hợp tác chiến lược với các tập đoàn Hàn Quốc lớn tại Việt Nam." },
  { year: "2020", title: "100+ dự án", desc: "Hoàn thành hơn 100 dự án lớn nhỏ trên khắp cả nước." },
  { year: "2022", title: "Mở rộng quy mô", desc: "Tăng đội ngũ lên 50+ nhân sự, mở văn phòng tại Hà Nội." },
  { year: "2024", title: "200+ dự án", desc: "Đạt cột mốc 200+ dự án hoàn thành với 50+ đối tác tin tưởng." },
];

const stats = [
  { icon: Award, value: "10+", label: "Năm kinh nghiệm" },
  { icon: TrendingUp, value: "200+", label: "Dự án hoàn thành" },
  { icon: Users2, value: "50+", label: "Đối tác tin tưởng" },
  { icon: Shield, value: "99.9%", label: "Tỷ lệ hài lòng" },
];

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="badge bg-white/10 border border-white/20 text-white mb-6">Về chúng tôi</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hơn 10 năm đồng hành<br />
              <span className="text-accent">cùng doanh nghiệp</span>
            </h1>
            <p className="text-white/75 text-xl leading-relaxed">
              GVN (GVNTMC) là công ty CNTT chuyên cung cấp giải pháp và dịch vụ công nghệ thông tin toàn diện, trở thành đối tác tin cậy của hàng chục tập đoàn lớn trong và ngoài nước.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-neutral-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-4xl font-bold text-text-primary">{stat.value}</p>
                  <p className="text-text-secondary text-sm mt-1">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Sứ mệnh</h2>
              <p className="text-text-secondary leading-relaxed">
                Trở thành đối tác CNTT tin cậy hàng đầu, giúp doanh nghiệp tối ưu hóa hạ tầng công nghệ, nâng cao năng suất và bảo vệ dữ liệu quan trọng. Chúng tôi cam kết cung cấp giải pháp chất lượng cao, phù hợp với nhu cầu và ngân sách của từng khách hàng.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-primary rounded-3xl p-8 text-white"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Tầm nhìn</h2>
              <p className="text-white/80 leading-relaxed">
                Đến năm 2030, GVN trở thành công ty CNTT hàng đầu tại khu vực Đông Nam Á, được công nhận bởi sự đổi mới, chất lượng dịch vụ và khả năng đáp ứng nhu cầu đa dạng của doanh nghiệp trong kỷ nguyên số.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge mx-auto mb-4"
            >
              Giá trị cốt lõi
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title"
            >
              Điều chúng tôi tin tưởng
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card p-6 text-center group"
                >
                  <div className={`w-16 h-16 ${val.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg text-text-primary mb-2">{val.title}</h3>
                  <p className="text-text-secondary text-sm">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge mx-auto mb-4"
            >
              Lịch sử phát triển
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title"
            >
              Hành trình 10 năm
            </motion.h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-100 -translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white rounded-2xl shadow-card p-6 inline-block w-full md:w-auto max-w-sm">
                      <p className="text-primary font-bold text-sm mb-1">{m.year}</p>
                      <h3 className="font-bold text-text-primary mb-2">{m.title}</h3>
                      <p className="text-text-secondary text-sm">{m.desc}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-10 h-10 bg-primary rounded-full border-4 border-white shadow-md items-center justify-center flex-shrink-0 z-10">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
