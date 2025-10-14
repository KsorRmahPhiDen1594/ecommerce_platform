import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Coffee,
  CupSoda,
  IceCream,
  Sandwich,
  Cake,
  GlassWater,
  Thermometer,
  FlaskConical,
  Package,
  Zap,
  Gift,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import HighlandsFeed from './FeedHighlands';
import FlashSale from './FlashSale';

const HomePage = () => {
  const { toast } = useToast();

  const categories = [
    { name: 'Cà Phê', icon: Coffee, link: '/category/ca-phe' },
    { name: 'Trà', icon: CupSoda, link: '/category/tra' },
    { name: 'Freeze', icon: IceCream, link: '/category/freeze' },
    { name: 'Phindi', icon: Thermometer, link: '/category/phindi' },
    { name: 'Bánh Mì Que', icon: Sandwich, link: '/category/banh-mi-que' },
    { name: 'Bánh Ngọt', icon: Cake, link: '/category/banh-ngot' },
    { name: 'Thức Uống Khác', icon: GlassWater, link: '/category/thuc-uong-khac' },
    { name: 'Bình Giữ Nhiệt', icon: FlaskConical, link: '/category/binh-giu-nhiet' },
    { name: 'Ly Giữ Nhiệt', icon: Package, link: '/category/ly-giu-nhiet' },
    { name: 'Cà Phê Gói', icon: Coffee, link: '/category/ca-phe-goi' },
    { name: 'Deal Sốc', icon: Zap, link: '/category/deal-soc', special: true },
    { name: 'Quà Tặng', icon: Gift, link: '/gifts', special: true },
  ];

  return (
    <div className='space-y-8 md:space-y-10'>
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='relative overflow-hidden rounded-lg shadow-xl'
      >
        <img
          className='object-cover w-full h-48 md:h-80'
          alt='Banner Highlands Coffee'
          src='https://images.unsplash.com/photo-1584542729076-8fb5bb625285'
        />
        <div className='absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:p-10'>
          <h1 className='mb-2 text-3xl font-bold leading-tight text-white md:text-5xl md:mb-4'>
            Săn Sale Mỗi Ngày <br />
            Cùng Highlands Coffee!
          </h1>
          <p className='max-w-lg mb-4 text-gray-200 text-md md:text-lg md:mb-6'>
            Khám phá hương vị đặc trưng cùng ưu đãi cực hấp dẫn.
          </p>
          <Button
            className='self-start'
            variant='primary'
            onClick={() => toast({ title: 'Cảm ơn bạn đã tham gia!' })}
          >
            Khám Phá Ngay
          </Button>
        </div>
      </motion.div>

      {/* Danh Mục */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className='grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-7'
      >
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.link}
            className='flex flex-col items-center justify-center p-4 space-y-2 text-center transition-transform duration-200 hover:scale-105'
          >
            <div
              className={`p-3 rounded-full mb-2 ${
                category.special ? 'bg-red-200' : 'bg-red-50'
              }`}
            >
              <category.icon className='w-6 h-6 text-red-700 md:h-8 md:w-8' />
            </div>
            <span
              className={`text-xs md:text-sm font-medium ${
                category.special ? 'text-red-700 font-semibold' : 'text-foreground'
              }`}
            >
              {category.name}
            </span>
          </Link>
        ))}
      </motion.div>

      {/* Flash Sale */}
      <FlashSale />

      {/* Highlands Feed */}
      <HighlandsFeed />
    </div>
  );
};

export default HomePage;
