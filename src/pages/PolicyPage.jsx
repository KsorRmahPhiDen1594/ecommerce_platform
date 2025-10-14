import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, RefreshCcw, Lock, Gift, FileText } from "lucide-react";

const PolicyPage = () => {
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
          Chính Sách Khách Hàng
        </motion.h1>
        <p className="max-w-2xl mx-auto mt-3 text-lg text-white/90">
          Highlands Coffee cam kết mang đến cho bạn những trải nghiệm tốt nhất —
          từ chất lượng sản phẩm đến dịch vụ tận tâm.
        </p>
      </section>

      {/* Chính sách chính */}
      <section className="grid max-w-6xl gap-8 px-6 py-16 mx-auto md:grid-cols-2">
        {/* Chính sách đổi trả */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-[#e5c7b0] rounded-2xl p-8 shadow-md"
        >
          <div className="flex items-center mb-4">
            <RefreshCcw className="w-8 h-8 text-[#a72626] mr-3" />
            <h2 className="text-2xl font-semibold text-[#7b1e1e]">
              Chính Sách Đổi Trả
            </h2>
          </div>
          <p className="leading-relaxed text-gray-700">
            Highlands Coffee hỗ trợ đổi trả sản phẩm trong vòng{" "}
            <span className="font-semibold">24 giờ</span> kể từ khi nhận hàng
            đối với các trường hợp:
          </p>
          <ul className="mt-3 space-y-1 text-gray-700 list-disc list-inside">
            <li>Sản phẩm không đúng với đơn đặt hàng.</li>
            <li>Sản phẩm bị lỗi do quá trình vận chuyển.</li>
            <li>Không đúng mô tả hoặc có vấn đề về chất lượng.</li>
          </ul>
        </motion.div>

        {/* Chính sách bảo mật */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-[#e5c7b0] rounded-2xl p-8 shadow-md"
        >
          <div className="flex items-center mb-4">
            <Lock className="w-8 h-8 text-[#a72626] mr-3" />
            <h2 className="text-2xl font-semibold text-[#7b1e1e]">
              Chính Sách Bảo Mật
            </h2>
          </div>
          <p className="leading-relaxed text-gray-700">
            Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân của khách
            hàng. Dữ liệu chỉ được sử dụng cho mục đích:
          </p>
          <ul className="mt-3 space-y-1 text-gray-700 list-disc list-inside">
            <li>Giao hàng và chăm sóc khách hàng.</li>
            <li>Cung cấp thông tin ưu đãi, khuyến mãi (nếu có sự đồng ý).</li>
            <li>Không chia sẻ với bên thứ ba khi chưa có sự cho phép.</li>
          </ul>
        </motion.div>

        {/* Chính sách ưu đãi */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white border border-[#e5c7b0] rounded-2xl p-8 shadow-md"
        >
          <div className="flex items-center mb-4">
            <Gift className="w-8 h-8 text-[#a72626] mr-3" />
            <h2 className="text-2xl font-semibold text-[#7b1e1e]">
              Chính Sách Ưu Đãi
            </h2>
          </div>
          <p className="leading-relaxed text-gray-700">
            Khách hàng thân thiết sẽ nhận được ưu đãi hấp dẫn:
          </p>
          <ul className="mt-3 space-y-1 text-gray-700 list-disc list-inside">
            <li>Tặng voucher giảm giá cho đơn hàng kế tiếp.</li>
            <li>Tham gia chương trình “Tích điểm – Đổi quà”.</li>
            <li>Ưu đãi sinh nhật đặc biệt cho thành viên Highlands.</li>
          </ul>
        </motion.div>

        {/* Chính sách bảo hành */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white border border-[#e5c7b0] rounded-2xl p-8 shadow-md"
        >
          <div className="flex items-center mb-4">
            <ShieldCheck className="w-8 h-8 text-[#a72626] mr-3" />
            <h2 className="text-2xl font-semibold text-[#7b1e1e]">
              Chính Sách Bảo Hành
            </h2>
          </div>
          <p className="leading-relaxed text-gray-700">
            Đối với các sản phẩm phụ kiện, Highlands Coffee áp dụng chính sách
            bảo hành trong vòng <span className="font-semibold">7 ngày</span> kể
            từ khi nhận hàng, với điều kiện:
          </p>
          <ul className="mt-3 space-y-1 text-gray-700 list-disc list-inside">
            <li>Có hóa đơn mua hàng hợp lệ.</li>
            <li>Sản phẩm chưa bị tác động bên ngoài.</li>
          </ul>
        </motion.div>
      </section>

      {/* Điều khoản & cam kết */}
      <section className="bg-[#f8ebe4] py-16">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <FileText className="w-12 h-12 text-[#a72626] mx-auto mb-3" />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-[#7b1e1e] mb-4"
          >
            Cam Kết Từ Highlands Coffee
          </motion.h2>
          <p className="max-w-3xl mx-auto leading-relaxed text-gray-700">
            Chúng tôi luôn đặt chất lượng và trải nghiệm của khách hàng lên hàng
            đầu. Mọi sản phẩm của Highlands Coffee đều được pha chế từ hạt cà
            phê chọn lọc, kết hợp cùng quy trình phục vụ chuyên nghiệp để mang
            đến cho bạn những khoảnh khắc thưởng thức tuyệt vời nhất.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PolicyPage;
