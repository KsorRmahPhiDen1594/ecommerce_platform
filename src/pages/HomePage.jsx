import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Coffee,
  CupSoda,
  IceCream,
  Sandwich,
  Cake,
  GlassWater,
  Thermometer,
  FlaskConical,
  Package,
  Zap,
  Percent,
  Gift,
  ShoppingBag,
  Radio,
  Layers,
  Headphones,
  Heart,
  MessageSquare,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import ProductCard from "@/components/ProductCard.jsx";
import { useToast } from "@/components/ui/use-toast";
import { fetchProducts } from "@/api/productApi";
import { Badge } from "@/components/ui/badge";

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
    <span
      key={interval}
      className="px-2 py-1 font-mono text-sm text-white rounded bg-white/20"
    >
      {String(timeLeft[interval] || 0).padStart(2, "0")}
    </span>
  ));

  return timerComponents.length ? (
    <div className="flex items-center space-x-1">
      {timerComponents.reduce(
        (acc, curr, i) => (i ? [...acc, <span key={i}>:</span>, curr] : [curr]),
        []
      )}
    </div>
  ) : (
    <span className="px-2 py-1 font-mono text-sm text-white rounded bg-white/20">
      Hết giờ!
    </span>
  );
};

const HomePage = () => {
  const { toast } = useToast();
  const flashSaleEndDate = new Date(
    Date.now() + 2 * 60 * 60 * 1000 + 30 * 60 * 1000
  );

  // ✅ Danh mục Highlands Coffee + Deal Sốc, Voucher, Quà Tặng
  const categories = [
    { name: "Cà Phê", icon: Coffee, link: "/category/ca-phe" },
    { name: "Trà", icon: CupSoda, link: "/category/tra" },
    { name: "Freeze", icon: IceCream, link: "/category/freeze" },
    { name: "Phindi", icon: Thermometer, link: "/category/phindi" },
    { name: "Bánh Mì Que", icon: Sandwich, link: "/category/banh-mi-que" },
    { name: "Bánh Ngọt", icon: Cake, link: "/category/banh-ngot" },
    {
      name: "Thức Uống Khác",
      icon: GlassWater,
      link: "/category/thuc-uong-khac",
    },
    {
      name: "Bình Giữ Nhiệt",
      icon: FlaskConical,
      link: "/category/binh-giu-nhiet",
    },
    { name: "Ly Giữ Nhiệt", icon: Package, link: "/category/ly-giu-nhiet" },
    { name: "Cà Phê Gói", icon: Coffee, link: "/category/ca-phe-goi" },

    // 🔥 Mục đặc biệt (giữ nguyên)
    { name: "Deal Sốc", icon: Zap, link: "/category/deal-soc", special: true },
    // { name: "Voucher", icon: Percent, link: "/vouchers", special: true },
    { name: "Quà Tặng", icon: Gift, link: "/gifts", special: true },
  ];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log("Dữ liệu từ API:", data);
        setProducts(data);
      } catch (err) {
        console.error("Lỗi khi tải sản phẩm:", err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const feedItems = [
    {
      id: 1,
      user: "Highlands Coffee Đà Nẵng",
      content:
        "☕ Hôm nay, bạn chọn hương vị nào? Trải nghiệm cà phê đậm vị, đậm tình cùng Highlands Coffee!",
      image_description: "Ly cà phê Highlands thơm ngon",
      alt: "Ly cà phê Highlands",
      avatar: "https://api.dicebear.com/7.x/personas/svg?seed=HighlandsCoffee",
    },
    {
      id: 2,
      user: "Highlands Vincom",
      content:
        "🎉 Deal cực sốc - Giảm 30% cho combo Freeze + Bánh Ngọt khi đặt hàng online!",
      image_description: "Combo Freeze và bánh ngọt Highlands",
      alt: "Combo Freeze Highlands",
      avatar: "https://api.dicebear.com/7.x/personas/svg?seed=HighlandsVincom",
    },
    {
      id: 3,
      user: "Highlands Coffee Hội An",
      content:
        "🌅 Mỗi sáng một tách Phindi - khởi đầu ngày mới tràn năng lượng!",
      image_description: "Ly Phindi buổi sáng",
      alt: "Phindi Highlands",
      avatar: "https://api.dicebear.com/7.x/personas/svg?seed=HighlandsHoiAn",
    },
  ];

  return (
    <div className="space-y-8 md:space-y-10">
      {/* Banner chính */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative overflow-hidden rounded-lg shadow-xl"
      >
        <img
          className="object-cover w-full h-48 md:h-80"
          alt="Banner Highlands Coffee"
          src="https://images.unsplash.com/photo-1584542729076-8fb5bb625285"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:p-10">
          <h1 className="mb-2 text-3xl font-bold leading-tight text-white md:text-5xl md:mb-4">
            Săn Sale Mỗi Ngày <br />
            Cùng Highlands Coffee!
          </h1>
          <p className="max-w-lg mb-4 text-gray-200 text-md md:text-lg md:mb-6">
            Khám phá hương vị đặc trưng cùng ưu đãi cực hấp dẫn.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#7B1E1E] to-[#4B1E1E] hover:from-[#8E2424] hover:to-[#5A2323] text-[#F8F5EE] w-fit text-base md:text-lg px-6 py-3 md:px-8 md:py-3.5 font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <ShoppingBag className="w-5 h-5 mr-2 text-[#C6A664]" /> Mua Ngay
          </Button>
        </div>
      </motion.div>

      {/* Danh mục */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 md:gap-4"
      >
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.link}
            className={`flex flex-col items-center justify-center text-center p-2 md:p-3 rounded-lg hover:shadow-lg transition-all duration-300 aspect-square
              ${
                category.special
                  ? "bg-red-100 hover:bg-red-200"
                  : "bg-card hover:bg-accent dark:bg-slate-800 dark:hover:bg-slate-700"
              }`}
          >
            <div
              className={`p-3 rounded-full mb-2 ${
                category.special ? "bg-red-200" : "bg-red-50"
              }`}
            >
              <category.icon className="w-6 h-6 text-red-700 md:h-8 md:w-8" />
            </div>
            <span
              className={`text-xs md:text-sm font-medium ${
                category.special
                  ? "text-red-700 font-semibold"
                  : "text-foreground"
              }`}
            >
              {category.name}
            </span>
          </Link>
        ))}
      </motion.div>

      {/* Flash Sale */}
      <Card className="border-red-400 shadow-lg">
        <CardHeader className="p-4 text-white rounded-t-lg bg-gradient-to-r from-red-600 to-orange-600 md:p-5">
          <CardTitle className="flex items-center justify-between text-xl md:text-2xl">
            <div className="flex items-center">
              <Zap className="w-6 h-6 mr-2 md:h-7 md:w-7 animate-pulse" /> Flash
              Sale
            </div>
            <CountdownTimer targetDate={flashSaleEndDate} />
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-3 p-3 md:p-4 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
          {loading ? (
            <p className="col-span-4 text-center text-gray-500">
              Đang tải sản phẩm...
            </p>
          ) : (
            products
              .slice(0, 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          )}
        </CardContent>
      </Card>

      {/* Feed Highlands */}
      <section>
        <h2 className="flex items-center mb-4 text-xl font-semibold md:text-2xl">
          <Layers className="w-6 h-6 mr-2 text-red-600" /> Highlands Feed
        </h2>
        <div className="space-y-4 md:space-y-6">
          {feedItems.map((item) => (
            <Card
              key={item.id}
              className="transition-shadow shadow-sm hover:shadow-md"
            >
              <CardHeader className="p-3 md:p-4">
                <div className="flex items-center space-x-3">
                  <img
                    className="w-10 h-10 border rounded-full md:h-11 md:w-11"
                    alt={`${item.user} avatar`}
                    src={item.avatar}
                  />
                  <div>
                    <span className="text-sm font-semibold md:text-md">
                      {item.user}
                    </span>
                    <p className="text-xs text-muted-foreground">2 giờ trước</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-3 pb-1 md:px-4 md:pb-2">
                <p className="mb-2 text-sm whitespace-pre-line md:text-md">
                  {item.content}
                </p>
                <img
                  className="object-cover w-full h-auto border rounded-md max-h-96"
                  alt={item.alt}
                  src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0"
                />
              </CardContent>
              <CardFooter className="flex justify-around p-1 border-t md:p-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-muted-foreground hover:text-red-600"
                >
                  <Heart className="mr-1.5 h-4 w-4" /> Thích
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-muted-foreground hover:text-red-600"
                >
                  <MessageSquare className="mr-1.5 h-4 w-4" /> Bình luận
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-muted-foreground hover:text-red-600"
                >
                  <Send className="mr-1.5 h-4 w-4" /> Chia sẻ
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
