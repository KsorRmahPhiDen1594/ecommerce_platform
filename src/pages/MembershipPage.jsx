import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Gift, Coffee, Crown, Send, MessageCircle } from 'lucide-react';

const zigzagData = [
  {
    id: 1,
    title: 'Tích điểm nhanh chóng',
    desc: 'Mỗi ly cà phê bạn thưởng thức sẽ được tích điểm tự động, dễ dàng đổi quà và nhận ưu đãi hấp dẫn.',
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60',
    reverse: false,
  },
  {
    id: 2,
    title: 'Ưu đãi độc quyền dành riêng',
    desc: 'Chỉ dành cho thành viên, bạn sẽ nhận được các voucher, combo và chương trình khuyến mãi hấp dẫn nhất.',
    img: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=60',
    reverse: true,
  },
  {
    id: 3,
    title: 'Quà tặng sinh nhật đặc biệt',
    desc: 'Nhận quà mừng sinh nhật độc quyền từ Highlands Coffee, thể hiện sự trân trọng với khách hàng thân thiết.',
    img: 'https://png.pngtree.com/thumb_back/fh260/background/20220422/pngtree-coffee-in-red-cup-with-gift-envelope-gift-text-birthday-photo-image_22018210.jpg',
    reverse: false,
  },
];

const MembershipPage = () => {
  const formRef = useRef(null);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='min-h-screen text-[#3c1e1e] overflow-hidden'>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='py-16 mb-10 text-center'
      >
        <Coffee className='w-16 h-16 mx-auto mb-4 text-[#7B241C]' />
        <h1 className='mb-2 text-3xl font-bold md:text-4xl bg-gradient-to-r from-[#5A1E1E] via-[#7B241C] to-[#3E2723] bg-clip-text text-transparent'>
          ĐĂNG KÝ THÀNH VIÊN
        </h1>
        <p className='text-lg text-[#3E2723]/80'>Highlands Coffee — Thursday, February, 2025</p>
      </motion.div>

      {/* Giới thiệu lợi ích */}
      <section className='max-w-5xl px-6 mx-auto mb-16 space-y-6'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-2xl md:text-3xl font-bold text-[#7b1e1e]'
        >
          Lợi ích khi trở thành <span className='text-[#a72626]'>KHÁCH HÀNG THÂN THIẾT</span>:
        </motion.h2>

        <ul className='space-y-4 leading-relaxed text-gray-700'>
          <li>
            ☕ <strong>Giảm giá độc quyền:</strong> Nhận ưu đãi giảm giá đặc biệt chỉ dành cho thành
            viên.
          </li>
          <li>
            🎁 <strong>Điểm thưởng:</strong> Tích điểm cho mỗi đơn hàng, đổi quà dễ dàng.
          </li>
          <li>
            ✨ <strong>Ưu tiên sản phẩm mới:</strong> Là người đầu tiên trải nghiệm sản phẩm mới
            nhất.
          </li>
          <li>
            💬 <strong>Dịch vụ khách hàng ưu tiên:</strong> Phản hồi nhanh chóng, tận tâm.
          </li>
        </ul>

        <div className='mt-10 text-center'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollToForm}
            className='bg-gradient-to-r from-[#5A1E1E] via-[#7B241C] to-[#3E2723] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-md hover:opacity-90'
          >
            ĐĂNG KÝ NGAY!
          </motion.button>
        </div>
      </section>

      {/* Zigzag */}
      <section className='max-w-6xl px-6 py-16 mx-auto space-y-24'>
        {zigzagData.map(({ id, title, desc, img, reverse }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, x: reverse ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: id * 0.2 }}
            className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-10`}
          >
            <img
              src={img}
              alt={title}
              className='object-cover w-full shadow-lg md:w-1/2 rounded-3xl max-h-96'
              loading='lazy'
            />
            <div className={`space-y-6 max-w-xl ${reverse ? 'text-right' : 'text-left'}`}>
              <h3 className='text-3xl font-bold text-[#7b1e1e]'>{title}</h3>
              <p className='leading-relaxed text-gray-700'>{desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Form Đăng ký & Bình luận */}
      <section ref={formRef} className='max-w-5xl px-6 py-20 mx-auto'>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='text-3xl font-bold text-[#7b1e1e] mb-6 text-center'
        >
          Viết Bình Luận Của Bạn
        </motion.h2>

        <p className='mb-10 text-center text-gray-600'>
          Địa chỉ email của bạn sẽ được bảo mật. Các trường bắt buộc được đánh dấu *
        </p>

        <form className='max-w-3xl mx-auto space-y-6'>
          <div>
            <label className='block font-semibold text-[#5a1e1e] mb-2'>Nội dung*</label>
            <textarea
              className='w-full border border-[#d7bca3] rounded-lg p-3 h-32 focus:ring-2 focus:ring-[#a72626] outline-none'
              placeholder='Nội dung bình luận của bạn...'
            ></textarea>
          </div>

          <div className='grid gap-6 md:grid-cols-2'>
            <div>
              <label className='block font-semibold text-[#5a1e1e] mb-2'>Họ tên*</label>
              <input
                type='text'
                className='w-full border border-[#d7bca3] rounded-lg p-3 focus:ring-2 focus:ring-[#a72626] outline-none'
                placeholder='Nhập họ tên của bạn'
              />
            </div>
            <div>
              <label className='block font-semibold text-[#5a1e1e] mb-2'>Email*</label>
              <input
                type='email'
                className='w-full border border-[#d7bca3] rounded-lg p-3 focus:ring-2 focus:ring-[#a72626] outline-none'
                placeholder='Nhập email của bạn'
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center justify-center gap-2 bg-gradient-to-r from-[#5A1E1E] via-[#7B241C] to-[#3E2723] text-white font-semibold px-8 py-3 rounded-full shadow-lg mx-auto'
          >
            <Send size={18} /> GỬI BÌNH LUẬN
          </motion.button>
        </form>

        <div className='mt-16 text-center'>
          <p className='text-sm italic text-gray-500'>
            Highlands Coffee rất mong được đồng hành cùng bạn trong hành trình thưởng thức cà phê!
          </p>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;
