import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Coffee, Search, Truck, CreditCard, MessageSquare, Gift } from 'lucide-react';

const faqData = [
  {
    id: 'q1',
    question: 'Làm sao để đặt đồ uống tại Highlands Coffee?',
    answer:
      'Bạn có thể đến trực tiếp cửa hàng, đặt qua ứng dụng giao hàng (Grab, ShopeeFood, Baemin) hoặc qua website của chúng tôi. Chọn món yêu thích, xác nhận đơn và tận hưởng hương vị Highlands!',
    icon: Coffee,
  },
  {
    id: 'q2',
    question: 'Highlands Coffee có giao hàng tận nơi không?',
    answer:
      'Có! Chúng tôi hỗ trợ giao hàng tận nơi qua các đối tác như GrabFood, ShopeeFood và Baemin. Thời gian giao hàng tùy thuộc vào khu vực của bạn (thường 15–30 phút).',
    icon: Truck,
  },
  {
    id: 'q3',
    question: 'Có thể thanh toán bằng hình thức nào?',
    answer:
      'Highlands Coffee chấp nhận thanh toán bằng tiền mặt, thẻ tín dụng/ghi nợ, và các ví điện tử như Momo, ZaloPay, ShopeePay.',
    icon: CreditCard,
  },
  {
    id: 'q4',
    question: 'Làm sao để tham gia chương trình thành viên Highlands Coffee?',
    answer:
      'Bạn có thể đăng ký tài khoản trên ứng dụng Highlands Coffee Rewards để tích điểm, nhận ưu đãi và quà tặng sinh nhật.',
    icon: Gift,
  },
  {
    id: 'q5',
    question: 'Tôi có thể liên hệ Highlands Coffee bằng cách nào?',
    answer:
      "Bạn có thể gửi phản hồi qua mục 'Liên hệ' trên website, gọi hotline 1900 1755 hoặc chat trực tiếp với chúng tôi qua Messenger.",
    icon: MessageSquare,
  },
];

const HelpPage = () => {
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
          Trung Tâm Trợ Giúp Highlands Coffee
        </h1>
        <p className='text-lg text-[#3E2723]/80'>Chúng tôi luôn sẵn sàng phục vụ bạn!</p>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='relative max-w-2xl mx-auto mb-10'
      >
        <Input
          type='search'
          placeholder='Tìm kiếm câu hỏi hoặc vấn đề của bạn...'
          className='w-full py-3 pl-10 pr-4 rounded-full shadow-md text-md border-[#7B241C]/40 focus:ring-[#7B241C]'
        />
        <Search className='absolute w-5 h-5 -translate-y-1/2 left-4 top-1/2 text-[#7B241C]/70' />
      </motion.div>

      {/* Giới thiệu thương hiệu + Zigzag Image/Text */}
      <section className='max-w-6xl px-6 py-12 mx-auto space-y-20'>
        {/* Section 1 */}
        <div className='grid items-center gap-12 md:grid-cols-2'>
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold text-[#7B241C]'>Mỗi ly cà phê là một hành trình</h2>
            <p className='text-[#3E2723]/80 leading-relaxed'>
              Highlands Coffee không chỉ phục vụ cà phê, mà còn mang đến trải nghiệm gắn kết cộng
              đồng, từ không gian thân thiện đến chất lượng từng ly.
            </p>
          </div>
          <img
            src='https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60'
            alt='Highlands Coffee'
            className='rounded-xl'
          />
        </div>

        {/* Section 2 */}
        <div className='grid items-center gap-12 md:grid-cols-2'>
          <img
            src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=60'
            alt='Customer Service'
            className='order-2 rounded-xl md:order-1'
          />
          <div className='order-1 space-y-4 md:order-2'>
            <h2 className='text-2xl font-bold text-[#7B241C]'>Luôn lắng nghe từng phản hồi</h2>
            <p className='text-[#3E2723]/80 leading-relaxed'>
              Trung tâm trợ giúp được tạo ra để bạn không chỉ tìm thấy câu trả lời, mà còn là nơi để
              Highlands hiểu bạn hơn mỗi ngày.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className='max-w-3xl px-6 pb-20 mx-auto'
      >
        <h2 className='mb-6 text-2xl font-semibold text-center md:text-left text-[#7B241C]'>
          Câu hỏi thường gặp (FAQs)
        </h2>
        <Accordion type='single' collapsible className='w-full space-y-3'>
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className='transition-shadow border rounded-lg shadow bg-white hover:shadow-md border-[#7B241C]/20'
            >
              <AccordionTrigger className='p-4 md:p-5 text-md hover:no-underline text-[#3E2723]'>
                <div className='flex items-center'>
                  <faq.icon className='w-5 h-5 mr-3 text-[#7B241C]' />
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className='p-4 pt-0 text-sm leading-relaxed md:p-5 text-[#3E2723]/80'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default HelpPage;
