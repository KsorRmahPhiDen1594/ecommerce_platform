import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Xin chào! Highlands Coffee có thể giúp gì cho bạn hôm nay?' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    const newMessage = { id: messages.length + 1, sender: 'user', text: inputValue };
    setMessages([...messages, newMessage]);
    setInputValue('');

    // Mô phỏng phản hồi của bot
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        sender: 'bot',
        text: 'Cảm ơn bạn! Chúng tôi sẽ phản hồi sớm nhất có thể ☕',
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Nút mở chat */}
      <motion.div
        className='fixed bottom-6 right-6 z-[999]'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      >
        <Button
          size='lg'
          className='w-16 h-16 p-4 rounded-full shadow-xl bg-gradient-to-r from-[#7B1E1E] to-[#4B1E1E] text-[#F8F5EE] hover:from-[#8E2424] hover:to-[#5A2323] transition-all'
          onClick={toggleChat}
        >
          {isOpen ? <X className='h-7 w-7' /> : <MessageSquare className='h-7 w-7' />}
        </Button>
      </motion.div>

      {/* Hộp chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='fixed bottom-24 right-6 z-[998] w-80 md:w-96'
          >
            <Card className='shadow-2xl border-[#7B1E1E]/40 bg-[#F8F5EE]'>
              <CardHeader className='p-4 bg-gradient-to-r from-[#7B1E1E] to-[#4B1E1E] text-[#F8F5EE]'>
                <CardTitle className='flex items-center text-lg font-semibold'>
                  <MessageSquare className='w-5 h-5 mr-2 text-[#C6A664]' /> Hỗ trợ Highlands Coffee
                </CardTitle>
              </CardHeader>

              <CardContent className='p-4 space-y-3 overflow-y-auto h-80'>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[75%] p-2.5 rounded-lg text-sm ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-[#7B1E1E] to-[#4B1E1E] text-[#F8F5EE] rounded-br-none'
                          : 'bg-[#EDE3DA] text-[#4B1E1E] rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </CardContent>

              <CardFooter className='p-3 border-t border-[#C6A664]/30 bg-[#F8F5EE]'>
                <form onSubmit={handleSendMessage} className='flex w-full space-x-2'>
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder='Nhập tin nhắn...'
                    className='flex-grow border-[#C6A664]/40 focus:ring-[#7B1E1E]'
                  />
                  <Button
                    type='submit'
                    size='icon'
                    className='bg-gradient-to-r from-[#7B1E1E] to-[#4B1E1E] text-[#F8F5EE] hover:from-[#8E2424] hover:to-[#5A2323]'
                  >
                    <Send className='w-4 h-4 text-[#C6A664]' />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
