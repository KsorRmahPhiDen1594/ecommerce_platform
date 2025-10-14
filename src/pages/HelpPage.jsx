import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Coffee,
  Search,
  Truck,
  CreditCard,
  UserCircle,
  MessageSquare,
  Gift,
} from "lucide-react";

const faqData = [
  {
    id: "q1",
    question: "Làm sao để đặt đồ uống tại Highlands Coffee?",
    answer:
      "Bạn có thể đến trực tiếp cửa hàng, đặt qua ứng dụng giao hàng (Grab, ShopeeFood, Baemin) hoặc qua website của chúng tôi. Chọn món yêu thích, xác nhận đơn và tận hưởng hương vị Highlands!",
    icon: Coffee,
  },
  {
    id: "q2",
    question: "Highlands Coffee có giao hàng tận nơi không?",
    answer:
      "Có! Chúng tôi hỗ trợ giao hàng tận nơi qua các đối tác như GrabFood, ShopeeFood và Baemin. Thời gian giao hàng tùy thuộc vào khu vực của bạn (thường 15–30 phút).",
    icon: Truck,
  },
  {
    id: "q3",
    question: "Có thể thanh toán bằng hình thức nào?",
    answer:
      "Highlands Coffee chấp nhận thanh toán bằng tiền mặt, thẻ tín dụng/ghi nợ, và các ví điện tử như Momo, ZaloPay, ShopeePay.",
    icon: CreditCard,
  },
  {
    id: "q4",
    question: "Làm sao để tham gia chương trình thành viên Highlands Coffee?",
    answer:
      "Bạn có thể đăng ký tài khoản trên ứng dụng Highlands Coffee Rewards để tích điểm, nhận ưu đãi và quà tặng sinh nhật.",
    icon: Gift,
  },
  {
    id: "q5",
    question: "Tôi có thể liên hệ Highlands Coffee bằng cách nào?",
    answer:
      "Bạn có thể gửi phản hồi qua mục 'Liên hệ' trên website, gọi hotline 1900 1755 hoặc chat trực tiếp với chúng tôi qua Messenger.",
    icon: MessageSquare,
  },
];

const HelpPage = () => {
  return (
    <div className="container py-8 mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <Coffee className="w-16 h-16 mx-auto mb-4 text-amber-700" />
        <h1 className="mb-2 text-3xl font-bold md:text-4xl text-amber-800">
          Trung Tâm Trợ Giúp Highlands Coffee
        </h1>
        <p className="text-lg text-muted-foreground">
          Chúng tôi luôn sẵn sàng phục vụ bạn!
        </p>
      </motion.div>

      {/* Thanh tìm kiếm */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative max-w-2xl mx-auto mb-10"
      >
        <Input
          type="search"
          placeholder="Tìm kiếm câu hỏi hoặc vấn đề của bạn..."
          className="w-full py-3 pl-10 pr-4 rounded-full shadow-md text-md"
        />
        <Search className="absolute w-5 h-5 -translate-y-1/2 left-4 top-1/2 text-muted-foreground" />
      </motion.div>

      {/* FAQs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="mb-6 text-2xl font-semibold text-center md:text-left text-amber-800">
          Câu hỏi thường gặp (FAQs)
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="transition-shadow border rounded-lg shadow bg-card hover:shadow-md dark:border-slate-700"
            >
              <AccordionTrigger className="p-4 md:p-5 text-md hover:no-underline">
                <div className="flex items-center">
                  <faq.icon className="w-5 h-5 mr-3 text-amber-700" />
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 pt-0 text-sm leading-relaxed md:p-5 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      {/* Liên hệ hỗ trợ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-12 text-center"
      >
        <h3 className="mb-3 text-xl font-semibold text-amber-800">
          Không tìm thấy câu trả lời?
        </h3>
        <p className="mb-4 text-muted-foreground">
          Đừng ngần ngại liên hệ với đội ngũ Highlands Coffee.
        </p>
        <Button
          size="lg"
          className="px-6 text-white rounded-full bg-amber-700 hover:bg-amber-800"
        >
          <MessageSquare className="w-5 h-5 mr-2" /> Liên Hệ Hỗ Trợ
        </Button>
      </motion.div>
    </div>
  );
};

export default HelpPage;
