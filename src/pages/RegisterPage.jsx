import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
// Xóa useAuth nếu không dùng, hoặc giữ nếu cần sync state sau
// import { useAuth } from '@/contexts/AuthContext';
import { UserPlus, ShoppingCart, Mail, KeyRound, User as UserIcon, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);  // ✅ Local loading
  // const { register, loading } = useAuth();  // Xóa nếu không dùng
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);  // ✅ Start loading

    if (!name || !email || !password || !confirmPassword) {
      toast({ variant: "destructive", title: "Lỗi", description: "Vui lòng điền đầy đủ thông tin." });
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast({ variant: "destructive", title: "Lỗi", description: "Mật khẩu xác nhận không khớp." });
      setIsLoading(false);
      return;
    }

    if (!agreedToTerms) {
      toast({ variant: "destructive", title: "Lỗi", description: "Bạn phải đồng ý với Điều khoản dịch vụ." });
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name, email, password })
      });

      let data;
      if (res.headers.get('content-type')?.includes('application/json')) {
        data = await res.json();
      } else {
        data = await res.text();  // ✅ Backend trả text string, không JSON
      }

      if (!res.ok) {
        // ✅ Map error cụ thể
        let errorMsg = 'Đăng ký thất bại';
        if (data === 'Username đã tồn tại') {
          errorMsg = 'Tên người dùng đã tồn tại. Vui lòng chọn tên khác.';
        } else if (data.includes('email')) {
          errorMsg = 'Email đã được sử dụng.';
        } else {
          errorMsg = data || errorMsg;
        }
        throw new Error(errorMsg);
      }

      toast({ title: "Thành công", description: "Đăng ký tài khoản thành công! Vui lòng đăng nhập." });

      // Optional: Auto-login sau register (gọi login API và lưu token)
      // const loginRes = await fetch('http://localhost:8080/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username: name, password })
      // });
      // const loginData = await loginRes.json();
      // if (loginRes.ok && loginData.token) {
      //   localStorage.setItem('token', loginData.token);
      //   // Parse JWT payload nếu cần user info
      //   const payload = JSON.parse(atob(loginData.token.split('.')[1]));
      //   // Sync với AuthContext: register(name, email, payload); // Hoặc useAuth().login(...)
      //   navigate("/");
      // } else {
      //   navigate("/login");
      // }

      navigate("/login");  // Default: Chuyển sang login
    } catch (err) {
      toast({ variant: 'destructive', title: 'Lỗi', description: err.message });
    } finally {
      setIsLoading(false);  // ✅ Stop loading
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="w-full max-w-lg"
      >
        <Card className="shadow-2xl glassmorphism border-primary/20">
          <CardHeader className="p-6 text-center">
            <Link to="/" className="flex items-center justify-center mb-4 text-3xl font-bold text-transparent gradient-highlands bg-clip-text">
              <ShoppingCart className="w-8 h-8 mr-2 text-primary" />
              ShopeeCharm
            </Link>
            <CardTitle className="text-2xl font-semibold">Tạo Tài Khoản Mới</CardTitle>
            <CardDescription>Tham gia ShopeeCharm ngay hôm nay!</CardDescription>
          </CardHeader>

          <CardContent className="px-6 pb-6 space-y-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Tên hiển thị</Label>
                <div className="relative">
                  <UserIcon className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
                  <Input id="name" placeholder="Nguyễn Văn A" value={name} onChange={(e) => setName(e.target.value)} className="pl-10" required disabled={isLoading} />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="nhapemail@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" required disabled={isLoading} />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="password">Mật khẩu</Label>
                <div className="relative">
                  <KeyRound className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="Ít nhất 6 ký tự" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10 pr-10" required disabled={isLoading} />
                  <Button type="button" variant="ghost" size="icon" className="absolute w-8 h-8 -translate-y-1/2 right-1 top-1/2" onClick={() => setShowPassword(!showPassword)} disabled={isLoading}>
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
                <div className="relative">
                  <KeyRound className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
                  <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Nhập lại mật khẩu" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="pl-10 pr-10" required disabled={isLoading} />
                  <Button type="button" variant="ghost" size="icon" className="absolute w-8 h-8 -translate-y-1/2 right-1 top-1/2" onClick={() => setShowConfirmPassword(!showConfirmPassword)} disabled={isLoading}>
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="flex items-center pt-1 space-x-2">
                <Checkbox id="terms" checked={agreedToTerms} onCheckedChange={setAgreedToTerms} disabled={isLoading} />
                <Label htmlFor="terms" className="text-xs font-normal text-muted-foreground">
                  Tôi đồng ý với <Link to="/terms" className="text-primary hover:underline">Điều khoản dịch vụ</Link> và <Link to="/privacy-policy" className="text-primary hover:underline">Chính sách bảo mật</Link>.
                </Label>
              </div>

              <Button type="submit" className="w-full py-3 gradient-highlands text-primary-foreground text-md" disabled={isLoading || !agreedToTerms}>
                {isLoading ? 'Đang xử lý...' : <><UserPlus className="w-5 h-5 mr-2" /> Đăng Ký</>}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="p-6 text-sm text-center border-t text-muted-foreground">
            Đã có tài khoản? <Link to="/login" className="ml-1 font-semibold text-primary hover:underline">Đăng nhập ngay</Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default RegisterPage;