import React from "react";
import { motion } from "framer-motion";
import { Coffee, Users, Heart, Leaf, ShieldCheck, Globe } from "lucide-react";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Nguyễn Minh Khang",
      role: "Giám đốc điều hành (CEO)",
      alt: "Nguyễn Minh Khang",
      image_placeholder: "Highlands CEO avatar",
    },
    {
      name: "Lê Bảo Trâm",
      role: "Trưởng bộ phận Marketing",
      alt: "Lê Bảo Trâm",
      image_placeholder: "Highlands Marketing avatar",
    },
    {
      name: "Phạm Hoàng Nam",
      role: "Quản lý chuỗi cửa hàng",
      alt: "Phạm Hoàng Nam",
      image_placeholder: "Highlands Store Manager avatar",
    },
    {
      name: "Trần Thu Thảo",
      role: "Chuyên viên sáng tạo đồ uống",
      alt: "Trần Thu Thảo",
      image_placeholder: "Highlands Coffee Specialist avatar",
    },
  ];

  const values = [
    {
      title: "Chất lượng hàng đầu",
      description:
        "Highlands Coffee cam kết mang đến từng ly cà phê đậm đà hương vị Việt với nguồn nguyên liệu tuyển chọn kỹ lưỡng.",
      icon: ShieldCheck,
    },
    {
      title: "Tôn vinh giá trị Việt",
      description:
        "Mỗi sản phẩm của chúng tôi đều kể câu chuyện về văn hóa Việt Nam – thân quen, gần gũi và tự hào.",
      icon: Heart,
    },
    {
      title: "Bền vững và thân thiện",
      description:
        "Hướng đến phát triển bền vững, bảo vệ môi trường và cộng đồng địa phương nơi Highlands hiện diện.",
      icon: Leaf,
    },
    {
      title: "Kết nối cộng đồng",
      description:
        "Highlands Coffee không chỉ là nơi thưởng thức cà phê, mà còn là điểm đến để sẻ chia, kết nối và lan tỏa niềm vui.",
      icon: Globe,
    },
  ];

  return (
    <div className="container py-8 mx-auto md:py-12">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center md:mb-16"
      >
        <Coffee className="w-16 h-16 mx-auto mb-4 md:h-20 md:w-20 text-amber-700" />
        <h1 className="mb-3 text-4xl font-bold text-amber-800 md:text-5xl">
          Về Highlands Coffee
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          Highlands Coffee – thương hiệu cà phê Việt được xây dựng với niềm tự hào
          dân tộc, mang đến hương vị cà phê đậm đà và không gian sẻ chia ấm áp.
        </p>
      </motion.section>

      {/* Sứ mệnh */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="mb-6 text-2xl font-semibold text-center md:text-3xl md:mb-8 text-amber-800">
          Sứ Mệnh Của Chúng Tôi
        </h2>
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <img
              className="object-cover w-full h-auto rounded-lg shadow-xl aspect-video"
              alt="Không gian Highlands Coffee ấm cúng"
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            />
          </div>
          <div className="space-y-4 leading-relaxed text-muted-foreground text-md">
            <p>
              Tại Highlands Coffee, chúng tôi bắt đầu hành trình của mình với mong
              muốn tôn vinh giá trị Việt qua hạt cà phê Việt. Mỗi ly cà phê được
              tạo nên từ niềm đam mê, sự tận tâm và lòng tự hào dân tộc.
            </p>
            <p>
              Chúng tôi không ngừng cải tiến, đổi mới để mang lại cho khách hàng
              những trải nghiệm cà phê độc đáo và gần gũi – nơi mọi người có thể
              tìm thấy niềm vui, sự kết nối và cảm hứng mỗi ngày.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Giá trị cốt lõi */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="mb-6 text-2xl font-semibold text-center md:text-3xl md:mb-8 text-amber-800">
          Giá Trị Cốt Lõi
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="p-6 text-center transition-shadow rounded-lg shadow-lg bg-card hover:shadow-xl"
            >
              <value.icon className="w-12 h-12 mx-auto mb-4 text-amber-700" />
              <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Đội ngũ */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="mb-6 text-2xl font-semibold text-center md:text-3xl md:mb-8 text-amber-800">
          Đội Ngũ Của Chúng Tôi
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
              className="p-4 text-center transition-shadow rounded-lg shadow bg-card hover:shadow-lg"
            >
              <img
                className="object-cover w-24 h-24 mx-auto mb-3 border-2 rounded-full md:w-32 md:h-32 border-amber-700"
                alt={member.alt}
                src="https://images.unsplash.com/photo-1697256200022-f61abccad430"
              />
              <h3 className="font-semibold text-md">{member.name}</h3>
              <p className="text-xs text-amber-700">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
