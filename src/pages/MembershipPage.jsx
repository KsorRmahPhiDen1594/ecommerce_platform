import React from "react";
import { motion } from "framer-motion";
import { Star, Gift, Coffee, Crown } from "lucide-react";

const MembershipPage = () => {
  return (
    <div className="bg-[#fffaf7] min-h-screen text-[#3c1e1e]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#7b1e1e] to-[#a72626] py-16 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold uppercase md:text-5xl"
        >
          Chương Trình Thành Viên
        </motion.h1>
        <p className="max-w-2xl mx-auto mt-3 text-lg text-white/90">
          Trở thành thành viên Highlands Coffee để tận hưởng ưu đãi độc quyền,
          tích điểm và nhận quà hấp dẫn mỗi ngày!
        </p>
      </section>

      {/* Lợi ích */}
      <section className="max-w-6xl px-6 mx-auto py-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-4xl font-bold mb-12 text-[#7b1e1e]"
        >
          Quyền Lợi Thành Viên
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Item 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-[#e5c7b0] rounded-2xl shadow-lg p-6 text-center"
          >
            <Crown className="w-12 h-12 text-[#a72626] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#7b1e1e] mb-2">
              Thành viên Vàng
            </h3>
            <p className="text-gray-600">
              Tích lũy điểm thưởng nhanh hơn và nhận quà sinh nhật đặc biệt từ
              Highlands Coffee.
            </p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-[#e5c7b0] rounded-2xl shadow-lg p-6 text-center"
          >
            <Gift className="w-12 h-12 text-[#a72626] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#7b1e1e] mb-2">
              Ưu đãi độc quyền
            </h3>
            <p className="text-gray-600">
              Nhận các ưu đãi, voucher, combo đặc biệt chỉ dành riêng cho thành
              viên thân thiết.
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-[#e5c7b0] rounded-2xl shadow-lg p-6 text-center"
          >
            <Coffee className="w-12 h-12 text-[#a72626] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#7b1e1e] mb-2">
              Tích điểm & đổi quà
            </h3>
            <p className="text-gray-600">
              Mỗi ly cà phê bạn thưởng thức giúp bạn tích thêm điểm để đổi lấy
              những phần quà ý nghĩa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cấp độ thành viên */}
      <section className="bg-[#f8ebe4] py-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-[#7b1e1e] mb-10"
          >
            Các Cấp Độ Thành Viên
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-[#e5c7b0] rounded-xl p-6 shadow-md"
            >
              <Star className="w-10 h-10 text-[#a72626] mx-auto mb-3" />
              <h3 className="font-semibold text-[#7b1e1e] text-lg mb-1">
                Silver Member
              </h3>
              <p className="text-sm text-gray-600">
                Tích điểm 5% mỗi hóa đơn. Nhận ưu đãi định kỳ.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-[#e5c7b0] rounded-xl p-6 shadow-md"
            >
              <Star className="w-10 h-10 text-[#a72626] mx-auto mb-3" />
              <h3 className="font-semibold text-[#7b1e1e] text-lg mb-1">
                Gold Member
              </h3>
              <p className="text-sm text-gray-600">
                Tích điểm 10% mỗi hóa đơn. Ưu tiên đặt hàng nhanh hơn.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-[#e5c7b0] rounded-xl p-6 shadow-md"
            >
              <Crown className="w-10 h-10 text-[#a72626] mx-auto mb-3" />
              <h3 className="font-semibold text-[#7b1e1e] text-lg mb-1">
                Diamond Member
              </h3>
              <p className="text-sm text-gray-600">
                Ưu đãi VIP, quà sinh nhật đặc biệt & quyền tham gia sự kiện
                Highlands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Đăng ký */}
      <section className="py-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#7b1e1e] mb-6"
        >
          Trở Thành Thành Viên Ngay Hôm Nay!
        </motion.h2>
        <p className="max-w-xl mx-auto mb-8 text-gray-600">
          Đăng ký tài khoản Highlands Rewards để nhận những ưu đãi hấp dẫn và
          tích điểm đổi quà cho mỗi ly cà phê bạn yêu thích.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-to-r from-[#a72626] to-[#d84e2a] text-white font-semibold px-8 py-3 rounded-full shadow-lg"
        >
          Đăng ký thành viên
        </motion.button>
      </section>
    </div>
  );
};

export default MembershipPage;
