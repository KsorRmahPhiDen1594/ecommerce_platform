// import React from "react";
// import { Link } from "react-router-dom";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Star, Heart, ShoppingCart } from "lucide-react";
// import { motion } from "framer-motion";
// import { useShoppingCart } from "@/contexts/ShoppingCartContext";
// import { useWishlist } from "@/contexts/WishlistContext";

// const ProductCard = ({ product }) => {
//   const { addToCart } = useShoppingCart();
//   const { toggleWishlist, isInWishlist } = useWishlist();
//   const isWishlisted = isInWishlist(product.id);

//   const handleAddToCart = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     addToCart(product);
//   };

//   const handleToggleWishlist = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     toggleWishlist(product);
//   };

//   const actualPrice = parseFloat(String(product.price).replace(/[.₫]/g, ""));
//   const discountPrice = product.originalPrice
//     ? parseFloat(String(product.originalPrice).replace(/[.₫]/g, ""))
//     : actualPrice;
//   const discountPercentage = product.originalPrice
//     ? Math.round(((discountPrice - actualPrice) / discountPrice) * 100)
//     : 0;

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.3 }}
//       className="h-full"
//     >
//       <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl group border-border/60 hover:border-primary/50 dark:border-border/30 dark:hover:border-primary/50">
//         <Link to={`/product/${product.id}`} className="block">
//           <CardContent className="flex flex-col flex-grow p-0">
//             <div className="relative">
//               <img
//                 className="object-cover w-full h-48 transition-transform duration-300 md:h-56 group-hover:scale-105"
//                 alt={product.alt || product.name}
//                 src="https://images.unsplash.com/photo-1674027392838-d85710a5121d"
//               />
//               {discountPercentage > 0 && (
//                 <Badge
//                   variant="destructive"
//                   className="absolute text-xs top-2 right-2"
//                 >
//                   -{discountPercentage}%
//                 </Badge>
//               )}
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className={`absolute top-2 left-2 h-8 w-8 rounded-full bg-white/70 dark:bg-black/50 hover:bg-white dark:hover:bg-black ${
//                   isWishlisted
//                     ? "text-red-500"
//                     : "text-muted-foreground hover:text-red-400"
//                 }`}
//                 onClick={handleToggleWishlist}
//               >
//                 <Heart
//                   className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`}
//                 />
//               </Button>
//             </div>
//             <div className="p-3 md:p-4 space-y-1.5 flex flex-col flex-grow">
//               <h3 className="h-10 text-sm font-semibold transition-colors md:text-md line-clamp-2 group-hover:text-primary md:h-12">
//                 {product.name}
//               </h3>
//               <div className="flex items-baseline space-x-2">
//                 <p className="font-bold text-primary text-md md:text-lg">
//                   {product.price}
//                 </p>
//                 {product.originalPrice && (
//                   <p className="text-xs line-through md:text-sm text-muted-foreground">
//                     {product.originalPrice}
//                   </p>
//                 )}
//               </div>
//               {product.rating && (
//                 <div className="flex items-center text-xs text-muted-foreground">
//                   <Star className="h-3.5 w-3.5 text-yellow-400 fill-current mr-1" />
//                   <span>{product.rating}</span>
//                   <span className="mx-1">|</span>
//                   <span>Đã bán {product.soldCount || 0}</span>
//                 </div>
//               )}
//               <div className="text-xs text-muted-foreground">
//                 {product.location || "Toàn quốc"}
//               </div>
//               <div className="pt-2 mt-auto">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="w-full border-primary/70 text-primary hover:bg-primary/10 hover:text-primary dark:border-primary/50 dark:hover:bg-primary/20"
//                   onClick={handleAddToCart}
//                 >
//                   <ShoppingCart className="w-4 h-4 mr-2" /> Thêm vào giỏ
//                 </Button>
//               </div>
//             </div>
//           </CardContent>
//         </Link>
//       </Card>
//     </motion.div>
//   );
// };

// export default ProductCard;


import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import { useWishlist } from "@/contexts/WishlistContext";

const ProductCard = ({ product }) => {
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

  // ✅ Lấy giá thực tế và phần trăm giảm giá từ backend
  const actualPrice = product.discountPrice ?? product.price;
  const discountPercentage =
    product.discountPercent ||
    (product.discountPrice && product.price
      ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
      : 0);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl group border-border/60 hover:border-primary/50 dark:border-border/30 dark:hover:border-primary/50">
        <Link to={`/product/${product.id}`} className="block">
          <CardContent className="flex flex-col flex-grow p-0">
            <div className="relative">
              <img
                className="object-cover w-full h-48 transition-transform duration-300 md:h-56 group-hover:scale-105"
                alt={product.name}
                src={
                  product.imageUrl
                    ? `http://localhost:8080/images/${product.imageUrl}`
                    : "https://via.placeholder.com/300x300?text=No+Image"
                }
              />
              {discountPercentage > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute text-xs top-2 right-2"
                >
                  -{discountPercentage}%
                </Badge>
              )}
              <Button
                variant="ghost"
                size="icon"
                className={`absolute top-2 left-2 h-8 w-8 rounded-full bg-white/70 dark:bg-black/50 hover:bg-white dark:hover:bg-black ${
                  isWishlisted
                    ? "text-red-500"
                    : "text-muted-foreground hover:text-red-400"
                }`}
                onClick={handleToggleWishlist}
              >
                <Heart
                  className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`}
                />
              </Button>
            </div>

            <div className="p-3 md:p-4 space-y-1.5 flex flex-col flex-grow">
              <h3 className="h-10 text-sm font-semibold transition-colors md:text-md line-clamp-2 group-hover:text-primary md:h-12">
                {product.name}
              </h3>

              <div className="flex items-baseline space-x-2">
                <p className="font-bold text-primary text-md md:text-lg">
                  {actualPrice?.toLocaleString("vi-VN")}₫
                </p>
                {product.discountPrice && (
                  <p className="text-xs line-through md:text-sm text-muted-foreground">
                    {product.price?.toLocaleString("vi-VN")}₫
                  </p>
                )}
              </div>

              {product.rating && (
                <div className="flex items-center text-xs text-muted-foreground">
                  <Star className="h-3.5 w-3.5 text-yellow-400 fill-current mr-1" />
                  <span>{Number(product.rating || 0).toFixed(1)}</span>
                  <span className="mx-1">|</span>
                  <span>Đã bán {product.soldCount || 0}</span>
                </div>
              )}

              <div className="text-xs text-muted-foreground">
                {product.location || "Toàn quốc"}
              </div>

              <div className="pt-2 mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary/70 text-primary hover:bg-primary/10 hover:text-primary dark:border-primary/50 dark:hover:bg-primary/20"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" /> Thêm vào giỏ
                </Button>
              </div>
            </div>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
