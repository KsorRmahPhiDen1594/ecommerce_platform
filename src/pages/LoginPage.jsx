import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { LogIn, ShoppingCart, Mail, KeyRound, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';  // Import useAuth

const LoginPage = () => {
  const [username, setUsername] = useState('');  // Tên đăng nhập hoặc email
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading } = useAuth();  // Dùng login và loading từ context
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast({ variant: "destructive", title: "Lỗi", description: "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu." });
      return;
    }

    try {
      await login(username, password);  // Gọi context login (handle fetch, setCurrentUser, toast)
      toast({ title: "Thành công", description: "Chào mừng bạn đến với ShopeeCharm!" });
      navigate(from, { replace: true });
    } catch (err) {
      // Error toast đã handle trong context
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: "spring" }} className="w-full max-w-md">
        <Card className="shadow-2xl glassmorphism border-primary/20">
          <CardHeader className="p-6 text-center">
            <Link to="/" className="flex items-center justify-center mb-4 text-3xl font-bold text-transparent gradient-highlands bg-clip-text">
              <ShoppingCart className="w-8 h-8 mr-2 text-primary" />
              ShopeeCharm
            </Link>
            <CardTitle className="text-2xl font-semibold">Đăng Nhập Tài Khoản</CardTitle>
            <CardDescription>Chào mừng bạn trở lại! Vui lòng đăng nhập.</CardDescription>
          </CardHeader>
          <CardContent className="px-6 pb-6 space-y-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="username">Tên đăng nhập hoặc Email</Label>
                <div className="relative">
                  <Mail className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
                  <Input id="username" type="text" placeholder="Tên đăng nhập hoặc email@example.com" value={username} onChange={e => setUsername(e.target.value)} className="pl-10" required disabled={loading} />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="password">Mật khẩu</Label>
                <div className="relative">
                  <KeyRound className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} className="pl-10 pr-10" required disabled={loading} />
                  <Button type="button" variant="ghost" size="icon" className="absolute w-8 h-8 -translate-y-1/2 right-1 top-1/2" onClick={() => setShowPassword(!showPassword)} disabled={loading}>
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
                <Link to="/forgot-password" className="float-right text-xs text-primary hover:underline">Quên mật khẩu?</Link>
              </div>

              <Button type="submit" className="w-full py-3 gradient-highlands text-primary-foreground text-md" disabled={loading}>
                {loading ? 'Đang xử lý...' : <><LogIn className="w-5 h-5 mr-2" /> Đăng Nhập</>}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="p-6 text-sm text-center border-t text-muted-foreground">
            Chưa có tài khoản? <Link to="/register" className="ml-1 font-semibold text-primary hover:underline">Đăng ký ngay</Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoginPage;