// FlashSale.jsx
import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard.jsx';
import { fetchProducts } from '@/api/productApi';
import { useToast } from '@/components/ui/use-toast';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <span key={interval} className='px-2 py-1 font-mono text-sm text-white rounded bg-white/20'>
      {String(timeLeft[interval] || 0).padStart(2, '0')}
    </span>
  ));

  return timerComponents.length ? (
    <div className='flex items-center space-x-1'>
      {timerComponents.reduce(
        (acc, curr, i) => (i ? [...acc, <span key={i}>:</span>, curr] : [curr]),
        [],
      )}
    </div>
  ) : (
    <span className='px-2 py-1 font-mono text-sm text-white rounded bg-white/20'>Hết giờ!</span>
  );
};

const FlashSale = () => {
  const { toast } = useToast();
  const flashSaleEndDate = new Date(Date.now() + 2 * 60 * 60 * 1000 + 30 * 60 * 1000);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log('Dữ liệu từ API:', data);
        setProducts(data);
      } catch (err) {
        console.error('Lỗi khi tải sản phẩm:', err);
        toast({
          title: 'Lỗi',
          description: 'Không thể tải sản phẩm flash sale.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [toast]);

  return (
    <Card className='border-red-400 shadow-lg'>
      <CardHeader className='p-4 text-white rounded-t-lg gradient-highlands md:p-5'>
        <CardTitle className='flex items-center justify-between text-xl md:text-2xl'>
          <div className='flex items-center'>
            <Zap className='w-6 h-6 mr-2 md:h-7 md:w-7 animate-pulse' /> Flash Sale
          </div>
          <CountdownTimer targetDate={flashSaleEndDate} />
        </CardTitle>
      </CardHeader>

      <CardContent className='grid grid-cols-2 gap-3 p-3 md:p-4 sm:grid-cols-2 md:grid-cols-4 md:gap-4'>
        {loading ? (
          <p className='col-span-4 text-center text-gray-500'>Đang tải sản phẩm...</p>
        ) : (
          products
            .slice(0, 4)
            .map((product) => <ProductCard key={product.id} product={product} />)
        )}
      </CardContent>
    </Card>
  );
};

export default FlashSale;