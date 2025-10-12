import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Star, ShoppingCart, Minus, Plus, ChevronLeft, ChevronRight, Heart, Loader2, PlayCircle, X, ThumbsUp, ThumbsDown, MessageSquare, ShieldCheck, Truck } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from '@/components/ProductCard.jsx';
import { useShoppingCart } from '@/contexts/ShoppingCartContext.jsx';
import { useWishlist } from '@/contexts/WishlistContext.jsx';
import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useShoppingCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();

  // === State dữ liệu ===
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // === State UI ===
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [mainMediaIndex, setMainMediaIndex] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  // === Fetch product ===
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch product chính
        const res = await axios.get(`http://localhost:8080/api/products/${id}`);
        const apiProduct = res.data;

        const mappedProduct = {
          id: apiProduct.id.toString(),
          name: apiProduct.name,
          price: new Intl.NumberFormat('vi-VN').format(apiProduct.price) + '₫',
          originalPrice: apiProduct.discountPrice
            ? new Intl.NumberFormat('vi-VN').format(apiProduct.discountPrice) + '₫'
            : null,
          discountPercent: apiProduct.discountPercent || 0,
          rating: apiProduct.rating || 0,
          soldCount: apiProduct.soldCount || 0,
          stock: apiProduct.stock || 0,
          description: apiProduct.description || 'Không có mô tả.',
          category: apiProduct.category,
          variants: {
            color: apiProduct.colors ? apiProduct.colors.map(c => c.color) : [],
            size: apiProduct.sizes ? apiProduct.sizes.map(s => s.size) : [],
          },
         images: apiProduct.images && apiProduct.images.length > 0
          ? apiProduct.images.map(img => ({
              type: 'image',
              src: img.startsWith('http') ? img : `http://localhost:8080/images/${img}`,
              alt: apiProduct.name
            }))
          : apiProduct.imageUrl
            ? [{
                type: 'image',
                src: apiProduct.imageUrl.startsWith('http') 
                  ? apiProduct.imageUrl 
                  : `http://localhost:8080/images/${apiProduct.imageUrl}`,
                alt: apiProduct.name
              }]
            : [],

          seller: {
            name: "ShopeeCharm Official Store",
            avatar: "logo.jpg",
            rating: "4.9/5.0",
            reviews: "35.6k",
            products: 1500,
            responseRate: "98%",
            responseTime: "Trong vài phút",
            joined: "3 năm trước",
            isOfficial: true,
            location: apiProduct.location || "Hà Nội"
          },
          shippingInfo: "Miễn phí vận chuyển cho đơn hàng từ 150.000₫",
          returnPolicy: "Đổi trả trong 7 ngày nếu có lỗi từ nhà sản xuất hoặc không vừa ý (có điều kiện).",
          highlights: ["Chất liệu cao cấp", "Thiết kế hiện đại", "Bền bỉ", "Dễ phối đồ"]
        };

        setProduct(mappedProduct);
        setSelectedColor(mappedProduct.variants.color[0] || '');
        setSelectedSize(mappedProduct.variants.size[0] || '');

        // Mock reviews
        setReviews([
          { id: 1, user: "Nguyễn Văn B", avatar: "avatar1.jpg", rating: 5, comment: "Sản phẩm tuyệt vời!", date: "2025-10-11", images: [], likes: 15, dislikes: 0 }
        ]);

        // Fetch related products (mock tạm)
        // Fetch related products từ API và random 2 sản phẩm
        try {
          const relatedRes = await axios.get('http://localhost:8080/api/products');
          const allProducts = relatedRes.data;

          // Loại bỏ sản phẩm hiện tại
          const filteredProducts = allProducts.filter(p => p.id.toString() !== id);

          // Random 2 sản phẩm
          const randomProducts = filteredProducts
            .sort(() => 0.5 - Math.random())
            .slice(0, 2)
            .map(p => ({
              id: p.id.toString(),
              name: p.name,
              price: new Intl.NumberFormat('vi-VN').format(p.price) + '₫',
              imageUrl: p.imageUrl,
              rating: p.rating || 0,
              soldCount: p.soldCount || 0
            }));

          setRelatedProducts(randomProducts);
        } catch (err) {
          console.error('Lấy sản phẩm liên quan thất bại', err);
          setRelatedProducts([]); // fallback
        }


      } catch (err) {
        console.error(err);
        setError('Không tải được sản phẩm.');
        toast({ title: 'Lỗi', description: 'Không tải được sản phẩm.', variant: 'destructive' });
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id, toast]);

  if (loading) return <div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 animate-spin" /></div>;
  if (error || !product) return <div className="py-8 text-center">{error || 'Sản phẩm không tồn tại.'}</div>;

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, { 
      color: selectedColor, 
      size: selectedSize,
      image: product.images[0]?.src, // <-- truyền ảnh chính
      alt: product.images[0]?.alt
    });
    toast({ title: 'Thêm vào giỏ hàng', description: `${product.name} đã được thêm.` });
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
    toast({
      title: isWishlisted ? 'Xóa khỏi yêu thích' : 'Thêm vào yêu thích',
      description: `${product.name} ${isWishlisted ? 'đã xóa' : 'đã thêm'}.`,
    });
  };

  const openImageModal = (src) => {
    setModalImageSrc(src);
    setShowImageModal(true);
  };

  // Tính discount %
  let discountPercentage = product.originalPrice
    ? Math.round(((parseFloat(product.originalPrice.replace(/[.₫]/g,'')) - parseFloat(product.price.replace(/[.₫]/g,''))) / parseFloat(product.originalPrice.replace(/[.₫]/g,''))) * 100)
    : 0;

  return (
    <div className="container p-4 mx-auto space-y-6">
      {/* Breadcrumb */}
      <nav className="mb-2 text-sm text-muted-foreground">
        <Link to="/">Trang chủ</Link> &gt;{' '}
        <Link to={`/category/${product.category.name.toLowerCase().replace(/ /g, '-')}`}>
          {product.category.name}
        </Link> &gt; <span>{product.name}</span>
      </nav>

      {/* Main Product Card */}
      <Card>
        <CardContent className="grid gap-6 lg:grid-cols-5">
          {/* Gallery */}
          <div className="space-y-2 lg:col-span-2">
            <div className="relative">
              {product.images[mainMediaIndex].type === 'image' ? (
                <img src={product.images[mainMediaIndex].src} alt={product.name} className="w-full cursor-pointer" onClick={() => openImageModal(product.images[mainMediaIndex].src)} />
              ) : (
                <div className="relative">
                  <img src={product.images[mainMediaIndex].thumbnail} alt={product.name} className="w-full opacity-50" />
                  <PlayCircle className="absolute inset-0 w-20 h-20 m-auto text-white cursor-pointer" onClick={() => alert('Play video')} />
                </div>
              )}
              {/* Nav arrows */}
              <Button size="icon" variant="ghost" className="absolute left-0 -translate-y-1/2 top-1/2" onClick={() => setMainMediaIndex((mainMediaIndex-1+product.images.length)%product.images.length)}><ChevronLeft /></Button>
              <Button size="icon" variant="ghost" className="absolute right-0 -translate-y-1/2 top-1/2" onClick={() => setMainMediaIndex((mainMediaIndex+1)%product.images.length)}><ChevronRight /></Button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((img, idx) => (
                <img key={idx} src={img.type==='image'? img.src : img.thumbnail} alt={img.alt} className={`cursor-pointer border-2 ${mainMediaIndex===idx ? 'border-primary' : 'border-transparent'}`} onClick={() => setMainMediaIndex(idx)} />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-3 lg:col-span-3">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-yellow-500">{product.rating}</span>
              <Star className="w-4 h-4 text-yellow-400" />
              <span>{product.soldCount} đã bán</span>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold">{product.price}</span>
              {product.originalPrice && <span className="line-through text-muted-foreground">{product.originalPrice}</span>}
              {discountPercentage > 0 && <Badge variant="destructive">{discountPercentage}% OFF</Badge>}
            </div>

            {/* Variants */}
            <div className="flex gap-4">
              <div>
                <Label>Màu:</Label>
                <div className="flex gap-2 mt-1">
                  {product.variants.color.map((c, i) => (
                    <Button key={i} size="sm" variant={selectedColor===c ? 'default' : 'outline'} onClick={()=>setSelectedColor(c)}>{c}</Button>
                  ))}
                </div>
              </div>
              <div>
                <Label>Dung lượng:</Label>
                <div className="flex gap-2 mt-1">
                  {product.variants.size.map((s, i) => (
                    <Button key={i} size="sm" variant={selectedSize===s ? 'default' : 'outline'} onClick={()=>setSelectedSize(s)}>{s}</Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-2 mt-3">
              <Label>Số lượng:</Label>
              <div className="flex items-center border rounded">
                <Button size="icon" variant="outline" onClick={()=>setQuantity(Math.max(1, quantity-1))}><Minus /></Button>
                <Input value={quantity} onChange={e=>setQuantity(Number(e.target.value))} className="w-12 text-center" />
                <Button size="icon" variant="outline" onClick={()=>setQuantity(quantity+1)}><Plus /></Button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mt-4">
              <Button className="flex-1" onClick={handleAddToCart}><ShoppingCart className="mr-2" /> Thêm vào giỏ</Button>
              <Button variant={isWishlisted ? 'destructive' : 'outline'} onClick={handleToggleWishlist}><Heart className="mr-2" /> Yêu thích</Button>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="mt-6">
              <TabsList>
                <TabsTrigger value="description">Mô tả</TabsTrigger>
                <TabsTrigger value="reviews">Đánh giá</TabsTrigger>
                <TabsTrigger value="shipping">Vận chuyển</TabsTrigger>
              </TabsList>
              <TabsContent value="description">
                <p className="whitespace-pre-wrap">{product.description}</p>
                {product.highlights.length>0 && (
                  <ul className="pl-5 mt-2 list-disc">
                    {product.highlights.map((h,i)=> <li key={i}>{h}</li>)}
                  </ul>
                )}
              </TabsContent>
              <TabsContent value="reviews">
                {reviews.length===0 ? <p>Chưa có đánh giá.</p> :
                  reviews.map(r=>(
                    <Card key={r.id} className="mb-2">
                      <CardContent className="flex gap-3">
                        <img src={r.avatar} className="w-10 h-10 rounded-full" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{r.user}</span>
                            <span className="text-yellow-500">{r.rating} <Star className="inline w-4 h-4" /></span>
                          </div>
                          <p>{r.comment}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                }
              </TabsContent>
              <TabsContent value="shipping">
                <div className="space-y-2">
                  <p><Truck className="inline mr-1" /> {product.shippingInfo}</p>
                  <p><ShieldCheck className="inline mr-1" /> {product.returnPolicy}</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      {/* Related Products */}
      <div>
        <h2 className="mb-3 text-xl font-bold">Sản phẩm liên quan</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map(p=> <ProductCard key={p.id} product={p} />)}
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative">
            <img src={modalImageSrc} alt="Zoom" className="max-h-[80vh] max-w-[90vw]" />
            <Button size="icon" variant="ghost" className="absolute top-2 right-2" onClick={()=>setShowImageModal(false)}><X /></Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
