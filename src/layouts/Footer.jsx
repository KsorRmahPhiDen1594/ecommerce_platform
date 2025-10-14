import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  InfoIcon,
  Briefcase,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className='p-10 bg-gradient-to-br from-[#5A1E1E] via-[#7B241C] to-[#3E2723] text-white'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='max-w-6xl mx-auto'
      >
        {/* Lưới 4 cột */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-4'>
          {/* Cột 1 */}
          <div>
            <h3 className='mb-3 text-lg font-semibold text-[#F5DEB3]'>Dịch vụ khách hàng</h3>
            <ul className='space-y-2 text-sm text-gray-200'>
              <li>
                <Link to='/help' className='hover:text-[#F5DEB3] transition'>
                  Liên hệ & hỗ trợ
                </Link>
              </li>
              <li>
                <Link to='/feedback' className='hover:text-[#F5DEB3] transition'>
                  Góp ý - Phản hồi
                </Link>
              </li>
              <li>
                <Link to='/membership' className='hover:text-[#F5DEB3] transition'>
                  Thẻ thành viên Highlands
                </Link>
              </li>
              <li>
                <Link to='/policy' className='hover:text-[#F5DEB3] transition'>
                  Chính sách khách hàng
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 2 */}
          <div>
            <h3 className='mb-3 text-lg font-semibold text-[#F5DEB3]'>Về Highlands Coffee</h3>
            <ul className='space-y-2 text-sm text-gray-200'>
              <li>
                <Link to='/about' className='flex items-center hover:text-[#F5DEB3]'>
                  <InfoIcon className='w-4 h-4 mr-2' />
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to='/careers' className='flex items-center hover:text-[#F5DEB3]'>
                  <Briefcase className='w-4 h-4 mr-2' />
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link to='/news' className='hover:text-[#F5DEB3]'>
                  Tin tức & sự kiện
                </Link>
              </li>
              <li>
                <Link to='/franchise' className='hover:text-[#F5DEB3]'>
                  Nhượng quyền Highlands Coffee
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3 */}
          <div>
            <h3 className='mb-3 text-lg font-semibold text-[#F5DEB3]'>Kết nối với chúng tôi</h3>
            <div className='flex mt-3 space-x-4'>
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href='#' className='transition-transform hover:scale-110'>
                  <Icon className='w-6 h-6 text-white hover:text-[#F5DEB3]' />
                </a>
              ))}
            </div>
            <div className='mt-5 space-y-2 text-sm text-gray-300'>
              <p className='flex items-center'>
                <Phone className='w-4 h-4 mr-2' />
                1900 1755
              </p>
              <p className='flex items-center'>
                <Mail className='w-4 h-4 mr-2' />
                support@highlandscoffee.vn
              </p>
              <p>
                <Link to='/map' className='hover:text-[#F5DEB3]'>
                  60 Nguyễn Văn Cừ, Q.1, TP.HCM
                </Link>
              </p>
            </div>
          </div>

          {/* Cột 4 */}
          <div>
            <h3 className='mb-3 text-lg font-semibold text-[#F5DEB3]'>Ứng dụng Highlands</h3>
            <div className='flex items-center gap-3'>
              <img
                alt='QR Code'
                className='h-20 w-20 border border-[#F5DEB3]/40 p-1 rounded-lg bg-white object-contain'
                src='https://bizweb.dktcdn.net/100/487/455/themes/917232/assets/logo.png?1759892738511'
              />
              <div className='flex flex-col gap-2'>
                <a href='#' target='_blank' rel='noreferrer'>
                  <img
                    alt='App Store'
                    className='h-10'
                    src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'
                  />
                </a>
                <a href='#' target='_blank' rel='noreferrer'>
                  <img
                    alt='Google Play'
                    className='h-10'
                    src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dòng cuối */}
        <div className='pt-8 mt-10 text-xs text-center text-gray-300 border-t border-[#F5DEB3]/30'>
          <p>
            © {new Date().getFullYear()} Highlands Coffee. Thiết kế bởi{' '}
            <span className='text-[#F5DEB3]'>Ksor Rmah Phi Đen</span>.
          </p>
          <p className='mt-1 italic'>Tận hưởng hương vị cà phê Việt đậm đà – Highlands Coffee.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
