import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  InfoIcon,
  Briefcase,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#5A1E1E] via-[#7B241C] to-[#3E2723] text-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto space-y-10 max-w-7xl"
      >
        {/* 2 khối chính (chia đôi màn hình) */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Cụm bên trái */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {/* Cột 1 */}
            <div>
              <h3 className="text-lg font-semibold text-[#F5DEB3] uppercase mb-4 tracking-wide">
                Dịch vụ khách hàng
              </h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>
                  <Link to="/help" className="hover:text-[#F5DEB3] transition">
                    Liên hệ & hỗ trợ
                  </Link>
                </li>
                <li>
                  <Link to="/feedback" className="hover:text-[#F5DEB3] transition">
                    Góp ý - Phản hồi
                  </Link>
                </li>
                <li>
                  <Link to="/membership" className="hover:text-[#F5DEB3] transition">
                    Thẻ thành viên Highlands
                  </Link>
                </li>
                <li>
                  <Link to="/policy" className="hover:text-[#F5DEB3] transition">
                    Chính sách khách hàng
                  </Link>
                </li>
              </ul>
            </div>

            {/* Cột 2 */}
            <div>
              <h3 className="text-lg font-semibold text-[#F5DEB3] uppercase mb-4 tracking-wide">
                Về Highlands Coffee
              </h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>
                  <Link to="/about" className="flex items-center hover:text-[#F5DEB3]">
                    <InfoIcon className="w-4 h-4 mr-2" />
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="flex items-center hover:text-[#F5DEB3]">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Tuyển dụng
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="hover:text-[#F5DEB3] transition">
                    Tin tức & sự kiện
                  </Link>
                </li>
                <li>
                  <Link to="/franchise" className="hover:text-[#F5DEB3] transition">
                    Nhượng quyền Highlands Coffee
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Cụm bên phải */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {/* Cột 3 */}
            <div>
              <h3 className="text-lg font-semibold text-[#F5DEB3] uppercase mb-4 tracking-wide">
                Kết nối với chúng tôi
              </h3>
              <div className="flex mb-5 space-x-4">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="transition-transform hover:scale-110">
                    <Icon className="w-6 h-6 text-white hover:text-[#F5DEB3]" />
                  </a>
                ))}
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" /> 1900 1755
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" /> support@highlandscoffee.vn
                </p>
                <p>
                  <Link to="/map" className="hover:text-[#F5DEB3] transition">
                    60 Nguyễn Văn Cừ, Q.1, TP.HCM
                  </Link>
                </p>
              </div>
            </div>

            {/* Cột 4 */}
            <div>
              <h3 className="text-lg font-semibold text-[#F5DEB3] uppercase mb-4 tracking-wide">
                Ứng dụng Highlands
              </h3>
              <div className="flex items-center gap-3">
                <img
                  alt="QR Code"
                  className="h-20 w-20 border border-[#F5DEB3]/40 p-1 rounded-lg bg-white object-contain"
                  src="https://bizweb.dktcdn.net/100/487/455/themes/917232/assets/logo.png?1759892738511"
                />
                <div className="flex flex-col gap-2">
                  <a href="#" target="_blank" rel="noreferrer">
                    <img
                      alt="App Store"
                      className="h-10"
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <img
                      alt="Google Play"
                      className="h-10"
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dòng cuối */}
        <div className="pt-8 border-t border-[#F5DEB3]/30 text-center text-xs text-gray-300">
          <p>
            © {new Date().getFullYear()} Highlands Coffee. Thiết kế bởi{" "}
            <span className="text-[#F5DEB3] font-medium">Ksor Rmah Phi Đen</span>.
          </p>
          <p className="mt-1 italic text-gray-400">
            Tận hưởng hương vị cà phê Việt đậm đà – Highlands Coffee.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
