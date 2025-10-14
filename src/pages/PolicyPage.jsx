import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCcw, Lock, Gift, FileText, Coffee } from 'lucide-react';

const policies = [
  {
    icon: RefreshCcw,
    title: 'Chính Sách Đổi Trả',
    description: (
      <>
        Highlands Coffee hỗ trợ đổi trả sản phẩm trong vòng{' '}
        <span className='font-semibold'>24 giờ</span> kể từ khi nhận hàng đối với các trường hợp:
        <ul className='mt-3 space-y-1 text-gray-700 list-disc list-inside'>
          <li>Sản phẩm không đúng với đơn đặt hàng.</li>
          <li>Sản phẩm bị lỗi do quá trình vận chuyển.</li>
          <li>Không đúng mô tả hoặc có vấn đề về chất lượng.</li>
        </ul>
      </>
    ),
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80',
  },
  {
    icon: Lock,
    title: 'Chính Sách Bảo Mật',
    description: (
      <>
        Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân của khách hàng. Dữ liệu chỉ được sử
        dụng cho mục đích:
        <ul className='mt-3 space-y-1 text-gray-700 list-disc list-inside'>
          <li>Giao hàng và chăm sóc khách hàng.</li>
          <li>Cung cấp thông tin ưu đãi, khuyến mãi (nếu có sự đồng ý).</li>
          <li>Không chia sẻ với bên thứ ba khi chưa có sự cho phép.</li>
        </ul>
      </>
    ),
    image:
      'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=700&q=80',
  },
  {
    icon: Gift,
    title: 'Chính Sách Ưu Đãi',
    description: (
      <>
        Khách hàng thân thiết sẽ nhận được ưu đãi hấp dẫn:
        <ul className='mt-3 space-y-1 text-gray-700 list-disc list-inside'>
          <li>Tặng voucher giảm giá cho đơn hàng kế tiếp.</li>
          <li>Tham gia chương trình “Tích điểm – Đổi quà”.</li>
          <li>Ưu đãi sinh nhật đặc biệt cho thành viên Highlands.</li>
        </ul>
      </>
    ),
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80',
  },
  {
    icon: ShieldCheck,
    title: 'Chính Sách Bảo Hành',
    description: (
      <>
        Đối với các sản phẩm phụ kiện, Highlands Coffee áp dụng chính sách bảo hành trong vòng{' '}
        <span className='font-semibold'>7 ngày</span> kể từ khi nhận hàng, với điều kiện:
        <ul className='mt-3 space-y-1 text-gray-700 list-disc list-inside'>
          <li>Có hóa đơn mua hàng hợp lệ.</li>
          <li>Sản phẩm chưa bị tác động bên ngoài.</li>
        </ul>
      </>
    ),
    image:
      'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=700&q=80',
  },
];

const PolicyPage = () => {
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
          Chính Sách Khách Hàng
        </h1>
        <p className='text-lg text-[#3E2723]/80'>
          Highlands Coffee cam kết mang đến cho bạn những trải nghiệm tốt nhất — từ chất lượng sản
          phẩm đến dịch vụ tận tâm.
        </p>
      </motion.div>

      {/* Policies Zigzag Section */}
      <section className='px-6 py-20 mx-auto max-w-7xl space-y-28'>
        {policies.map(({ icon: Icon, title, description, image }, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30, x: isEven ? -50 : 50 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                isEven ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Image */}
              <div className='overflow-hidden transition-shadow duration-500 shadow-lg md:w-1/2 rounded-3xl hover:shadow-2xl'>
                <img
                  src={image}
                  alt={title}
                  className='object-cover w-full transition-transform duration-500 transform h-80 hover:scale-105'
                  loading='lazy'
                />
              </div>

              {/* Text */}
              <div className='p-12 bg-white shadow-md md:w-1/2 rounded-3xl'>
                <div className='flex items-center mb-6'>
                  <div className='p-4 bg-[#f9e6e2] rounded-full mr-5'>
                    <Icon className='w-12 h-12 text-[#a72626]' />
                  </div>
                  <h2 className='text-4xl font-bold text-[#7b1e1e]'>{title}</h2>
                </div>
                <div className='text-lg leading-relaxed text-gray-700'>{description}</div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Commitment Section */}
      <section className='px-6 py-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <FileText className='w-14 h-14 text-[#a72626] mx-auto mb-6' />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='text-4xl font-extrabold text-[#7b1e1e] mb-6'
          >
            Cam Kết Từ Highlands Coffee
          </motion.h2>
          <p className='max-w-3xl mx-auto text-lg leading-relaxed text-gray-700'>
            Chúng tôi luôn đặt chất lượng và trải nghiệm của khách hàng lên hàng đầu. Mọi sản phẩm
            của Highlands Coffee đều được pha chế từ hạt cà phê chọn lọc, kết hợp cùng quy trình
            phục vụ chuyên nghiệp để mang đến cho bạn những khoảnh khắc thưởng thức tuyệt vời nhất.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PolicyPage;
