import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

const Header = () => {
  const { currentUser, logout } = useAuth();
  const { cartCount } = useShoppingCart();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/category?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  // 👇 Hiệu ứng ẩn/hiện header mượt mà khi cuộn
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > lastScrollY && window.scrollY > 100) {
            setShowHeader(false);
          } else {
            setShowHeader(true);
          }
          setLastScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const categories = [
    'Cà Phê',
    'Trà',
    'Freeze',
    'Phindi',
    'Bánh Mì Que',
    'Bánh Ngọt',
    'Thức uống khác',
    'Bình giữ nhiệt',
    'Ly giữ nhiệt',
    'Cà phê gói',
  ];

  const createSlug = (text) =>
    text
      ?.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: showHeader ? 0 : '-100%',
        opacity: showHeader ? 1 : 0,
      }}
      transition={{
        duration: 0.8, // 👉 tăng từ 0.4 lên 0.8 để mượt hơn
        ease: [0.22, 1, 0.36, 1], // 👉 cubic-bezier mềm kiểu “easeOutExpo”
      }}
      className='fixed top-0 left-0 z-50 w-full transition-all shadow-sm bg-white/95 backdrop-blur-md'
    >
      <div className='container px-4 mx-auto'>
        {/* 🔹 Top bar (desktop only) */}
        <div className='items-center justify-between hidden py-2 text-xs border-b md:flex text-muted-foreground'>
          <div className='flex space-x-4'>
            <Link to='/seller-centre' className='hover:text-primary'>
              Kênh Người Bán
            </Link>
            <Link to='/download' className='hover:text-primary'>
              Tải ứng dụng
            </Link>
          </div>
          <div className='flex items-center space-x-4'>
            <NavLink
              to='/notifications'
              className={({ isActive }) =>
                `flex items-center hover:text-primary ${isActive ? 'text-primary' : ''}`
              }
            >
              <Bell className='w-4 h-4 mr-1' /> Thông báo
            </NavLink>
            <Link to='/help' className='flex items-center hover:text-primary'>
              <LifeBuoy className='w-4 h-4 mr-1' /> Hỗ trợ
            </Link>
            <Button onClick={toggleTheme} variant='ghost' size='icon' className='w-6 h-6'>
              {theme === 'light' ? <Moon className='w-4 h-4' /> : <Sun className='w-4 h-4' />}
            </Button>
          </div>
        </div>

        {/* 🔹 Logo + Search + Cart + User */}
        <div className='relative flex flex-col items-center justify-between gap-3 py-3 md:flex-row'>
          {/* Logo */}
          <Link to='/' className='flex items-center'>
            <img
              src='https://bizweb.dktcdn.net/100/487/455/themes/917232/assets/logo.png?1759892738511'
              alt='Coffee Logo'
              className='object-contain h-14 md:h-16'
            />
          </Link>

          {/* Giỏ hàng ở góc phải trên mobile */}
          <Link to='/cart' className='absolute right-2 top-2 md:static md:order-3'>
            <div className='relative'>
              <ShoppingCart className='w-6 h-6 text-[#53382C]' />
              {cartCount > 0 && (
                <Badge className='absolute px-1 text-xs text-white bg-red-500 rounded-full -top-1 -right-1'>
                  {cartCount}
                </Badge>
              )}
            </div>
          </Link>

          {/* Ô tìm kiếm */}
          <motion.form
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSearch}
            className='relative w-full max-w-xl'
          >
            <Input
              type='search'
              placeholder='Tìm kiếm sản phẩm, thương hiệu...'
              className='w-full pl-4 pr-12 py-2.5 rounded-xl text-sm border-primary/40 focus:border-primary focus:ring-primary'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              type='submit'
              size='icon'
              className='absolute w-10 h-8 right-1 top-1/2 -translate-y-1/2 bg-[#53382C] hover:bg-[#6a493c] text-white rounded-lg'
            >
              <Search className='w-4 h-4' />
            </Button>
          </motion.form>

          {/* Nút user/login/register */}
          <div className='flex items-center gap-2 md:gap-3 md:order-4'>
            {currentUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='ghost' className='flex items-center space-x-2'>
                    <img
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${currentUser.name}`}
                      alt='avatar'
                      className='w-8 h-8 border rounded-full border-primary'
                    />
                    <span className='hidden text-sm font-medium md:inline'>{currentUser.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-56'>
                  <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to='/account/profile' className='flex items-center'>
                      <User className='w-4 h-4 mr-2' /> Hồ sơ
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to='/account/orders' className='flex items-center'>
                      <Package className='w-4 h-4 mr-2' /> Đơn mua
                    </Link>
                  </DropdownMenuItem>
                  {currentUser.roles.includes('ROLE_ADMIN') ? (
                    <DropdownMenuItem asChild>
                      <Link to='/admin/dashboard' className='flex items-center'>
                        <Building2 className='w-4 h-4 mr-2' /> Admin
                      </Link>
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem asChild>
                      <Link to='/seller-register' className='flex items-center'>
                        <Briefcase className='w-4 h-4 mr-2' /> Trở thành người bán
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className='text-red-600 hover:bg-red-50'>
                    <LogOut className='w-4 h-4 mr-2' /> Đăng xuất
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className='flex justify-center w-full gap-2 md:w-auto'>
                <Button variant='outline' asChild>
                  <Link to='/login'>Đăng Nhập</Link>
                </Button>
                <Button className='bg-[#782A1B] hover:bg-[#9C3623]' asChild>
                  <Link to='/register'>Đăng Ký</Link>
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* 🔹 Thanh danh mục */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className='flex gap-5 py-2 overflow-x-auto text-sm border-t scroll-smooth no-scrollbar'
        >
          {categories.map((item) => (
            <NavLink
              key={item}
              to={`/category/${createSlug(item)}`}
              className={({ isActive }) =>
                `whitespace-nowrap pb-1 snap-center ${
                  isActive
                    ? 'text-primary border-b-2 border-primary font-semibold'
                    : 'text-muted-foreground hover:text-primary'
                }`
              }
            >
              {item}
            </NavLink>
          ))}
          <NavLink
            to='/flash-sale'
            className={({ isActive }) =>
              `whitespace-nowrap pb-1 font-semibold text-red-500 snap-center ${
                isActive ? 'border-b-2 border-red-500' : ''
              }`
            }
          >
            🔥 Flash Sale
          </NavLink>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
