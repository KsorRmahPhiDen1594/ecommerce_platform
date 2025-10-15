// MainBanner.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const MainBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className='relative overflow-hidden rounded-lg shadow-xl'
    >
      <img
        className='object-cover w-full'
        alt='Banner Highlands Coffee'
        src='https://www.highlandscoffee.com.vn/vnt_upload/news/03_2023/CoverFB.png'
        loading='eager' // Sử dụng eager để banner ở phía trên màn hình đầu tiên tải ngay lập tức
        width={1200} // Thêm chiều rộng và chiều cao xấp xỉ để ngăn chặn sự dịch chuyển bố cục
        height={400}
      />
      <div className='absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:p-10'>
        <Button
          size='lg'
          className='bg-gradient-to-r from-[#D1A054] to-[#A67C35] hover:from-[#E5B65A] hover:to-[#B8893F]
           text-[#3E2723] font-semibold w-fit text-base md:text-lg px-6 py-3 md:px-8 md:py-3.5
           rounded-md shadow-lg hover:shadow-xl transition-all'
        >
          <ShoppingBag className='w-5 h-5 mr-2 text-[#3E2723]' /> Mua Ngay
        </Button>
      </div>
    </motion.div>
  );
};

export default MainBanner;
