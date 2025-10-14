import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const newsList = [
  {
    id: 1,
    title: "Highlands Coffee khai trương cửa hàng thứ 600 tại Việt Nam!",
    image:
      "https://highlandscoffee-dn.s3.ap-southeast-1.amazonaws.com/uploads/news/news-600.jpg",
    date: "10/10/2025",
    description:
      "Đánh dấu cột mốc quan trọng, Highlands Coffee tiếp tục mở rộng mạng lưới trên toàn quốc, mang hương vị cà phê Việt đến gần hơn với mọi người.",
  },
  {
    id: 2,
    title: "Ra mắt thức uống mới – Trà Sen Vàng đá xay",
    image:
      "https://highlandscoffee-dn.s3.ap-southeast-1.amazonaws.com/uploads/news/new-drink.jpg",
    date: "01/10/2025",
    description:
      "Mùa thu này, Highlands Coffee mang đến trải nghiệm mới với vị trà sen vàng thanh mát, kết hợp cùng đá xay béo ngậy – lựa chọn hoàn hảo cho ngày nắng.",
  },
  {
    id: 3,
    title: "Highlands Coffee đồng hành cùng chương trình 'Cà phê vì cộng đồng'",
    image:
      "https://highlandscoffee-dn.s3.ap-southeast-1.amazonaws.com/uploads/news/community.jpg",
    date: "25/09/2025",
    description:
      "Hơn 200 nhân viên Highlands tham gia hoạt động thiện nguyện, chia sẻ yêu thương và lan tỏa tinh thần tích cực đến những hoàn cảnh khó khăn.",
  },
];

const NewsPage = () => {
  return (
    <div className="bg-white text-[#3c1e1e] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#7b1e1e] to-[#a72626] py-16 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold tracking-wide uppercase md:text-5xl"
        >
          Tin Tức & Sự Kiện
        </motion.h1>
        <p className="mt-3 text-lg text-white/90">
          Cập nhật những thông tin mới nhất từ Highlands Coffee
        </p>
      </section>

      {/* Danh sách tin tức */}
      <section className="grid max-w-6xl gap-10 px-6 py-16 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {newsList.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#fdf7f4] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-56"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-[#a72626] mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                {item.date}
              </div>
              <h3 className="text-lg font-semibold text-[#7b1e1e] mb-2">
                {item.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
              <button className="flex items-center text-[#a72626] font-medium group">
                Đọc thêm{" "}
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Banner CTA */}
      <section className="bg-[#7b1e1e] text-white py-16 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-3xl font-bold md:text-4xl"
        >
          Highlands Coffee – Nâng tầm hương vị Việt
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-white/90">
          Cùng theo dõi Highlands Coffee để không bỏ lỡ những tin tức, sự kiện
          và sản phẩm mới nhất!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-[#7b1e1e] px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#f5f5f5] transition"
        >
          Theo dõi ngay
        </motion.button>
      </section>
    </div>
  );
};

export default NewsPage;
