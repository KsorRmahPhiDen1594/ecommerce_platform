import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessageSquare, Send, Layers } from 'lucide-react';

const HighlandsFeed = () => {
  // Dữ liệu `feedItems` sẽ nằm ngay trong file này
  const feedItems = [
    {
      id: 1,
      user: 'Highlands Coffee Đà Nẵng',
      content: '☕ Hôm nay, bạn chọn hương vị nào?',
      image_description: 'Ly cà phê Highlands thơm ngon',
      avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=HighlandsCoffee',
      image_url: 'https://hunufa.vn/wp-content/uploads/2024/10/hinh-anh-ly-cafe-highlands.webp',
    },
    {
      id: 2,
      user: 'Highlands Vincom',
      content: '🎉 Deal cực sốc - Giảm 30% cho combo Freeze + Bánh Ngọt!',
      image_description: 'Combo Freeze và bánh ngọt Highlands',
      avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=HighlandsVincom',
      image_url: 'https://hunufa.vn/wp-content/uploads/2024/10/hinh-anh-ly-cafe-highlands-2.webp',
    },
    {
      id: 3,
      user: 'Highlands Coffee Hội An',
      content: '🌅 Mỗi sáng một tách Phindi - khởi đầu ngày mới!',
      image_description: 'Ly Phindi buổi sáng',
      avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=HighlandsHoiAn',
      image_url: 'https://hunufa.vn/wp-content/uploads/2024/10/hinh-anh-ly-cafe-highlands.webp',
    },
  ];

  return (
    <section>
      <h2 className='flex items-center mb-4 text-xl font-semibold md:text-2xl'>
        <Layers className='w-6 h-6 mr-2 text-red-600' /> Highlands Feed
      </h2>
      <div className='space-y-4 md:space-y-6'>
        {feedItems.map((item) => (
          <Card key={item.id} className='transition-shadow shadow-sm hover:shadow-md'>
            <CardHeader className='p-3 md:p-4'>
              <div className='flex items-center space-x-3'>
                <img
                  className='w-10 h-10 border rounded-full md:h-11 md:w-11'
                  alt={`${item.user} avatar`}
                  src={item.avatar}
                />
                <div>
                  <span className='text-sm font-semibold md:text-md'>{item.user}</span>
                  <p className='text-xs text-muted-foreground'>2 giờ trước</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className='px-3 pb-1 md:px-4 md:pb-2'>
              <p className='mb-2 text-sm whitespace-pre-line md:text-md'>{item.content}</p>
              <img
                className='object-cover w-full h-auto border rounded-md max-h-96'
                alt={item.image_description}
                src={item.image_url}
              />
            </CardContent>
            <CardFooter className='flex justify-around p-1 border-t md:p-2'>
              <Button
                variant='ghost'
                size='sm'
                className='w-full text-muted-foreground hover:text-red-600'
              >
                <Heart className='mr-1.5 h-4 w-4' /> Thích
              </Button>
              <Button
                variant='ghost'
                size='sm'
                className='w-full text-muted-foreground hover:text-red-600'
              >
                <MessageSquare className='mr-1.5 h-4 w-4' /> Bình luận
              </Button>
              <Button
                variant='ghost'
                size='sm'
                className='w-full text-muted-foreground hover:text-red-600'
              >
                <Send className='mr-1.5 h-4 w-4' /> Chia sẻ
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HighlandsFeed;
