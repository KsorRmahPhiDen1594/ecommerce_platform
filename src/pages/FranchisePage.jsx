import React from 'react';
import { Coffee, Store, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ArticleZigZag = ({ title, content, image, reverse }) => {
  return (
    <section className='max-w-6xl px-6 py-16 mx-auto'>
      <div
        className={`flex flex-col md:flex-row items-center gap-12 ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className='md:w-1/2'>
          <h2 className='text-3xl font-bold text-[#7b1e1e] mb-6 tracking-wide'>{title}</h2>
          {content.map((para, idx) => (
            <p
              key={idx}
              className='mb-4 leading-relaxed tracking-wide text-justify text-gray-700 last:mb-0'
            >
              {para}
            </p>
          ))}
        </div>

        <div className='relative md:w-1/2'>
          <div
            className='overflow-hidden rounded-[40px]'
            style={{
              clipPath: reverse
                ? 'polygon(0 5%, 100% 0%, 100% 95%, 0% 100%)'
                : 'polygon(0 0, 100% 5%, 100% 95%, 0% 100%)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            }}
          >
            <img
              src={image}
              alt={title}
              className='object-cover w-full h-auto transition-transform duration-500 hover:scale-105'
            />
          </div>

          <svg
            viewBox='0 0 200 20'
            className={`absolute top-0 left-0 w-full h-10 text-[#7b1e1e] opacity-70 ${
              reverse ? 'rotate-180' : ''
            }`}
            preserveAspectRatio='none'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 10 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10 L90 0 L100 10 L110 0 L120 10 L130 0 L140 10 L150 0 L160 10 L170 0 L180 10 L190 0 L200 10 V20 H0 Z' />
          </svg>
        </div>
      </div>
    </section>
  );
};

const ZigZagDivider = () => (
  <svg
    className='w-full -mt-1 text-[#7b1e1e]'
    viewBox='0 0 1440 80'
    preserveAspectRatio='none'
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
  >
    <path d='M0 40 L30 20 L60 40 L90 20 L120 40 L150 20 L180 40 L210 20 L240 40 L270 20 L300 40 L330 20 L360 40 L390 20 L420 40 L450 20 L480 40 L510 20 L540 40 L570 20 L600 40 L630 20 L660 40 L690 20 L720 40 L750 20 L780 40 L810 20 L840 40 L870 20 L900 40 L930 20 L960 40 L990 20 L1020 40 L1050 20 L1080 40 L1110 20 L1140 40 L1170 20 L1200 40 L1230 20 L1260 40 L1290 20 L1320 40 L1350 20 L1380 40 L1410 20 L1440 40 V80 H0 Z' />
  </svg>
);

const SuccessSection = () => (
  <section className='max-w-6xl mx-auto px-6 py-16 bg-[#f9f4f1] rounded-3xl shadow-lg'>
    <h2 className='text-3xl font-bold text-[#7b1e1e] mb-12 text-center'>Thành Công Năm Qua</h2>

    <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
      {[
        {
          img: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=600&q=80',
          title: 'Mở rộng 100+ cửa hàng mới',
          desc: 'Chúng tôi đã mở rộng hệ thống với hơn 100 cửa hàng mới trên toàn quốc, đáp ứng nhu cầu thưởng thức cà phê ngày càng tăng.',
        },
        {
          img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
          title: 'Đạt doanh thu kỷ lục',
          desc: 'Doanh thu năm qua tăng 30% so với năm trước, khẳng định vị thế thương hiệu hàng đầu trong ngành cà phê Việt Nam.',
        },
        {
          img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80',
          title: 'Hỗ trợ đối tác tối ưu',
          desc: 'Cung cấp các chương trình đào tạo và hỗ trợ marketing chuyên sâu giúp đối tác phát triển kinh doanh hiệu quả.',
        },
      ].map((item, idx) => (
        <div key={idx} className='overflow-hidden bg-white shadow-md rounded-2xl'>
          <div
            className='overflow-hidden rounded-t-2xl'
            style={{
              clipPath: 'polygon(0 0, 100% 5%, 100% 95%, 0% 100%)',
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              className='object-cover w-full h-48 transition-transform duration-500 hover:scale-105'
            />
          </div>
          <div className='p-6'>
            <h3 className='text-xl font-semibold text-[#7b1e1e] mb-2'>{item.title}</h3>
            <p className='leading-relaxed text-gray-600'>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const FranchisePage = () => {
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
          Nhượng Quyền Highlands Coffee
        </h1>
        <p className='text-lg text-[#3E2723]/80'>
          Trở thành đối tác cùng thương hiệu cà phê hàng đầu Việt Nam cùng nhau lan tỏa hương vị
          Việt đậm đà khắp mọi miền đất nước.
        </p>
      </motion.div>

      {/* Bài báo 1 */}
      <ArticleZigZag
        title='Highlands Coffee – Hành Trình Phát Triển Vững Mạnh'
        content={[
          'Highlands Coffee là thương hiệu cà phê Việt hàng đầu, với hơn 500 cửa hàng trải dài khắp các tỉnh thành trên toàn quốc. Trong những năm qua, chúng tôi không ngừng mở rộng hệ thống, nâng cao chất lượng sản phẩm và trải nghiệm khách hàng. Sự phát triển ổn định cùng với sự tin tưởng từ hàng triệu khách hàng đã tạo nên nền tảng vững chắc để Highlands Coffee tiếp tục đồng hành cùng các đối tác nhượng quyền trên hành trình kinh doanh thành công.',
          'Cam kết của Highlands Coffee không chỉ là mang đến những ly cà phê thơm ngon đậm đà mà còn hỗ trợ đối tác toàn diện về mặt vận hành, marketing, đào tạo nhân sự và thiết kế không gian. Với đội ngũ chuyên nghiệp và mạng lưới hỗ trợ rộng khắp, chúng tôi tự tin tạo điều kiện tốt nhất để các đối tác phát triển bền vững và hiệu quả.',
        ]}
        image='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
        reverse={false}
      />

      {/* Bài báo 2 */}
      <ArticleZigZag
        title='Chặng Đường Thành Công và Cam Kết Phát Triển'
        content={[
          'Năm vừa qua, Highlands Coffee đã ghi dấu ấn mạnh mẽ với hàng loạt thành công trong mở rộng chuỗi cửa hàng và phát triển dịch vụ. Với sự hỗ trợ tối ưu từ hệ thống, các đối tác nhượng quyền đã có nhiều bước tiến vượt bậc, mang lại hiệu quả kinh doanh cao và sự hài lòng của khách hàng.',
          'Chúng tôi luôn đặt chất lượng và trải nghiệm khách hàng lên hàng đầu, đồng thời không ngừng cải tiến và đổi mới để đáp ứng nhu cầu ngày càng đa dạng. Cam kết đồng hành cùng đối tác là trọng tâm để Highlands Coffee giữ vững vị trí dẫn đầu thị trường cà phê Việt Nam.',
        ]}
        image='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
        reverse={true}
      />

      {/* Thành công năm qua */}
      <SuccessSection />

      {/* Lợi ích */}
      <section className='py-16 '>
        <div className='max-w-6xl px-6 mx-auto'>
          <h2 className='text-3xl font-bold text-center text-[#7b1e1e] mb-12'>
            Lợi ích khi trở thành đối tác nhượng quyền
          </h2>
          <div className='grid gap-10 text-center md:grid-cols-3'>
            {[
              {
                icon: <Coffee className='w-12 h-12 text-[#a72626] mx-auto mb-4' />,
                title: 'Thương hiệu mạnh',
                desc: 'Được sử dụng thương hiệu Highlands Coffee — uy tín, quen thuộc và được yêu thích khắp Việt Nam.',
              },
              {
                icon: <Store className='w-12 h-12 text-[#a72626] mx-auto mb-4' />,
                title: 'Hỗ trợ toàn diện',
                desc: 'Được hướng dẫn chi tiết về vận hành, marketing, đào tạo nhân sự và thiết kế không gian cửa hàng.',
              },
              {
                icon: <MapPin className='w-12 h-12 text-[#a72626] mx-auto mb-4' />,
                title: 'Mở rộng dễ dàng',
                desc: 'Cơ hội mở thêm nhiều chi nhánh với sự hỗ trợ từ hệ thống và đội ngũ chuyên nghiệp của Highlands.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className='p-8 duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl'
              >
                {item.icon}
                <h3 className='font-semibold text-xl mb-2 text-[#7b1e1e]'>{item.title}</h3>
                <p className='text-gray-600'>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form liên hệ */}
      {/* Form liên hệ */}
      <section className='max-w-3xl px-6 py-16 mx-auto'>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='p-8 space-y-6 bg-white border shadow-md rounded-2xl md:p-10'
        >
          <div className='text-center'>
            <h2 className='text-3xl font-bold text-[#7b1e1e] mb-8'>Đăng ký trở thành đối tác</h2>
          </div>
          <form className='space-y-6 text-left'>
            <div>
              <label htmlFor='name' className='block mb-2 font-medium text-[#7b1e1e]'>
                Họ và tên
              </label>
              <input
                type='text'
                id='name'
                placeholder='Nhập họ và tên của bạn'
                className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a72626] transition'
              />
            </div>
            <div>
              <label htmlFor='phone' className='block mb-2 font-medium text-[#7b1e1e]'>
                Số điện thoại
              </label>
              <input
                type='tel'
                id='phone'
                placeholder='Nhập số điện thoại'
                className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a72626] transition'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 font-medium text-[#7b1e1e]'>
                Email
              </label>
              <input
                type='email'
                id='email'
                placeholder='Nhập email của bạn'
                className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a72626] transition'
              />
            </div>
            <button
              type='submit'
              className='w-full py-3 mt-4 font-semibold text-white uppercase rounded-md bg-gradient-to-r from-[#7b1e1e] to-[#a72626] hover:from-[#a72626] hover:to-[#7b1e1e] transition-colors duration-300 shadow-lg'
            >
              Gửi đăng ký
            </button>
          </form>
        </motion.form>
      </section>
    </div>
  );
};

export default FranchisePage;
