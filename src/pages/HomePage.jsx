// HomePage.jsx
import React, { Suspense } from 'react';
import { Link } from 'react-router-dom'; // Nếu không dùng có thể xóa, nhưng giữ nguyên để an toàn

const MainBanner = React.lazy(() => import('./MainBanner'));
const MainCategory = React.lazy(() => import('./MainCategory'));
const FlashSale = React.lazy(() => import('./FlashSale'));
const FeedHighlands = React.lazy(() => import('./FeedHighlands'));

const HomePage = () => {
  return (
    <div className='space-y-8 md:space-y-10'>
      {/* Banner chính */}
      <Suspense fallback={<div className='text-center'>Đang tải banner...</div>}>
        <MainBanner />
      </Suspense>

      {/* Danh mục */}
      <Suspense fallback={<div className='text-center'>Đang tải danh mục...</div>}>
        <MainCategory />
      </Suspense>

      {/* Flash Sale */}
      <Suspense fallback={<div className='text-center'>Đang tải flash sale...</div>}>
        <FlashSale />
      </Suspense>

      {/* Feed Highlands - Layout kiểu Facebook */}
      <Suspense fallback={<div className='text-center'>Đang tải feed...</div>}>
        <FeedHighlands />
      </Suspense>
    </div>
  );
};

export default HomePage;
