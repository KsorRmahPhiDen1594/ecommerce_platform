import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Coffee } from 'lucide-react';

const MapPage = () => {
  return (
    <div className='min-h-screen bg-[#fffaf7] text-[#3c1e1e]'>
      {/* Header Section */}
      <section className='bg-gradient-to-r from-[#7b1e1e] to-[#a72626] py-16 text-center text-white'>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MapPin className='w-14 h-14 mx-auto mb-3 text-[#F5DEB3]' />
          <h1 className='text-4xl font-extrabold uppercase md:text-5xl'>Hệ Thống Cửa Hàng</h1>
          <p className='max-w-2xl mx-auto mt-3 text-lg text-white/90'>
            Khám phá hương vị cà phê Việt đậm đà tại các chi nhánh Highlands Coffee trên toàn quốc.
          </p>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className='max-w-6xl px-6 mx-auto py-14'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className='overflow-hidden rounded-2xl shadow-xl border border-[#e5c7b0]'
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.814748229569!2d108.22304777588694!3d16.04735548463363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219cd6573cfa3%3A0x3a62d621d9cb83a2!2sHighlands%20Coffee%20-%20Nguy%E1%BB%85n%20V%C4%83n%20C%E1%BB%AB!5e0!3m2!1svi!2s!4v1739472575123!5m2!1svi!2s'
            width='100%'
            height='500'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='Highlands Coffee Nguyễn Văn Cừ'
          ></iframe>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='mt-10 text-center'
        >
          <h2 className='text-2xl md:text-3xl font-semibold text-[#7b1e1e] flex justify-center items-center gap-2'>
            <Coffee className='w-6 h-6 text-[#a72626]' />
            Chi nhánh Nguyễn Văn Cừ, Đà Nẵng
          </h2>
          <p className='max-w-2xl mx-auto mt-3 leading-relaxed text-gray-700'>
            60 Nguyễn Văn Cừ, Q.1, TP. Đà Nẵng
            <br />
            Mở cửa: <span className='font-semibold'>7:00 - 22:00</span> mỗi ngày
            <br />
            Hotline: <span className='font-semibold'>1900 1755</span>
          </p>
        </motion.div>
      </section>

      {/* Footer note */}
      <section className='bg-[#f8ebe4] py-10 text-center'>
        <p className='max-w-2xl mx-auto text-sm leading-relaxed text-gray-700 md:text-base'>
          Highlands Coffee luôn sẵn sàng chào đón bạn tại bất kỳ chi nhánh nào trên toàn quốc.
          <br />
          Hãy ghé thăm và tận hưởng hương vị cà phê Việt đậm đà trong không gian ấm cúng.
        </p>
      </section>
    </div>
  );
};

export default MapPage;
