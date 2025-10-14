import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Coffee } from 'lucide-react';

// Dữ liệu phần zig-zag
const newsListZigZag = [
  {
    id: 1,
    title: 'Cà phê Việt Nam được vinh danh tại hội chợ quốc tế',
    image: 'https://thuytinhgiare.com/wp-content/uploads/2023/07/hinh-anh-ly-cafe-highland.jpg',
    date: '15/09/2025',
    description:
      'Sản phẩm cà phê của Highlands Coffee nhận được giải thưởng cao quý tại hội chợ quốc tế, nâng tầm cà phê Việt trên bản đồ thế giới.',
  },
  {
    id: 2,
    title: 'Mở rộng chuỗi cửa hàng tại các thành phố lớn',
    image: 'https://thuytinhgiare.com/wp-content/uploads/2023/07/hinh-anh-ly-cafe-highland.jpg',
    date: '01/09/2025',
    description:
      'Chiến lược mở rộng giúp Highlands Coffee tiếp cận thêm nhiều khách hàng, mang trải nghiệm cà phê chuẩn Việt đến gần hơn.',
  },
  {
    id: 3,
    title: 'Tham gia các hoạt động vì môi trường xanh',
    image: 'https://thuytinhgiare.com/wp-content/uploads/2023/07/hinh-anh-ly-cafe-highland.jpg',
    date: '20/08/2025',
    description:
      'Highlands Coffee cam kết thực hiện các chương trình xanh, bảo vệ môi trường với các sáng kiến giảm nhựa và tái chế hiệu quả.',
  },
];

// Dữ liệu phần cuối (card grid 3 cột)
const newsListGrid = [
  {
    id: 1,
    title: 'Thực đơn mùa đông ra mắt với nhiều món mới',
    image: 'https://thuytinhgiare.com/wp-content/uploads/2023/07/hinh-anh-ly-cafe-highland.jpg',
    date: '10/08/2025',
    description:
      'Mùa đông này, Highlands Coffee giới thiệu thực đơn mới với các món đồ uống ấm áp, phù hợp thời tiết se lạnh.',
  },
  {
    id: 2,
    title: 'Sự kiện tri ân khách hàng thân thiết',
    image: 'https://thuytinhgiare.com/wp-content/uploads/2023/07/hinh-anh-ly-cafe-highland.jpg',
    date: '01/08/2025',
    description:
      'Highlands Coffee tổ chức sự kiện tri ân với nhiều phần quà hấp dẫn dành cho khách hàng thân thiết trên toàn quốc.',
  },
  {
    id: 3,
    title: 'Tuyển dụng nhân viên cho các cửa hàng mới',
    image: 'https://thuytinhgiare.com/wp-content/uploads/2023/07/hinh-anh-ly-cafe-highland.jpg',
    date: '25/07/2025',
    description:
      'Cơ hội việc làm hấp dẫn tại Highlands Coffee dành cho các ứng viên nhiệt huyết và yêu thích cà phê.',
  },
];

const NewsPage = () => {
  return (
    <div className=' text-[#3c1e1e] min-h-screen'>
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
          Tin Tức & Sự Kiện
        </h1>
        <p className='text-lg text-[#3E2723]/80'>
          Cập nhật những thông tin mới nhất từ Highlands Coffee, giúp bạn không bỏ lỡ các sự kiện và
          sản phẩm hấp dẫn.
        </p>
      </motion.div>

      {/* Phần 2: Zig-Zag layout */}
      <section className='max-w-6xl px-6 py-16 mx-auto space-y-20'>
        {newsListZigZag.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className='object-cover w-full h-64 shadow-lg md:w-1/2 rounded-2xl'
                loading='lazy'
              />
              <div className='md:w-1/2'>
                <div className='flex items-center text-sm text-[#a72626] mb-3'>
                  <Calendar className='w-5 h-5 mr-2' />
                  <time dateTime={item.date.split('/').reverse().join('-')}>{item.date}</time>
                </div>
                <h3 className='text-2xl font-semibold text-[#7b1e1e] mb-4'>{item.title}</h3>
                <p className='mb-6 leading-relaxed text-gray-700'>{item.description}</p>
                <button
                  aria-label={`Đọc thêm về ${item.title}`}
                  className='flex items-center text-[#a72626] font-semibold group hover:underline'
                >
                  Đọc thêm
                  <ArrowRight className='w-5 h-5 ml-1 transition-transform group-hover:translate-x-1' />
                </button>
              </div>
            </motion.article>
          );
        })}
      </section>

      {/* Phần 3: Card grid 3 cột */}
      <section className='grid max-w-6xl gap-10 px-6 py-16 mx-auto md:grid-cols-3'>
        {newsListGrid.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className='flex flex-col overflow-hidden transition-shadow duration-300 shadow-lg rounded-2xl hover:shadow-xl'
          >
            <img
              src={item.image}
              alt={item.title}
              className='object-cover w-full h-56'
              loading='lazy'
            />
            <div className='flex flex-col flex-grow p-6'>
              <div className='flex items-center text-sm text-[#a72626] mb-2'>
                <Calendar className='w-4 h-4 mr-2' />
                <time dateTime={item.date.split('/').reverse().join('-')}>{item.date}</time>
              </div>
              <h3 className='text-lg font-semibold text-[#7b1e1e] mb-2 flex-grow'>{item.title}</h3>
              <p className='flex-grow mb-6 text-sm leading-relaxed text-gray-600'>
                {item.description}
              </p>
              <button
                aria-label={`Đọc thêm về ${item.title}`}
                className='flex items-center text-[#a72626] font-medium group mt-auto hover:underline'
              >
                Đọc thêm
                <ArrowRight className='w-4 h-4 ml-1 transition-transform group-hover:translate-x-1' />
              </button>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Banner CTA */}
      <section className='py-16 text-center'>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='max-w-3xl mx-auto mb-4 text-3xl font-bold md:text-4xl'
        >
          Highlands Coffee – Nâng tầm hương vị Việt
        </motion.h2>
        <p className='max-w-2xl mx-auto mb-6'>
          Cùng theo dõi Highlands Coffee để không bỏ lỡ những tin tức, sự kiện và sản phẩm mới nhất!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className='bg-gradient-to-r from-[#5A1E1E] via-[#7B241C] to-[#3E2723] text-[#f5de9e] px-8 py-3 rounded-xl font-semibold shadow-md hover:brightness-110 transition'
        >
          Theo dõi ngay
        </motion.button>
      </section>
    </div>
  );
};

export default NewsPage;
