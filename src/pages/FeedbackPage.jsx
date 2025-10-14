import React from "react";
import { motion } from "framer-motion";
import { Star, Send, Coffee } from "lucide-react";

const FeedbackPage = () => {
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
          Góp Ý & Phản Hồi
        </h1>
        <p className="text-lg text-[#3E2723]/80">
          Mỗi ý kiến của bạn là một tách cà phê đong đầy cảm xúc giúp chúng tôi
          hoàn thiện hơn từng ngày.
        </p>
      </motion.div>
      {/* Section 1 */}
      <section className="grid items-center max-w-6xl gap-12 px-6 py-20 mx-auto md:grid-cols-2">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2 className="text-3xl font-bold text-[#7b1e1e]">
            Chia sẻ cảm nhận của bạn ☕
          </h2>
          <p className="leading-relaxed text-gray-700">
            Chúng tôi tin rằng mỗi khách hàng đều có câu chuyện riêng cùng
            Highlands Coffee. Hãy kể cho chúng tôi nghe về trải nghiệm của bạn —
            từng ly cà phê, từng nụ cười, từng khoảnh khắc đáng nhớ.
          </p>
          <p className="text-gray-600">
            Phản hồi của bạn sẽ giúp Highlands không chỉ phục vụ cà phê ngon
            hơn, mà còn mang đến những giây phút ý nghĩa hơn.
          </p>
        </motion.div>

        <motion.img
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=60"
          alt="Highlands Coffee Experience"
          className="transition duration-300 rounded-xl hover:scale-105"
        />
      </section>

      {/* Section 2 */}
      <section className="grid items-center max-w-6xl gap-12 px-6 py-20 mx-auto md:grid-cols-2">
        <motion.img
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=60"
          alt="Coffee Feedback"
          className="order-1 transition duration-300 rounded-xl hover:scale-105 md:order-1"
        />

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-2 space-y-5 md:order-2"
        >
          <h2 className="text-3xl font-bold text-[#7b1e1e]">
            Đánh giá & góp ý của bạn
          </h2>
          <p className="leading-relaxed text-gray-700">
            Chúng tôi lắng nghe mọi lời khen, mọi góp ý, dù nhỏ nhất. Đó chính
            là hạt giống để Highlands Coffee vươn mình và phục vụ bạn tốt hơn
            từng ngày.
          </p>
          <p className="text-gray-600">
            Hãy để lại cảm nhận của bạn dưới đây – Highlands sẽ luôn trân trọng
            từng chia sẻ!
          </p>
        </motion.div>
      </section>

      {/* ✅ Timeline tiếp nhận phản hồi */}
      <section className="max-w-4xl px-6 py-10 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-6 text-xl font-semibold text-center">
            Quy trình tiếp nhận phản hồi
          </h3>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <Coffee className="text-[#a72626] mt-1" />
              <span>
                <strong>1.</strong> Bạn gửi góp ý bằng form bên dưới.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Coffee className="text-[#a72626] mt-1" />
              <span>
                <strong>2.</strong> Đội ngũ của chúng tôi tiếp nhận và đánh giá
                thông tin.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Coffee className="text-[#a72626] mt-1" />
              <span>
                <strong>3.</strong> Highlands điều chỉnh và cải thiện dịch vụ
                nếu cần thiết.
              </span>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Form góp ý */}
      <section className="max-w-3xl px-6 py-16 mx-auto">
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md border border-[#f0d5c8] p-8 md:p-10 space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-semibold">
              Họ và tên
            </label>
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
            <div className="flex gap-2 text-[#f5b301] text-2xl">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="transition cursor-pointer hover:scale-110"
                />
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

        {/* ✅ Nhẹ nhàng cảm ơn dưới form */}
        <p className="mt-6 text-sm text-center text-gray-500">
          Cảm ơn bạn đã dành thời gian chia sẻ với Highlands ☕
        </p>
      </section>
    </div>
  );
};

export default FeedbackPage;
