import React from "react";
import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import {
  Home,
  ShoppingCart,
  User,
  Package,
  Search,
  Bell,
  LogOut,
  Sun,
  Moon,
  MessageSquare,
  LifeBuoy,
  BadgeInfo as InfoIcon,
  FileText as FileTextIcon,
  Briefcase,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

const MainLayout = () => {
  const { currentUser, logout } = useAuth();
  const { cartCount } = useShoppingCart();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState("");

  // HÀM SLUGIFY: Convert tên có dấu thành slug không dấu (lowercase, gạch ngang)
  const createSlug = (text) => {
    if (!text) return "";
    return text
      .toLowerCase()
      .normalize("NFD") // Phân tách dấu (â → a + ^)
      .replace(/[\u0300-\u036f]/g, "") // Xóa tất cả dấu
      .replace(/đ/g, "d")
      .replace(/Đ/g, "d") // Xử lý đ/Đ
      .replace(/[^a-z0-9\s-]/g, "") // Xóa ký tự đặc biệt
      .replace(/\s+/g, "-") // Thay khoảng trắng bằng gạch ngang
      .replace(/-+/g, "-") // Xóa gạch ngang thừa
      .trim("-"); // Xóa gạch đầu/cuối
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/category?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  // List category (hardcode tạm, sau load từ API)
  // title ở dòng header
  const categories = [
    "Cà Phê",
    "Trà",
    "Freeze",
    "Phindi",
    "Bánh Mì Que",
    "Bánh Ngọt",
    "Thức uống khác",
    "Bình giữ nhiệt",
    "ly giữ nhiệt",
    "Cà phê gói",
  ];

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800">
      <header className="sticky top-0 z-50 shadow-md glassmorphism">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between py-2 text-xs text-muted-foreground">
            <div className="flex space-x-4">
              <Link to="/seller-centre" className="hover:text-primary">
                Kênh Người Bán
              </Link>
              <Link to="/download" className="hover:text-primary">
                Tải ứng dụng
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <NavLink
                to="/notifications"
                className={({ isActive }) =>
                  `flex items-center hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                <Bell className="w-4 h-4 mr-1" /> Thông báo
              </NavLink>
              <Link to="/help" className="flex items-center hover:text-primary">
                <LifeBuoy className="w-4 h-4 mr-1" /> Hỗ trợ
              </Link>
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                className="w-6 h-6"
              >
                {theme === "light" ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between py-3">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://bizweb.dktcdn.net/100/487/455/themes/917232/assets/logo.png?1759892738511"
                alt="Coffee Logo"
                className="object-contain w-auto h-20"
              />
            </Link>

            <form
              onSubmit={handleSearch}
              className="relative flex-grow max-w-xl mx-4"
            >
              <Input
                type="search"
                placeholder="Tìm kiếm sản phẩm, thương hiệu, và mọi thứ..."
                className="w-full pl-4 pr-12 py-2.5 text-sm border-primary/50 focus:border-primary focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute w-10 h-8 -translate-y-1/2 right-1 top-1/2 gradient-highlands text-primary-foreground"
              >
                <Search className="w-4 h-4" />
              </Button>
            </form>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative" asChild>
                <Link to="/cart">
                  <ShoppingCart className="h-7 w-7" />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 text-xs px-1.5 py-0.5 h-5 w-5 flex items-center justify-center rounded-full bg-red-500 text-white">
                      {cartCount}
                    </Badge>
                  )}
                </Link>
              </Button>
              {currentUser ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center px-2 py-1 space-x-2"
                    >
                      <img
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${currentUser.name}`}
                        alt="avatar"
                        className="w-8 h-8 border rounded-full border-primary"
                      />
                      <span className="hidden text-sm font-medium md:inline">
                        {currentUser.name}
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>Tài Khoản Của Tôi</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link
                        to="/account/profile"
                        className="flex items-center w-full"
                      >
                        <User className="w-4 h-4 mr-2" /> Hồ Sơ
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        to="/account/orders"
                        className="flex items-center w-full"
                      >
                        <Package className="w-4 h-4 mr-2" /> Đơn Mua
                      </Link>
                    </DropdownMenuItem>
                    {currentUser.roles.includes("ROLE_ADMIN") ? (
                      <DropdownMenuItem asChild>
                        <Link
                          to="/admin/dashboard"
                          className="flex items-center w-full"
                        >
                          <Building2 className="w-4 h-4 mr-2" /> Admin Panel
                        </Link>
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem asChild>
                        <Link
                          to="/seller-register"
                          className="flex items-center w-full"
                        >
                          <Briefcase className="w-4 h-4 mr-2" /> Trở thành người
                          bán
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={logout}
                      className="text-red-500 cursor-pointer focus:bg-red-500/10 focus:text-red-600"
                    >
                      <LogOut className="w-4 h-4 mr-2" /> Đăng Xuất
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex space-x-2">
                  <Button variant="outline" asChild>
                    <Link to="/login">Đăng Nhập</Link>
                  </Button>
                  <Button
                    className="gradient-highlands text-primary-foreground"
                    asChild
                  >
                    <Link to="/register">Đăng Ký</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
          <nav className="flex py-2 space-x-6 text-sm border-t border-border/50">
            {categories.map((item) => (
              <NavLink
                key={item}
                to={`/category/${createSlug(item)}`}
                className={({ isActive }) =>
                  `hover:text-primary transition-colors pb-1 ${
                    isActive
                      ? "text-primary border-b-2 border-primary font-semibold"
                      : "text-muted-foreground"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
            <NavLink
              to="/flash-sale"
              className={({ isActive }) =>
                `hover:text-primary transition-colors pb-1 text-red-500 font-semibold ${
                  isActive ? "border-b-2 border-red-500" : ""
                }`
              }
            >
              Flash Sale
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="container flex-grow px-2 py-4 mx-auto md:py-6 md:px-0">
        <Outlet />
      </main>
      <footer className="py-12 mt-8 text-gray-600 bg-gray-100 border-t dark:bg-slate-800 dark:text-gray-400 dark:border-slate-700">
        <div className="container grid grid-cols-2 gap-8 px-4 mx-auto md:grid-cols-4 lg:grid-cols-5">
          <div>
            <span className="block mb-3 font-semibold text-gray-800 text-md dark:text-white">
              Chăm sóc khách hàng
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/help"
                  className="flex items-center transition-colors hover:text-primary"
                >
                  <LifeBuoy className="w-4 h-4 mr-2 opacity-70" />
                  Trung tâm trợ giúp
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="flex items-center transition-colors hover:text-primary"
                >
                  <MessageSquare className="w-4 h-4 mr-2 opacity-70" />
                  ShopeeCharm Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/mall"
                  className="flex items-center transition-colors hover:text-primary"
                >
                  <ShoppingCart className="w-4 h-4 mr-2 opacity-70" />
                  ShopeeCharm Mall
                </Link>
              </li>
              <li>
                <Link
                  to="/how-to-buy"
                  className="transition-colors hover:text-primary"
                >
                  Hướng dẫn mua hàng
                </Link>
              </li>
              <li>
                <Link
                  to="/how-to-sell"
                  className="transition-colors hover:text-primary"
                >
                  Hướng dẫn bán hàng
                </Link>
              </li>
              <li>
                <Link
                  to="/payment"
                  className="transition-colors hover:text-primary"
                >
                  Thanh toán
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="transition-colors hover:text-primary"
                >
                  Vận chuyển
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="block mb-3 font-semibold text-gray-800 text-md dark:text-white">
              Về Highlands Coffee
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="flex items-center transition-colors hover:text-primary"
                >
                  <InfoIcon className="w-4 h-4 mr-2 opacity-70" />
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="flex items-center transition-colors hover:text-primary"
                >
                  <Briefcase className="w-4 h-4 mr-2 opacity-70" />
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="flex items-center transition-colors hover:text-primary"
                >
                  <FileTextIcon className="w-4 h-4 mr-2 opacity-70" />
                  Điều khoản
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="transition-colors hover:text-primary"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  to="/genuine"
                  className="transition-colors hover:text-primary"
                >
                  Chính hãng
                </Link>
              </li>
              <li>
                <Link
                  to="/seller-channel"
                  className="transition-colors hover:text-primary"
                >
                  Kênh Người bán
                </Link>
              </li>
              <li>
                <Link
                  to="/flash-deals"
                  className="transition-colors hover:text-primary"
                >
                  Flash Deals
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="block mb-3 font-semibold text-gray-800 text-md dark:text-white">
              Thanh toán
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <img
                alt="Visa"
                className="h-7"
                src="https://images.unsplash.com/photo-1585915473635-d4e5c564eec3"
              />
              <img
                alt="Mastercard"
                className="h-7"
                src="https://images.unsplash.com/photo-1608286022625-bc07f7a21154"
              />
              <img
                alt="JCB"
                className="h-7"
                src="https://images.unsplash.com/photo-1611416811039-e326d73a68d3"
              />
              <img
                alt="American Express"
                className="h-7"
                src="https://images.unsplash.com/photo-1649251855096-f8beda8f6b24"
              />
              <img
                alt="COD"
                className="h-7"
                src="https://images.unsplash.com/photo-1687199127283-2bb87b8a92fc"
              />
              <img
                alt="ShopeePay"
                className="h-7"
                src="https://images.unsplash.com/photo-1586880244543-0528a802be97"
              />
              <img
                alt="ZaloPay"
                className="h-7"
                src="https://images.unsplash.com/photo-1631005551113-6533834aefea"
              />
              <img
                alt="Momo"
                className="h-7"
                src="https://images.unsplash.com/photo-1556742208-999815fca738"
              />
            </div>
            <span className="block mt-4 mb-3 font-semibold text-gray-800 text-md dark:text-white">
              Đơn vị vận chuyển
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <img
                alt="Shopee Express"
                className="h-7"
                src="https://images.unsplash.com/photo-1703489583404-4ee76c06482b"
              />
              <img
                alt="GHTK"
                className="h-7"
                src="https://images.unsplash.com/photo-1666291631431-85cd843669ee"
              />
              <img
                alt="GHN"
                className="h-7"
                src="https://images.unsplash.com/photo-1591370017352-3014ad5b8055"
              />
              <img
                alt="Viettel Post"
                className="h-7"
                src="https://images.unsplash.com/photo-1597658847720-47d08e01e63c"
              />
            </div>
          </div>
          <div>
            <span className="block mb-3 font-semibold text-gray-800 text-md dark:text-white">
              Theo dõi chúng tôi
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors hover:text-primary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mr-2 fill-current opacity-70"
                  >
                    <path d="M12 2.04c-5.5 0-10 4.49-10 10s4.5 10 10 10 10-4.49 10-10-4.5-10-10-10zm1.6 14.49h-3.2v-6.4h-1.6v-2.56h1.6v-1.92c0-1.27.56-3.2 3.2-3.2h2.4v2.56h-1.6c-.32 0-.48.16-.48.48v1.92h2.08l-.32 2.56h-1.76v6.4z" />
                  </svg>{" "}
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors hover:text-primary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mr-2 fill-current opacity-70"
                  >
                    <path d="M17.34,5.46h-2.42c-1.53,0-1.82.72-1.82,1.78v2.09h4.07l-.53,4.11h-3.54V22h-4.21V13.44H5.93V9.33h2.91V6.11c0-2.89,1.77-4.47,4.35-4.47l3.68.02v3.8Z" />
                  </svg>{" "}
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors hover:text-primary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mr-2 fill-current opacity-70"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.67.9-.53 1.59-1.37 1.92-2.38-.84.5-1.78.86-2.79 1.07C18.27 4.34 17.03 4 15.65 4c-2.95 0-5.33 2.38-5.33 5.33 0 .42.05.83.14 1.22C6.9 10.36 3.65 8.56 1.5 5.78c-.47.81-.74 1.75-.74 2.74 0 1.85.94 3.48 2.38 4.43-.87-.03-1.69-.27-2.4-.66v.07c0 2.58 1.84 4.73 4.27 5.22-.45.12-.92.19-1.41.19-.34 0-.68-.03-1-.1C3.81 19.62 5.44 21 7.49 21c-1.83 1.44-4.13 2.29-6.66 2.29-.43 0-.86-.03-1.28-.08C1.48 22.41 3.92 24 6.71 24c8.06 0 12.47-6.68 12.47-12.47 0-.19 0-.38-.01-.56.86-.62 1.6-1.4 2.2-2.28z" />
                  </svg>{" "}
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors hover:text-primary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mr-2 fill-current opacity-70"
                  >
                    <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4.24,15.85c-1.41.78-3.49.88-4.08.62-.59-.26-.93-.77-.93-1.38V11.42c0-.61.34-1.12.93-1.38.59-.26,2.67-.36,4.08.62a.88.88,0,0,1,.43.76v3.67A.88.88,0,0,1,16.24,15.85ZM9.76,12.19v3.62c0,.15.07.28.18.33.11.05.24,0,.32-.07.78-.43,2.43-.48,3.21,0,.08.07.21.12.32.07.11-.05.18-.18.18-.33V12.19c0-.15-.07-.28-.18-.33s-.24,0-.32.07c-.78.43-2.43.48-3.21,0-.08-.07-.21-.12-.32-.07C9.83,11.91,9.76,12.04,9.76,12.19Z" />
                  </svg>{" "}
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <span className="block mb-3 font-semibold text-gray-800 text-md dark:text-white">
              Tải ứng dụng ShopeeCharm
            </span>
            <div className="flex items-center space-x-2">
              <img
                alt="QR Code for app download"
                className="h-20 w-20 border p-0.5 rounded"
                src="https://images.unsplash.com/photo-1626682561113-d1db402cc866"
              />
              <div className="flex flex-col space-y-1">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    alt="Download on App Store"
                    className="h-10"
                    src="https://images.unsplash.com/photo-1587573578335-9672da4d0292"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    alt="Get it on Google Play"
                    className="h-10"
                    src="https://images.unsplash.com/photo-1648134859182-98df6e93ef58"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    alt="Explore it on AppGallery"
                    className="h-10"
                    src="https://images.unsplash.com/photo-1583268921016-514d0a038478"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-10 text-xs text-center text-gray-500 border-t border-gray-200 dark:text-gray-500 dark:border-slate-700">
          <p>
            © {new Date().getFullYear()} ShopeeCharm. Thiết kế bởi Horizons AI.
          </p>
          <p className="mt-1">
            Địa chỉ: Tầng 28, Tòa nhà trung tâm Lotte Hà Nội, 54 Liễu Giai,
            phường Cống Vị, Quận Ba Đình, Hà Nội.
          </p>
          <p className="mt-1">
            Tổng đài hỗ trợ: 19001221 - Email: cskh@shopeecharm.vn
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
