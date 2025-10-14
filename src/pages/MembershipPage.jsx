import React from 'react';
import { motion } from 'framer-motion';
import { Star, Gift, Coffee, Crown } from 'lucide-react';

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
          {' '}
          Chương Trình Thành Viên Chương Trình Thành Viên
        </h1>
        <p className='text-lg text-[#3E2723]/80'>
          Trở thành thành viên Highlands Coffee để tận hưởng ưu đãi độc quyền, tích điểm và nhận quà
          hấp dẫn mỗi ngày!
        </p>
      </motion.div>

      {/* Zigzag New Section */}
      <section className='max-w-6xl px-6 py-16 mx-auto space-y-24'>
        {zigzagData.map(({ id, title, desc, img, reverse }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, x: reverse ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: id * 0.2 }}
            className={`grid gap-10 md:grid-cols-2 items-center ${
              reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            <img
              src={img}
              alt={title}
              className='object-cover w-full shadow-lg rounded-3xl max-h-96'
              loading='lazy'
            />
            <div className={`space-y-6 max-w-xl ${reverse ? 'text-right' : 'text-left'}`}>
              <h3 className='text-3xl font-bold text-[#7b1e1e]'>{title}</h3>
              <p className='leading-relaxed text-gray-700'>{desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Quyền Lợi Thành Viên */}
      <section className='max-w-6xl px-6 mx-auto py-14'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center text-3xl md:text-4xl font-bold mb-12 text-[#7b1e1e]'
        >
          Quyền Lợi Thành Viên
        </motion.h2>

        <div className='grid gap-8 md:grid-cols-3'>
          {/* Item 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='bg-white border border-[#e5c7b0] rounded-2xl shadow-lg p-6 text-center'
          >
            <Crown className='w-12 h-12 text-[#a72626] mx-auto mb-4' />
            <h3 className='text-xl font-semibold text-[#7b1e1e] mb-2'>Thành viên Vàng</h3>
            <p className='text-gray-600'>
              Tích lũy điểm thưởng nhanh hơn và nhận quà sinh nhật đặc biệt từ Highlands Coffee.
            </p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='bg-white border border-[#e5c7b0] rounded-2xl shadow-lg p-6 text-center'
          >
            <Gift className='w-12 h-12 text-[#a72626] mx-auto mb-4' />
            <h3 className='text-xl font-semibold text-[#7b1e1e] mb-2'>Ưu đãi độc quyền</h3>
            <p className='text-gray-600'>
              Nhận các ưu đãi, voucher, combo đặc biệt chỉ dành riêng cho thành viên thân thiết.
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='bg-white border border-[#e5c7b0] rounded-2xl shadow-lg p-6 text-center'
          >
            <Coffee className='w-12 h-12 text-[#a72626] mx-auto mb-4' />
            <h3 className='text-xl font-semibold text-[#7b1e1e] mb-2'>Tích điểm & đổi quà</h3>
            <p className='text-gray-600'>
              Mỗi ly cà phê bạn thưởng thức giúp bạn tích thêm điểm để đổi lấy những phần quà ý
              nghĩa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cấp độ thành viên */}
      <section className='py-16 '>
        <div className='max-w-5xl mx-auto text-center'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-3xl font-bold text-[#7b1e1e] mb-10'
          >
            Các Cấp Độ Thành Viên
          </motion.h2>

          <div className='grid gap-6 md:grid-cols-3'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-white border border-[#e5c7b0] rounded-xl p-6 shadow-md'
            >
              <Star className='w-10 h-10 text-[#a72626] mx-auto mb-3' />
              <h3 className='font-semibold text-[#7b1e1e] text-lg mb-1'>Silver Member</h3>
              <p className='text-sm text-gray-600'>
                Tích điểm 5% mỗi hóa đơn. Nhận ưu đãi định kỳ.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-white border border-[#e5c7b0] rounded-xl p-6 shadow-md'
            >
              <Star className='w-10 h-10 text-[#a72626] mx-auto mb-3' />
              <h3 className='font-semibold text-[#7b1e1e] text-lg mb-1'>Gold Member</h3>
              <p className='text-sm text-gray-600'>
                Tích điểm 10% mỗi hóa đơn. Ưu tiên đặt hàng nhanh hơn.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-white border border-[#e5c7b0] rounded-xl p-6 shadow-md'
            >
              <Crown className='w-10 h-10 text-[#a72626] mx-auto mb-3' />
              <h3 className='font-semibold text-[#7b1e1e] text-lg mb-1'>Diamond Member</h3>
              <p className='text-sm text-gray-600'>
                Ưu đãi VIP, quà sinh nhật đặc biệt & quyền tham gia sự kiện Highlands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Đăng ký */}
      <section className='py-20 text-center'>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='text-3xl font-bold text-[#7b1e1e] mb-6'
        >
          Trở Thành Thành Viên Ngay Hôm Nay!
        </motion.h2>
        <p className='max-w-xl mx-auto mb-8 text-gray-600'>
          Đăng ký tài khoản Highlands Rewards để nhận những ưu đãi hấp dẫn và tích điểm đổi quà cho
          mỗi ly cà phê bạn yêu thích.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className='bg-gradient-to-r text-white from-[#5A1E1E] via-[#7B241C] to-[#3E2723] hover:opacity-90 transition font-semibold px-8 py-3 rounded-full shadow-lg'
        >
          Đăng ký thành viên
        </motion.button>
      </section>
    </div>
  );
};

export default MembershipPage;
