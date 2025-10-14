import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Send } from "lucide-react";

const jobList = [
  {
    id: 1,
    title: "Nhân viên Pha Chế (Barista)",
    location: "TP. Hồ Chí Minh",
    type: "Toàn thời gian",
    description:
      "Trực tiếp pha chế đồ uống theo tiêu chuẩn Highlands Coffee, đảm bảo chất lượng và tốc độ phục vụ cho khách hàng.",
  },
  {
    id: 2,
    title: "Quản lý Cửa Hàng (Store Manager)",
    location: "Hà Nội",
    type: "Toàn thời gian",
    description:
      "Quản lý hoạt động cửa hàng, đội ngũ nhân viên, chất lượng phục vụ và doanh thu. Đảm bảo hình ảnh Highlands Coffee chuyên nghiệp.",
  },
  {
    id: 3,
    title: "Nhân viên Phục Vụ (Service Crew)",
    location: "Đà Nẵng",
    type: "Bán thời gian",
    description:
      "Đón tiếp khách hàng, hỗ trợ gọi món và phục vụ tại quầy. Giữ gìn không gian sạch sẽ, thân thiện.",
  },
];

const CareersPage = () => {
  return (
    <div className="bg-[#fffaf7] text-[#3c1e1e] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#7b1e1e] to-[#a72626] py-16 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-wide uppercase md:text-5xl"
        >
          Tuyển Dụng Highlands Coffee
        </motion.h1>
        <p className="mt-3 text-lg text-white/90">
          Cùng chúng tôi lan tỏa hương vị cà phê Việt – Đậm Đà & Tự Hào!
        </p>
      </section>

      {/* Danh sách việc làm */}
      <section className="max-w-5xl px-6 mx-auto py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#7b1e1e]">
          Vị trí đang tuyển
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {jobList.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white shadow-md rounded-2xl p-6 border border-[#f0d5c8] hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#7b1e1e] mb-2">
                {job.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600">{job.description}</p>
              <div className="flex flex-wrap gap-4 mb-5 text-sm text-gray-700">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-[#a72626]" /> {job.location}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-[#a72626]" /> {job.type}
                </span>
              </div>
              <button className="flex items-center gap-2 bg-[#7b1e1e] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#a72626] transition">
                <Send className="w-4 h-4" />
                Ứng tuyển ngay
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form ứng tuyển */}
      <section className="bg-[#7b1e1e] text-white py-16 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-3xl font-bold"
        >
          Gửi hồ sơ ứng tuyển
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/80">
          Bạn yêu thích không khí của Highlands? Hãy để lại thông tin của bạn, chúng tôi sẽ liên hệ ngay khi có vị trí phù hợp!
        </p>

        <form className="max-w-xl p-6 mx-auto space-y-4 text-left bg-white/10 backdrop-blur-md rounded-2xl">
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-full p-3 text-white rounded-lg bg-white/20 placeholder-white/60 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 text-white rounded-lg bg-white/20 placeholder-white/60 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            className="w-full p-3 text-white rounded-lg bg-white/20 placeholder-white/60 focus:outline-none"
          />
          <textarea
            placeholder="Giới thiệu ngắn gọn về bản thân"
            className="w-full p-3 text-white rounded-lg bg-white/20 placeholder-white/60 focus:outline-none h-28"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#f5de9e] text-[#7b1e1e] font-semibold py-3 rounded-xl hover:bg-[#ffe9b6] transition"
          >
            Gửi hồ sơ
          </button>
        </form>
      </section>
    </div>
  );
};

export default CareersPage;
