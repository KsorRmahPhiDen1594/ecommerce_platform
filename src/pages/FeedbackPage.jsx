import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Star, Send } from "lucide-react";

const FeedbackPage = () => {
  return (
    <div className="bg-[#fffaf7] min-h-screen text-[#3c1e1e]">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#7b1e1e] to-[#a72626] py-16 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold uppercase md:text-5xl"
        >
          Góp Ý & Phản Hồi
        </motion.h1>
        <p className="mt-3 text-lg text-white/90">
          Chúng tôi luôn trân trọng mọi chia sẻ từ bạn để hoàn thiện Highlands Coffee ngày càng tốt hơn!
        </p>
      </section>

      {/* Nội dung */}
      <section className="max-w-3xl px-6 mx-auto py-14">
        <div className="mb-10 text-center">
          <MessageSquare className="w-14 h-14 text-[#7b1e1e] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#7b1e1e]">
            Chia sẻ cảm nhận của bạn
          </h2>
          <p className="mt-2 text-gray-600">
            Hãy cho chúng tôi biết trải nghiệm của bạn tại Highlands Coffee.
          </p>
        </div>

        {/* Form góp ý */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-lg border border-[#f0d5c8] p-6 md:p-8 space-y-5"
        >
          <div>
            <label className="block mb-2 text-sm font-semibold">Họ và tên</label>
            <input
              type="text"
              placeholder="Nhập họ và tên của bạn"
              className="w-full p-3 border border-[#e5c7b0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a72626]/50"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full p-3 border border-[#e5c7b0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a72626]/50"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">
              Đánh giá trải nghiệm
            </label>
            <div className="flex gap-2 text-[#f5b301] text-2xl justify-start">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="transition cursor-pointer hover:scale-110" />
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">
              Nội dung góp ý
            </label>
            <textarea
              placeholder="Chia sẻ suy nghĩ hoặc góp ý của bạn..."
              className="w-full h-32 p-3 border border-[#e5c7b0] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#a72626]/50"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-[#7b1e1e] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#a72626] transition"
          >
            <Send className="w-4 h-4" /> Gửi phản hồi
          </motion.button>
        </motion.form>
      </section>

      {/* Cảm ơn */}
      <section className="bg-[#7b1e1e] text-center text-white py-12">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-3 text-2xl font-semibold"
        >
          Cảm ơn bạn đã đồng hành cùng Highlands Coffee!
        </motion.h3>
        <p className="text-white/80">
          Mọi phản hồi của bạn sẽ giúp chúng tôi phục vụ ngày càng tốt hơn.
        </p>
      </section>
    </div>
  );
};

export default FeedbackPage;
