import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  ShoppingCart,
  Trash2,
  Minus,
  Plus,
  Tag,
  ArrowLeft,
} from "lucide-react";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, subtotal, clearCart } =
    useShoppingCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const shippingFee = cartItems.length > 0 ? 30000 : 0; // Example shipping fee
  const discount = 0; // Placeholder for discount logic
  const total = subtotal + shippingFee - discount;

  const handleCheckout = () => {
    if (!currentUser) {
      navigate("/login?redirect=/checkout");
      return;
    }
    if (cartItems.length === 0) {
      // This case should ideally be prevented by disabling the button
      alert("Giỏ hàng trống!");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between p-4 mb-6 rounded-lg shadow-sm bg-card dark:bg-slate-800 md:p-6"
      >
        <h1 className="flex items-center text-2xl font-bold md:text-3xl">
          <ShoppingCart className="mr-3 h-7 w-7 text-primary" /> Giỏ Hàng Của
          Bạn
        </h1>
        <Button variant="outline" asChild>
          <Link to="/" className="flex items-center text-sm">
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Tiếp tục mua sắm
          </Link>
        </Button>
      </motion.div>

      {cartItems.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-16 text-center rounded-lg shadow bg-card dark:bg-slate-800"
        >
          <ShoppingCart className="w-24 h-24 mx-auto mb-6 text-muted-foreground/50" />
          <p className="mb-4 text-xl text-muted-foreground">
            Giỏ hàng của bạn đang trống trơn.
          </p>
          <p className="mb-6 text-sm text-muted-foreground">
            Hãy khám phá thêm nhiều sản phẩm tuyệt vời nhé!
          </p>
          <Button
            asChild
            className="px-8 py-3 gradient-shopee text-primary-foreground text-md"
          >
            <Link to="/">Khám phá ngay</Link>
          </Button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4 lg:col-span-2"
          >
            <Card className="shadow-md">
              <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
                <CardTitle className="text-lg">
                  Sản phẩm trong giỏ ({cartItems.length})
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearCart}
                  className="text-xs text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="mr-1 h-3.5 w-3.5" /> Xóa tất cả
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${JSON.stringify(item.variant)}`}
                    className="flex items-center p-4 transition-colors border-b last:border-b-0 hover:bg-accent/50 dark:hover:bg-slate-700/30"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1694388001616-1176f534d72f"
                      alt={item.alt || item.name}
                      width={96} // tương đương w-24
                      height={96} // tương đương h-24
                      className="object-cover w-20 h-20 mr-4 border rounded-md md:w-24 md:h-24"
                    />
                    <div className="flex-grow">
                      <Link
                        to={`/product/${item.id}`}
                        className="text-sm font-semibold md:text-md hover:text-primary line-clamp-2"
                      >
                        {item.name}
                      </Link>
                      {item.variant && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Phân loại: {item.variant.color}, {item.variant.size}
                        </p>
                      )}
                      <p className="mt-1 text-sm font-bold text-primary md:text-md">
                        {item.price}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1.5 md:space-x-2 mx-2 md:mx-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 md:h-8 md:w-8"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1,
                            item.variant
                          )
                        }
                      >
                        <Minus className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        readOnly
                        className="w-10 px-1 text-center md:w-12 h-7 md:h-8"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 md:h-8 md:w-8"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1,
                            item.variant
                          )
                        }
                      >
                        <Plus className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 text-muted-foreground hover:text-destructive"
                      onClick={() => removeFromCart(item.id, item.variant)}
                    >
                      <Trash2 className="w-4 h-4 md:h-5 md:w-5" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 lg:col-span-1"
          >
            <Card className="sticky shadow-lg glassmorphism top-24">
              <CardHeader className="p-4 border-b">
                <CardTitle className="text-lg">Tóm tắt đơn hàng</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3 text-sm md:text-md">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Tạm tính ({cartItems.length} sản phẩm)
                  </span>
                  <span>{subtotal.toLocaleString()}₫</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phí vận chuyển</span>
                  <span>{shippingFee.toLocaleString()}₫</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Giảm giá</span>
                  <span className="text-green-600">
                    -{discount.toLocaleString()}₫
                  </span>
                </div>
                <hr className="my-2 border-border/70 dark:border-border/30" />
                <div className="flex justify-between font-bold text-md md:text-lg">
                  <span>Tổng cộng</span>
                  <span className="text-primary">
                    {total.toLocaleString()}₫
                  </span>
                </div>
              </CardContent>
              <CardFooter className="p-4">
                <Button
                  size="lg"
                  className="w-full text-base gradient-shopee text-primary-foreground"
                  onClick={handleCheckout}
                  disabled={cartItems.length === 0}
                >
                  Tiến hành thanh toán
                </Button>
              </CardFooter>
            </Card>
            <Card className="shadow-lg">
              <CardHeader className="p-4 border-b">
                <CardTitle className="flex items-center text-lg">
                  <Tag className="w-5 h-5 mr-2 text-primary" /> Mã giảm giá
                </CardTitle>
              </CardHeader>
              <CardContent className="flex p-4 space-x-2">
                <Input
                  placeholder="Nhập mã giảm giá ShopeeCharm"
                  className="text-sm h-9"
                />
                <Button variant="outline" className="text-sm h-9">
                  Áp dụng
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
