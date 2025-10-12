import React, { useState } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
    import { useAuth } from '@/contexts/AuthContext';
    import { LogIn, Building2, Mail, KeyRound, ShieldAlert } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';

    const AdminLoginPage = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [otp, setOtp] = useState(''); // Optional OTP field
      const { adminLogin, loading } = useAuth();
      const navigate = useNavigate();
      const { toast } = useToast();

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
          toast({ variant: "destructive", title: "Lỗi", description: "Vui lòng nhập email và mật khẩu Admin." });
          return;
        }
        // Add OTP validation if required
        // if (!otp) {
        //   toast({ variant: "destructive", title: "Lỗi", description: "Vui lòng nhập mã OTP." });
        //   return;
        // }
        try {
          await adminLogin(email, password); // Pass OTP if needed: adminLogin(email, password, otp)
          navigate("/admin/dashboard");
        } catch (error) {
          // Toast is handled in AuthContext
        }
      };

      return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-full max-w-md"
          >
            <Card className="shadow-2xl bg-slate-800/70 border-primary/30 backdrop-blur-md text-slate-100">
              <CardHeader className="p-6 text-center">
                <Link to="/" className="flex items-center justify-center mb-4 text-3xl font-bold text-transparent gradient-highlands bg-clip-text">
                  <Building2 className="w-8 h-8 mr-2 text-primary" />
                  ShopeeCharm Admin
                </Link>
                <CardTitle className="text-2xl font-semibold text-slate-50">Đăng Nhập Quản Trị</CardTitle>
                <CardDescription className="text-slate-400">Truy cập vào bảng điều khiển quản trị viên.</CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6 space-y-5">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="admin-email" className="text-slate-300">Email</Label>
                    <div className="relative">
                      <Mail className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-slate-500" />
                      <Input 
                        id="admin-email" 
                        type="email" 
                        placeholder="admin@example.com" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="pl-10 bg-slate-700/50 border-slate-600 text-slate-50 placeholder:text-slate-500 focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="admin-password" className="text-slate-300">Mật khẩu</Label>
                    <div className="relative">
                      <KeyRound className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-slate-500" />
                      <Input 
                        id="admin-password" 
                        type="password" 
                        placeholder="••••••••" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="pl-10 bg-slate-700/50 border-slate-600 text-slate-50 placeholder:text-slate-500 focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="admin-otp" className="text-slate-300">Mã OTP (Nếu có)</Label>
                     <div className="relative">
                      <ShieldAlert className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-slate-500" />
                      <Input 
                        id="admin-otp" 
                        type="text" 
                        placeholder="123456" 
                        value={otp} 
                        onChange={(e) => setOtp(e.target.value)} 
                        className="pl-10 bg-slate-700/50 border-slate-600 text-slate-50 placeholder:text-slate-500 focus:border-primary"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full py-3 gradient-highlands text-primary-foreground text-md" disabled={loading}>
                    {loading ? 'Đang xác thực...' : <><LogIn className="w-5 h-5 mr-2" /> Đăng Nhập</>}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="p-6 text-xs text-center border-t text-slate-500 border-slate-700">
                Quên mật khẩu? <Link to="/admin/forgot-password" className="ml-1 font-semibold text-primary hover:underline">Yêu cầu hỗ trợ</Link>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      );
    };

    export default AdminLoginPage;