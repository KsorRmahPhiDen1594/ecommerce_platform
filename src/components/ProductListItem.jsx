import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import { useWishlist } from '@/contexts/WishlistContext';

const ProductListItem = ({ product }) => {
  const { addToCart } = useShoppingCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  // ✅ Đồng bộ logic tính giá với backend
  const actualPrice = product.discountPrice ?? product.price;
  const discountPercentage =
    product.discountPercent ||
    (product.discountPrice && product.price
      ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
      : 0);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className='flex overflow-hidden transition-shadow duration-300 hover:shadow-xl group border-border/60 hover:border-primary/50 dark:border-border/30 dark:hover:border-primary/50'>
        <Link to={`/product/${product.id}`} className='flex w-full'>
          {/* Ảnh sản phẩm */}
          <div className='relative w-1/3'>
            <img
              className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'
              alt={product.name}
              src={
                product.imageUrl
                  ? `http://localhost:8080/images/${product.imageUrl}`
                  : 'https://via.placeholder.com/300x300?text=No+Image'
              }
            />
            {discountPercentage > 0 && (
              <Badge variant='destructive' className='absolute text-xs top-2 right-2'>
                -{discountPercentage}%
              </Badge>
            )}
          </div>

          {/* Thông tin sản phẩm */}
          <div className='flex flex-col justify-between w-2/3 p-4'>
            <div>
              <h3 className='mb-1 text-lg font-semibold group-hover:text-primary line-clamp-2'>
                {product.name}
              </h3>

              <p className='mb-2 text-sm text-muted-foreground line-clamp-2'>
                {product.description ||
                  'Mô tả ngắn gọn về sản phẩm này. Thiết kế hiện đại và tiện dụng.'}
              </p>

              {product.rating && (
                <div className='flex items-center mb-2 text-sm text-muted-foreground'>
                  <Star className='w-4 h-4 mr-1 text-yellow-400 fill-current' />
                  <span>{Number(product.rating || 0).toFixed(1)}</span>
                  <span className='mx-1'>|</span>
                  <span>Đã bán {product.soldCount || 0}</span>
                </div>
              )}

              <div className='mb-2 text-xs text-muted-foreground'>
                {product.location || 'Toàn quốc'}
              </div>
            </div>

            {/* Giá + nút thao tác */}
            <div className='flex items-center justify-between mt-2'>
              <div className='flex items-baseline space-x-2'>
                <p className='text-xl font-bold text-primary'>
                  {actualPrice?.toLocaleString('vi-VN')}₫
                </p>
                {product.discountPrice && (
                  <p className='text-sm line-through text-muted-foreground'>
                    {product.price?.toLocaleString('vi-VN')}₫
                  </p>
                )}
              </div>

              <div className='flex items-center space-x-2'>
                <Button
                  variant='ghost'
                  size='icon'
                  className={`h-8 w-8 rounded-full ${
                    isWishlisted ? 'text-red-500' : 'text-muted-foreground hover:text-red-400'
                  }`}
                  onClick={handleToggleWishlist}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </Button>

                <Button
                  size='sm'
                  className='gradient-highlands text-primary-foreground'
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className='mr-1.5 h-4 w-4' /> Thêm vào giỏ
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </Card>
    </motion.div>
  );
};

export default ProductListItem;
