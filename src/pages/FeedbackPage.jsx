import React from 'react';
import { motion } from 'framer-motion';
import { Star, Send, Coffee, Search, Truck, CreditCard, MessageSquare, Gift } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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

const FeedbackPage = () => {
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
          Góp Ý & Phản Hồi
        </h1>
        <p className='text-lg text-[#3E2723]/80'>
          Mỗi ý kiến của bạn là một tách cà phê đong đầy cảm xúc giúp chúng tôi hoàn thiện hơn từng
          ngày.
        </p>
      </motion.div>

      {/* Section 1 */}
      <section className='grid items-center max-w-6xl gap-12 px-6 mx-auto md:grid-cols-2'>
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='space-y-5'
        >
          <h2 className='text-3xl font-bold text-[#7b1e1e]'>Chia sẻ cảm nhận của bạn ☕</h2>
          <p className='leading-relaxed text-gray-700'>
            Chúng tôi tin rằng mỗi khách hàng đều có câu chuyện riêng cùng Highlands Coffee. Hãy kể
            cho chúng tôi nghe về trải nghiệm của bạn — từng ly cà phê, từng nụ cười, từng khoảnh
            khắc đáng nhớ.
          </p>
          <p className='text-gray-600'>
            Phản hồi của bạn sẽ giúp Highlands không chỉ phục vụ cà phê ngon hơn, mà còn mang đến
            những giây phút ý nghĩa hơn.
          </p>
        </motion.div>

        <motion.img
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=60'
          alt='Highlands Coffee Experience'
          className='transition duration-300 rounded-xl hover:scale-105'
        />
      </section>

      {/* Section 2 */}
      <section className='grid items-center max-w-6xl gap-12 px-6 py-20 mx-auto md:grid-cols-2'>
        <motion.img
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=60'
          alt='Coffee Feedback'
          className='transition duration-300 rounded-xl hover:scale-105'
        />

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='space-y-5'
        >
          <h2 className='text-3xl font-bold text-[#7b1e1e]'>Đánh giá & góp ý của bạn</h2>
          <p className='leading-relaxed text-gray-700'>
            Chúng tôi lắng nghe mọi lời khen, mọi góp ý, dù nhỏ nhất. Đó chính là hạt giống để
            Highlands Coffee vươn mình và phục vụ bạn tốt hơn từng ngày.
          </p>
          <p className='text-gray-600'>
            Hãy để lại cảm nhận của bạn dưới đây – Highlands sẽ luôn trân trọng từng chia sẻ!
          </p>
        </motion.div>
      </section>

      {/* FAQs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className='max-w-3xl px-6 pb-20 mx-auto'
      >
        <div className='text-center'>
          <h2 className='mb-6 text-2xl font-semibold text-[#7B241C]'>Câu hỏi thường gặp (FAQs)</h2>
        </div>
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

      {/* Form góp ý */}
      <section className='max-w-3xl px-6 py-16 mx-auto'>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='space-y-6' // ❌ bỏ bg-white, border, shadow, rounded
        >
          <div className='mb-8 text-center'>
            <h2 className='text-3xl font-bold text-[#7b1e1e] mb-4'>Gửi góp ý của bạn</h2>
            <p className='max-w-2xl mx-auto text-gray-700'>
              Mỗi phản hồi của bạn đều giúp Highlands phục vụ tốt hơn từng ngày. Hãy chia sẻ cùng
              chúng tôi nhé!
            </p>
          </div>

          <div>
            <label className='block mb-2 text-sm font-semibold text-[#5a1e1e]'>Họ và tên</label>
            <input
              type='text'
              placeholder='Nhập họ và tên của bạn'
              className='w-full p-3 border border-[#e5c7b0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a72626]/50'
            />
          </div>

          <div>
            <label className='block mb-2 text-sm font-semibold text-[#5a1e1e]'>Email</label>
            <input
              type='email'
              placeholder='example@gmail.com'
              className='w-full p-3 border border-[#e5c7b0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a72626]/50'
            />
          </div>

          <div>
            <label className='block mb-2 text-sm font-semibold text-[#5a1e1e]'>
              Đánh giá trải nghiệm
            </label>
            <div className='flex gap-2 text-[#f5b301] text-2xl'>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className='transition cursor-pointer hover:scale-110' />
              ))}
            </div>
          </div>

          <div>
            <label className='block mb-2 text-sm font-semibold text-[#5a1e1e]'>
              Nội dung góp ý
            </label>
            <textarea
              placeholder='Chia sẻ suy nghĩ hoặc góp ý của bạn...'
              className='w-full h-32 p-3 border border-[#e5c7b0] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#a72626]/50'
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type='submit'
            className='w-full bg-gradient-to-r from-[#5A1E1E] via-[#7B241C] to-[#3E2723] text-[#f5de9e] py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:brightness-110 transition'
          >
            <Send className='w-4 h-4' /> Gửi phản hồi
          </motion.button>
        </motion.form>

        <p className='mt-8 text-sm italic text-center text-gray-500'>
          Cảm ơn bạn đã dành thời gian chia sẻ với Highlands ☕
        </p>
      </section>
    </div>
  );
};

export default FeedbackPage;
