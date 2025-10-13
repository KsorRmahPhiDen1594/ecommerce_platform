import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Bell,
  Sun,
  Moon,
  LifeBuoy,
  Search,
  User,
  Package,
  LogOut,
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

const Header = () => {
  const { currentUser, logout } = useAuth();
  const { cartCount } = useShoppingCart();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState("");

  // 🔤 Tạo slug cho đường dẫn category
  const createSlug = (text) =>
    text
      ?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim("-");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/category?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  // Danh mục
  const categories = [
    "Cà Phê",
    "Trà",
    "Freeze",
    "Phindi",
    "Bánh Mì Que",
    "Bánh Ngọt",
    "Thức uống khác",
    "Bình giữ nhiệt",
    "Ly giữ nhiệt",
    "Cà phê gói",
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md glassmorphism">
      <div className="container px-4 mx-auto">
        {/* Thanh trên cùng */}
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

        {/* Logo + Search + Account */}
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
              className="absolute w-10 h-8 -translate-y-1/2 right-1 top-1/2 bg-[#53382C] hover:bg-[#6a493c] text-white"
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
                    <Link to="/account/profile" className="flex items-center w-full">
                      <User className="w-4 h-4 mr-2" /> Hồ Sơ
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/account/orders" className="flex items-center w-full">
                      <Package className="w-4 h-4 mr-2" /> Đơn Mua
                    </Link>
                  </DropdownMenuItem>
                  {currentUser.roles.includes("ROLE_ADMIN") ? (
                    <DropdownMenuItem asChild>
                      <Link to="/admin/dashboard" className="flex items-center w-full">
                        <Building2 className="w-4 h-4 mr-2" /> Admin Panel
                      </Link>
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem asChild>
                      <Link to="/seller-register" className="flex items-center w-full">
                        <Briefcase className="w-4 h-4 mr-2" /> Trở thành người bán
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
                <Button className="bg-[#53382C] hover:bg-[#6a493c] text-white" asChild>
                  <Link to="/register">Đăng Ký</Link>
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Menu category */}
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
  );
};

export default Header;
