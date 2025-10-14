import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Shield, Users, ShoppingBag } from 'lucide-react';

const TermsPage = () => {
  const sections = [
    {
      title: 'Điều 1: Giới thiệu chung',
      icon: Coffee,
      content: [
        'Chào mừng bạn đến với Highlands Coffee! Bằng việc truy cập và sử dụng website hoặc ứng dụng của chúng tôi, bạn đồng ý tuân thủ các Điều khoản Dịch vụ được quy định tại đây.',
        'Highlands Coffee là thương hiệu cà phê Việt Nam, cung cấp các sản phẩm cà phê, trà và dịch vụ đặt hàng trực tuyến nhằm mang đến trải nghiệm tốt nhất cho khách hàng.',
      ],
    },
    {
      title: 'Điều 2: Tài khoản người dùng',
      icon: Users,
      content: [
        'Khi đăng ký tài khoản trên nền tảng Highlands Coffee, bạn có trách nhiệm bảo mật thông tin đăng nhập của mình.',
        'Bạn cam kết cung cấp thông tin chính xác, đầy đủ và cập nhật khi sử dụng dịch vụ của chúng tôi.',
        'Highlands Coffee có quyền tạm khóa hoặc hủy tài khoản nếu phát hiện có hành vi gian lận hoặc vi phạm chính sách sử dụng.',
      ],
    },
    {
      title: 'Điều 3: Quy định về mua hàng & thanh toán',
      icon: ShoppingBag,
      content: [
        'Khách hàng có thể đặt mua sản phẩm trực tuyến tại website hoặc ứng dụng Highlands Coffee.',
        'Giá sản phẩm được hiển thị tại thời điểm đặt hàng và có thể thay đổi tùy theo chương trình khuyến mãi.',
        'Thanh toán được thực hiện qua nhiều phương thức như tiền mặt, thẻ, hoặc ví điện tử (nếu có hỗ trợ).',
      ],
    },
    {
      title: 'Điều 4: Bảo mật thông tin',
      icon: Shield,
      content: [
        'Highlands Coffee cam kết bảo vệ thông tin cá nhân của khách hàng theo quy định của pháp luật Việt Nam.',
        'Chúng tôi chỉ sử dụng dữ liệu cá nhân để phục vụ việc cải thiện chất lượng dịch vụ và chăm sóc khách hàng.',
      ],
    },
  ];

  return (
    <div className='container px-4 py-10 mx-auto md:py-16'>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='mb-12 text-center'
      >
        <Coffee className='w-16 h-16 mx-auto mb-4 text-red-700' />
        <h1 className='mb-2 text-3xl font-bold text-red-800 md:text-4xl'>
          Điều Khoản Dịch Vụ Highlands Coffee
        </h1>
        <p className='text-gray-600'>Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='max-w-3xl p-6 mx-auto bg-white border border-gray-100 shadow-lg dark:bg-slate-800 md:p-8 rounded-2xl'
      >
        <p className='mb-8 text-sm leading-relaxed text-gray-600 md:text-base'>
          Vui lòng đọc kỹ các Điều khoản Dịch vụ này trước khi sử dụng nền tảng của Highlands
          Coffee. Việc tiếp tục sử dụng dịch vụ đồng nghĩa với việc bạn chấp nhận và đồng ý bị ràng
          buộc bởi các điều khoản sau.
        </p>

        {sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            className='mb-10'
          >
            <h2 className='flex items-center mb-3 text-xl font-semibold text-red-700 md:text-2xl'>
              <section.icon className='w-6 h-6 mr-3' /> {section.title}
            </h2>
            <div className='space-y-2 text-sm leading-relaxed text-gray-700 md:text-base'>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>
          </motion.section>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + sections.length * 0.1, duration: 0.5 }}
          className='pt-6 mt-10 border-t border-gray-200'
        >
          <h2 className='mb-2 text-xl font-semibold text-red-700'>Liên hệ</h2>
          <p className='text-sm text-gray-600'>
            Mọi thắc mắc về Điều khoản Dịch vụ xin vui lòng liên hệ qua email:{' '}
            <a href='mailto:support@highlandscoffee.vn' className='text-red-700 hover:underline'>
              support@highlandscoffee.vn
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TermsPage;
