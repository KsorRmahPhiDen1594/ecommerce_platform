import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Send, Coffee } from 'lucide-react';

const jobList = [
  {
    id: 1,
    title: 'Nhân viên Pha Chế (Barista)',
    location: 'TP. Hồ Chí Minh',
    type: 'Toàn thời gian',
    description:
      'Trực tiếp pha chế đồ uống theo tiêu chuẩn Highlands Coffee, đảm bảo chất lượng và tốc độ phục vụ cho khách hàng.',
  },
  {
    id: 2,
    title: 'Quản lý Cửa Hàng (Store Manager)',
    location: 'Hà Nội',
    type: 'Toàn thời gian',
    description:
      'Quản lý hoạt động cửa hàng, đội ngũ nhân viên, chất lượng phục vụ và doanh thu. Đảm bảo hình ảnh Highlands Coffee chuyên nghiệp.',
  },
  {
    id: 3,
    title: 'Nhân viên Phục Vụ (Service Crew)',
    location: 'Đà Nẵng',
    type: 'Bán thời gian',
    description:
      'Đón tiếp khách hàng, hỗ trợ gọi món và phục vụ tại quầy. Giữ gìn không gian sạch sẽ, thân thiện.',
  },
  {
    id: 4,
    title: 'Nhân viên Phục Vụ (Service Crew)',
    location: 'Đà Nẵng',
    type: 'Bán thời gian',
    description:
      'Đón tiếp khách hàng, hỗ trợ gọi món và phục vụ tại quầy. Giữ gìn không gian sạch sẽ, thân thiện.',
  },
];

const outstandingMembers = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    position: 'Nhân viên Pha Chế Xuất Sắc',
    photo:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
    description:
      'Nguyễn Văn A đã pha chế hơn 10,000 ly cà phê chất lượng, luôn sáng tạo và giữ được chuẩn vị Highlands.',
  },
  {
    id: 2,
    name: 'Trần Thị B',
    position: 'Quản lý Cửa Hàng Xuất Sắc',
    photo:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    description:
      'Trần Thị B đã dẫn dắt cửa hàng Hà Nội đạt doanh thu cao nhất năm 2024 và xây dựng đội ngũ chuyên nghiệp.',
  },
  {
    id: 3,
    name: 'Lê Minh C',
    position: 'Nhân viên Phục Vụ Xuất Sắc',
    photo:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    description:
      'Lê Minh C luôn tận tâm phục vụ khách, tạo môi trường thân thiện và nhận được nhiều phản hồi tích cực.',
  },
];

const CareersPage = () => {
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
          Tuyển Dụng Highlands Coffee
        </h1>
        <p className='text-lg text-[#3E2723]/80'>
          Cùng chúng tôi lan tỏa hương vị cà phê Việt – Đậm Đà & Tự Hào!
        </p>
      </motion.div>

      {/* Danh sách việc làm */}
      <section className='max-w-5xl px-6 mx-auto'>
        <div className='grid gap-8 md:grid-cols-2'>
          {jobList.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className='bg-white shadow-md rounded-2xl p-6 border border-[#f0d5c8] hover:shadow-lg transition-all duration-300'
            >
              <h3 className='text-xl font-semibold text-[#7b1e1e] mb-2'>{job.title}</h3>
              <p className='mb-4 text-sm text-gray-600'>{job.description}</p>
              <div className='flex flex-wrap gap-4 mb-5 text-sm text-gray-700'>
                <span className='flex items-center'>
                  <MapPin className='w-4 h-4 mr-1 text-[#a72626]' /> {job.location}
                </span>
                <span className='flex items-center'>
                  <Clock className='w-4 h-4 mr-1 text-[#a72626]' /> {job.type}
                </span>
              </div>
              <button className='flex items-center gap-2 bg-[#7b1e1e] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#a72626] transition'>
                <Send className='w-4 h-4' />
                Ứng tuyển ngay
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Đội Ngũ Xuất Sắc */}
      <section className='max-w-6xl px-6 mx-auto py-14'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-10 text-[#7b1e1e]'>
          Đội Ngũ Xuất Sắc
        </h2>
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-3'>
          {outstandingMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: member.id * 0.2 }}
              className='p-6 text-center bg-white shadow-lg rounded-2xl'
            >
              <img
                src={member.photo}
                alt={member.name}
                className='w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-[#a72626]'
              />
              <h3 className='text-xl font-semibold text-[#7b1e1e] mb-1'>{member.name}</h3>
              <p className='text-sm font-medium text-[#a72626] mb-3'>{member.position}</p>
              <p className='text-sm leading-relaxed text-gray-700'>{member.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form ứng tuyển */}
      <section className='max-w-5xl px-6 py-20 mx-auto'>
        {/* Tiêu đề và mô tả */}
        <div className='mb-10 text-center'>
          <h2 className='text-3xl font-bold text-[#7b1e1e] mb-4'>Gửi hồ sơ ứng tuyển</h2>
          <p className='max-w-2xl mx-auto text-gray-700'>
            Bạn yêu thích không khí của Highlands? Hãy để lại thông tin của bạn, chúng tôi sẽ liên
            hệ ngay khi có vị trí phù hợp!
          </p>
        </div>

        {/* Form không có khung card */}
        <form className='max-w-3xl mx-auto space-y-6'>
          <input
            type='text'
            placeholder='Nhập họ và tên của bạn'
            className='w-full p-3 border border-[#e5c7b0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a72626]/50'
            required
          />
          <input
            type='email'
            placeholder='example@gmail.com'
            className='w-full p-3 border border-[#e5c7b0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a72626]/50'
            required
          />
          <input
            type='tel'
            placeholder='Số điện thoại'
            className='w-full p-3 border border-[#e5c7b0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a72626]/50'
            required
          />
          <textarea
            placeholder='Giới thiệu ngắn gọn về bản thân'
            className='w-full p-3 border border-[#e5c7b0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a72626]/50 h-28'
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className='w-full bg-gradient-to-r from-[#5A1E1E] via-[#7B241C] to-[#3E2723] text-[#f5de9e] font-semibold py-3 rounded-xl hover:brightness-110 transition'
          >
            Gửi hồ sơ
          </motion.button>
        </form>

        <div className='mt-12 text-center'>
          <p className='text-sm italic text-gray-500'>
            Highlands Coffee rất mong được đồng hành cùng bạn trong hành trình nghề nghiệp!
          </p>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
