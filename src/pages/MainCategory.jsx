// MainCategory.jsx
import React from 'react';
import { motion } from 'framer-motion';
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

export default function MainCategory() {
  // ✅ Danh mục Highlands Coffee + Deal Sốc, Voucher, Quà Tặng
  const categories = [
    { name: 'Cà Phê', icon: Coffee, link: '/category/ca-phe' },
    { name: 'Trà', icon: CupSoda, link: '/category/tra' },
    { name: 'Freeze', icon: IceCream, link: '/category/freeze' },
    { name: 'Phindi', icon: Thermometer, link: '/category/phindi' },
    { name: 'Bánh Mì Que', icon: Sandwich, link: '/category/banh-mi-que' },
    { name: 'Bánh Ngọt', icon: Cake, link: '/category/banh-ngot' },
    {
      name: 'Thức Uống Khác',
      icon: GlassWater,
      link: '/category/thuc-uong-khac',
    },
    {
      name: 'Bình Giữ Nhiệt',
      icon: FlaskConical,
      link: '/category/binh-giu-nhiet',
    },
    { name: 'Ly Giữ Nhiệt', icon: Package, link: '/category/ly-giu-nhiet' },
    { name: 'Cà Phê Gói', icon: Coffee, link: '/category/ca-phe-goi' },

    // 🔥 Mục đặc biệt (giữ nguyên)
    { name: 'Deal Sốc', icon: Zap, link: '/category/deal-soc', special: true },
    // { name: "Voucher", icon: Percent, link: "/vouchers", special: true },
    { name: 'Quà Tặng', icon: Gift, link: '/gifts', special: true },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className='grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 md:gap-4'
    >
      {categories.map((category) => (
        <Link
          key={category.name}
          to={category.link}
          className={`flex flex-col items-center justify-center text-center p-2 md:p-3 rounded-lg hover:shadow-lg transition-all duration-300 aspect-square
            ${
              category.special
                ? 'bg-red-100 hover:bg-red-200'
                : 'bg-card hover:bg-accent dark:bg-slate-800 dark:hover:bg-slate-700'
            }`}
        >
          <div className={`p-3 rounded-full mb-2 ${category.special ? 'bg-red-200' : 'bg-red-50'}`}>
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
  );
}
