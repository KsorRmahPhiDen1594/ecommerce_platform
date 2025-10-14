import React from "react";
import { Coffee, Store, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const FranchisePage = () => {
  return (
    <div className="min-h-screen text-[#3c1e1e] overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 mb-10 text-center"
      >
        <Coffee className="w-16 h-16 mx-auto mb-4 text-[#7B241C]" />
        <h1 className="mb-2 text-3xl font-bold md:text-4xl bg-gradient-to-r from-[#5A1E1E] via-[#7B241C] to-[#3E2723] bg-clip-text text-transparent">
          {" "}
          Nhượng Quyền Highlands Coffee
        </h1>
        <p className="text-lg text-[#3E2723]/80">
          Trở thành đối tác cùng thương hiệu cà phê hàng đầu Việt Nam — cùng
          nhau lan tỏa hương vị Việt đậm đà khắp mọi miền đất nước.
        </p>
      </motion.div>

      {/* Giới thiệu */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid items-center gap-10 md:grid-cols-2"
        >
          <img
            src="https://bizweb.dktcdn.net/100/487/455/themes/917232/assets/logo.png?1759892738511"
            alt="Highlands Coffee"
            className="rounded-2xl shadow-xl w-full bg-[#f9f4f1] p-6"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#7b1e1e]">
              Cơ hội hợp tác bền vững
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Highlands Coffee tự hào là thương hiệu Việt được hàng triệu khách
              hàng tin yêu. Với hơn 500 cửa hàng trên toàn quốc, chúng tôi luôn
              mong muốn đồng hành cùng những nhà đầu tư có chung niềm đam mê cà
              phê, kinh doanh và lan tỏa văn hóa thưởng thức cà phê Việt.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Lợi ích */}
      <section className="bg-[#fdf7f4] py-16">
        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#7b1e1e] mb-12">
            Lợi ích khi trở thành đối tác nhượng quyền
          </h2>
          <div className="grid gap-10 text-center md:grid-cols-3">
            {[
              {
                icon: <Coffee className="w-12 h-12 text-[#a72626]" />,
                title: "Thương hiệu mạnh",
                desc: "Được sử dụng thương hiệu Highlands Coffee — uy tín, quen thuộc và được yêu thích khắp Việt Nam.",
              },
              {
                icon: <Store className="w-12 h-12 text-[#a72626]" />,
                title: "Hỗ trợ toàn diện",
                desc: "Được hướng dẫn chi tiết về vận hành, marketing, đào tạo nhân sự và thiết kế không gian cửa hàng.",
              },
              {
                icon: <MapPin className="w-12 h-12 text-[#a72626]" />,
                title: "Mở rộng dễ dàng",
                desc: "Cơ hội mở thêm nhiều chi nhánh với sự hỗ trợ từ hệ thống và đội ngũ chuyên nghiệp của Highlands.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2 text-[#7b1e1e]">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form liên hệ */}
      <section className="max-w-4xl px-6 py-20 mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#7b1e1e] mb-4">
          Đăng ký hợp tác nhượng quyền
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-gray-700">
          Hãy để lại thông tin, đội ngũ Highlands Coffee sẽ liên hệ với bạn để
          tư vấn chi tiết.
        </p>
        <form className="grid gap-6 text-left md:grid-cols-2">
          <input
            type="text"
            placeholder="Họ và tên"
            className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#a72626] outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#a72626] outline-none"
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#a72626] outline-none"
          />
          <input
            type="text"
            placeholder="Khu vực muốn mở cửa hàng"
            className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#a72626] outline-none"
          />
          <textarea
            placeholder="Ghi chú thêm..."
            rows="4"
            className="border border-gray-300 rounded-xl p-3 md:col-span-2 focus:ring-2 focus:ring-[#a72626] outline-none"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="md:col-span-2 bg-gradient-to-r from-[#7b1e1e] to-[#a72626] text-white py-3 rounded-xl font-semibold shadow-lg"
          >
            Gửi thông tin
          </motion.button>
        </form>
      </section>
    </div>
  );
};

export default FranchisePage;
