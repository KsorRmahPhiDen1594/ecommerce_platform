// FeedHighlands.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Coffee, Heart, Gift, Layers, MessageSquare, Send } from 'lucide-react';

const FeedHighlands = () => {
  const feedItems = [
    {
      id: 1,
      user: 'Highlands Coffee Đà Nẵng',
      content:
        '☕ Hôm nay, bạn chọn hương vị nào? Trải nghiệm cà phê đậm vị, đậm tình cùng Highlands Coffee!',
      image_description: 'Ly cà phê Highlands thơm ngon',
      alt: 'Ly cà phê Highlands',
      avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=HighlandsCoffee',
    },
    {
      id: 2,
      user: 'Highlands Vincom',
      content: '🎉 Deal cực sốc - Giảm 30% cho combo Freeze + Bánh Ngọt khi đặt hàng online!',
      image_description: 'Combo Freeze và bánh ngọt Highlands',
      alt: 'Combo Freeze Highlands',
      avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=HighlandsVincom',
    },
    {
      id: 3,
      user: 'Highlands Coffee Hội An',
      content: '🌅 Mỗi sáng một tách Phindi - khởi đầu ngày mới tràn năng lượng!',
      image_description: 'Ly Phindi buổi sáng',
      alt: 'Phindi Highlands',
      avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=HighlandsHoiAn',
    },
  ];

  return (
    <section className='flex flex-col gap-6 py-6 md:flex-row md:gap-8'>
      {/* Cột trái (menu mô phỏng Facebook) */}
      <aside className='hidden space-y-3 text-gray-700 md:flex md:flex-col md:w-60'>
        <div className='flex items-center p-2 space-x-3 rounded-lg cursor-pointer hover:bg-gray-200'>
          <Coffee className='text-red-700' size={20} /> <span>Trang chủ Highlands</span>
        </div>
        <div className='flex items-center p-2 space-x-3 rounded-lg cursor-pointer hover:bg-gray-200'>
          <Heart className='text-red-700' size={20} /> <span>Ưa thích</span>
        </div>
        <div className='flex items-center p-2 space-x-3 rounded-lg cursor-pointer hover:bg-gray-200'>
          <Gift className='text-red-700' size={20} /> <span>Khuyến mãi</span>
        </div>
        <div className='flex items-center p-2 space-x-3 rounded-lg cursor-pointer hover:bg-gray-200'>
          <Layers className='text-red-700' size={20} /> <span>Feed Highlands</span>
        </div>
      </aside>

      {/* Cột giữa - Feed chính */}
      <main className='w-full md:w-[600px] space-y-5 mx-auto transition-all duration-300 md:ml-0 lg:ml-28'>
        {feedItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className='relative transition-all bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md'>
              {/* Header */}
              <CardHeader className='flex items-start p-4 pb-2'>
                {/* Trái: Avatar + tên + thời gian */}
                <div className='flex space-x-3'>
                  <img
                    src={item.avatar}
                    alt={`${item.user} avatar`}
                    className='w-10 h-10 border rounded-full'
                    loading='lazy' // Add lazy loading for avatars
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className='text-sm font-semibold text-gray-900'>
                      {item.user}{' '}
                      <span className='font-normal text-gray-500'>
                        cùng với <span className='font-semibold text-gray-900 '>Nghĩa Văn Vũ</span>{' '}
                        và 4 người khác.
                      </span>
                    </p>
                    <span className='text-xs text-gray-500'>2 ngày · 🌍</span>
                  </div>
                </div>

                {/* Phải: Nút menu ••• */}
                <button
                  type='button'
                  aria-label='More options'
                  className='absolute p-1 text-gray-400 transition rounded-full top-3 right-3 hover:text-gray-600 hover:bg-gray-100'
                >
                  •••
                </button>
              </CardHeader>

              {/* Nội dung bài */}
              <CardContent className='px-4 py-2'>
                <p className='mb-3 text-[15px] text-gray-800 leading-relaxed'>{item.content}</p>
                <div className='overflow-hidden rounded-lg'>
                  <img
                    src={
                      item.id === 1
                        ? 'https://www.highlandscoffee.com.vn/vnt_upload/news/03_2023/CoverFB.png'
                        : item.id === 2
                          ? 'https://www.highlandscoffee.com.vn/vnt_upload/news/03_2023/CoverFB.png'
                          : 'https://www.highlandscoffee.com.vn/vnt_upload/news/03_2023/CoverFB.png'
                    }
                    alt={item.alt}
                    className='object-cover w-full'
                    loading='lazy' // Add lazy loading for post images
                    width={600} // Approximate dimensions
                    height={300}
                  />
                </div>
              </CardContent>

              {/* Thanh tương tác */}
              <CardFooter className='px-2 border-t border-gray-200'>
                <div className='flex justify-between w-full text-sm font-medium text-gray-600'>
                  <button className='flex items-center justify-center gap-2 px-4 mt-4 text-gray-700 transition rounded-md hover:text-red-600'>
                    <Heart size={18} /> Thích
                  </button>
                  <button className='flex items-center justify-center gap-2 px-4 mt-4 text-gray-700 transition rounded-md hover:text-red-600'>
                    <MessageSquare size={18} /> Bình luận
                  </button>
                  <button className='flex items-center justify-center gap-2 px-4 mt-4 text-gray-700 transition rounded-md hover:text-red-600'>
                    <Send size={18} /> Chia sẻ
                  </button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </main>

      {/* Cột phải - Sidebar gợi ý */}
      <aside className='flex-col hidden w-64 space-y-4 transition-all duration-300 lg:flex lg:ml-16 xl:ml-32'>
        <div className='p-4 bg-white border border-gray-200 shadow-sm rounded-xl'>
          <h3 className='mb-3 font-semibold text-gray-800'>Được tài trợ</h3>
          <div className='space-y-3'>
            <div className='flex items-center space-x-3'>
              <img
                src='https://bizweb.dktcdn.net/100/487/455/themes/917232/assets/logo.png?1759892738511'
                alt='Bánh mì phô mai'
                className='w-12 h-12 rounded-lg'
                loading='lazy' // Add lazy loading
                width={48}
                height={48}
              />
              <p className='text-sm text-gray-700'>
                Mua 1 bánh mì phô mai, tặng ngay 1 ly cà phê sữa đá size M!
              </p>
            </div>

            <div className='flex items-center space-x-3'>
              <img
                src='https://bizweb.dktcdn.net/100/487/455/themes/917232/assets/logo.png?1759892738511'
                alt='Cà phê sữa đá'
                className='w-12 h-12 rounded-lg'
                loading='lazy'
                width={48}
                height={48}
              />
              <p className='text-sm text-gray-700'>
                Cà phê sữa đá đậm vị truyền thống – giảm 15% khi mua combo sáng!
              </p>
            </div>

            <div className='flex items-center space-x-3'>
              <img
                src='https://bizweb.dktcdn.net/100/487/455/themes/917232/assets/logo.png?1759892738511'
                alt='Trà vải'
                className='w-12 h-12 rounded-lg'
                loading='lazy'
                width={48}
                height={48}
              />
              <p className='text-sm text-gray-700'>
                Thưởng thức Trà Vải Mát Lạnh – vị ngọt thanh giải nhiệt ngày hè.
              </p>
            </div>

            <div className='flex items-center space-x-3'>
              <img
                src='https://bizweb.dktcdn.net/100/487/455/themes/917232/assets/logo.png?1759892738511'
                alt='Caramel Macchiato'
                className='w-12 h-12 rounded-lg'
                loading='lazy'
                width={48}
                height={48}
              />
              <p className='text-sm text-gray-700'>
                Caramel Macchiato – ngọt ngào hương caramel, đậm đà vị cà phê.
              </p>
            </div>

            <div className='flex items-center space-x-3'>
              <img
                src='https://bizweb.dktcdn.net/100/487/455/themes/917232/assets/logo.png?1759892738511'
                alt='Bạc xỉu'
                className='w-12 h-12 rounded-lg'
                loading='lazy'
                width={48}
                height={48}
              />
              <p className='text-sm text-gray-700'>
                Bạc xỉu Highlands – béo nhẹ, thơm lừng, cho buổi sáng đầy năng lượng.
              </p>
            </div>

            <div className='flex items-center space-x-3'>
              <img
                src='https://bizweb.dktcdn.net/100/487/455/themes/917232/assets/logo.png?1759892738511'
                alt='Nâng size miễn phí'
                className='w-12 h-12 rounded-lg'
                loading='lazy'
                width={48}
                height={48}
              />
              <p className='text-sm text-gray-700'>
                Mua ly size M – được nâng size L miễn phí khi đặt qua app Highlands!
              </p>
            </div>

            <div className='flex items-center space-x-3'>
              <img
                src='https://bizweb.dktcdn.net/100/487/455/themes/917232/assets/logo.png?1759892738511'
                alt='Trà Sen Vàng'
                className='w-12 h-12 rounded-lg'
                loading='lazy'
                width={48}
                height={48}
              />
              <p className='text-sm text-gray-700'>
                Trà Sen Vàng – tinh hoa hương vị Việt, thưởng thức ngay hôm nay.
              </p>
            </div>
          </div>
        </div>

        <div className='p-4 bg-white border border-gray-200 shadow-sm rounded-xl'>
          <h3 className='mb-3 font-semibold text-gray-800'>Gợi ý kết nối</h3>
          <div className='space-y-3'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <img
                  src='https://api.dicebear.com/7.x/personas/svg?seed=CoffeeLover'
                  alt='user'
                  className='border rounded-full w-9 h-9'
                  loading='lazy'
                  width={36}
                  height={36}
                />
                <p className='text-sm font-medium text-gray-800'>Coffee Lover</p>
              </div>
              <Button size='sm' className='text-xs text-white bg-red-600 hover:bg-red-700'>
                Kết bạn
              </Button>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <img
                  src='https://api.dicebear.com/7.x/personas/svg?seed=PhindiFan'
                  alt='user'
                  className='border rounded-full w-9 h-9'
                  loading='lazy'
                  width={36}
                  height={36}
                />
                <p className='text-sm font-medium text-gray-800'>Phindi Fan</p>
              </div>
              <Button size='sm' className='text-xs text-white bg-red-600 hover:bg-red-700'>
                Kết bạn
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default FeedHighlands;
