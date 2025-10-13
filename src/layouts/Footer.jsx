import React from "react";
import { Link } from "react-router-dom";
import {
  InfoIcon,
  Briefcase,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#5C2C1D] text-white pt-12 pb-6 border-t border-[#8B0000]/40">
      <div className="grid max-w-6xl grid-cols-1 gap-10 px-6 mx-auto md:grid-cols-4">
        {/* Cột 1 */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Dịch vụ khách hàng</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link to="/help" className="hover:text-[#F5DEB3] transition-colors">Liên hệ & hỗ trợ</Link></li>
            <li><Link to="/feedback" className="hover:text-[#F5DEB3] transition-colors">Góp ý - Phản hồi</Link></li>
            <li><Link to="/membership" className="hover:text-[#F5DEB3] transition-colors">Thẻ thành viên Highlands</Link></li>
            <li><Link to="/policy" className="hover:text-[#F5DEB3] transition-colors">Chính sách khách hàng</Link></li>
          </ul>
        </div>

        {/* Cột 2 */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Về Highlands Coffee</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link to="/about" className="flex items-center hover:text-[#F5DEB3]"><InfoIcon className="w-4 h-4 mr-2" />Giới thiệu</Link></li>
            <li><Link to="/careers" className="flex items-center hover:text-[#F5DEB3]"><Briefcase className="w-4 h-4 mr-2" />Tuyển dụng</Link></li>
            <li><Link to="/news" className="hover:text-[#F5DEB3]">Tin tức & sự kiện</Link></li>
            <li><Link to="/franchise" className="hover:text-[#F5DEB3]">Nhượng quyền Highlands Coffee</Link></li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Kết nối với chúng tôi</h3>
          <div className="flex mt-2 space-x-4">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="transition-transform hover:scale-110">
                <Icon className="w-6 h-6 text-white hover:text-[#F5DEB3]" />
              </a>
            ))}
          </div>
          <div className="mt-5 space-y-2 text-sm text-gray-300">
            <p className="flex items-center"><Phone className="w-4 h-4 mr-2" />1900 1755</p>
            <p className="flex items-center"><Mail className="w-4 h-4 mr-2" />support@highlandscoffee.vn</p>
            <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" />60 Nguyễn Văn Cừ, Q.1, TP.HCM</p>
          </div>
        </div>

        {/* Cột 4 */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Ứng dụng Highlands</h3>
          <div className="flex items-center gap-3">
            <img
              alt="QR Code"
              className="h-20 w-20 border border-[#F5DEB3]/40 p-1 rounded-lg bg-white object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/8/8f/QR_code_example.svg"
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

      {/* Dòng cuối */}
      <div className="pt-8 mt-10 text-xs text-center text-gray-300 border-t border-[#F5DEB3]/30">
        <p>© {new Date().getFullYear()} Highlands Coffee. Thiết kế bởi Ksor Phi Đen.</p>
        <p className="mt-1">Tận hưởng hương vị cà phê Việt đậm đà – Highlands Coffee.</p>
      </div>
    </footer>
  );
};

export default Footer;
