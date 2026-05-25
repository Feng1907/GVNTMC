"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AboutIntroSection() {
  return (
    <section className="bg-gradient-to-b from-[#EBF0FB] to-white py-16 md:py-24">
      <div className="container-custom">
        {/* Page heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-12 md:mb-16"
        >
          <span className="badge mb-4 block w-fit">Về chúng tôi</span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
            Giới thiệu <span className="text-primary">GVN</span>
          </h1>
        </motion.div>

        {/* Content paragraphs */}
        <div className="max-w-4xl space-y-7">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-text-secondary text-lg leading-[1.9]"
          >
            <strong className="text-text-primary font-semibold">GVN</strong> được thành lập vào
            năm&nbsp;2013, chúng tôi tự hào vì sự phát triển và kết nối được với nhiều khách hàng
            trong thời gian ngắn, với tên đầy đủ là{" "}
            <strong className="text-text-primary font-semibold">
              CÔNG TY TNHH BẢO DƯỠNG CÔNG NGHỆ TOÀN CẦU VN
            </strong>
            , hoạt động trong lĩnh vực thi công công trình, công nghệ thông tin và bảo trì hệ thống
            thiết bị công nghệ thông tin. Chúng tôi luôn cố gắng nỗ lực hết mình để theo kịp thời
            đại toàn cầu hóa và không ngừng phát triển thông qua sự đổi mới toàn diện.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-text-secondary text-lg leading-[1.9]"
          >
            Với nhiều năm kinh nghiệm trong lĩnh vực thi công công trình và bảo trì hệ thống mạng
            cho các tổ chức tài chính, doanh nghiệp, công ty, xí nghiệp,{" "}
            <strong className="text-text-primary font-semibold">GVN</strong> đã đáp ứng được nhu
            cầu đa dạng của khách hàng đang hoạt động kinh doanh tại Việt Nam, đề xuất, tư vấn
            các thiết bị có cấu hình phù hợp nhất, vận hành hệ thống mạng hoạt động ổn định nhất,
            duy trì và bảo trì hệ thống thiết bị mạng một cách chuyên nghiệp nhất.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="text-text-secondary text-lg leading-[1.9]"
          >
            Khát khao của{" "}
            <strong className="text-text-primary font-semibold">GVN</strong> là cùng nhau phát
            triển với khách hàng bằng việc thực hiện trách nhiệm của mình một cách tận tâm nhất để
            nâng cao lòng tin của khách hàng hơn là theo đuổi lợi nhuận tức thời. Dựa trên kinh
            nghiệm của chúng tôi và đội ngũ nhân viên kỹ thuật cao, chúng tôi sẽ tiếp tục làm hết
            sức mình và mong rằng sẽ nhận được thật nhiều sự quan tâm của khách hàng.
          </motion.p>
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-14 h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent origin-left"
        />
      </div>
    </section>
  );
}
