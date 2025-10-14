"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { LogIn, Mail, KeyRound, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading } = useAuth();
  const { toast } = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast({
        variant: "destructive",
        title: "Lỗi",
        description: "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.",
      });
      return;
    }
    await login(username, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-[#5A1E1E] via-[#7B241C] to-[#3E2723]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-2xl bg-[#faf5f0]/80 backdrop-blur-md border border-[#d9b38c]/30">
          <CardHeader className="p-6 text-center">
            <Link to="/" className="flex justify-center mb-2">
              <img
                src="https://bizweb.dktcdn.net/100/487/455/themes/917232/assets/logo.png?1759892738511"
                alt="Highlands Coffee Logo"
                className="object-contain h-20"
              />
            </Link>
            <CardTitle className="text-2xl font-semibold text-[#5A1E1E]">
              Đăng Nhập Highlands Coffee
            </CardTitle>
            <CardDescription className="text-[#7B241C]">
              Cùng thưởng thức ly cà phê tuyệt hảo mỗi ngày ☕
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 pb-6 space-y-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="username" className="text-[#5A1E1E]">
                  Tên đăng nhập hoặc Email
                </Label>
                <div className="relative">
                  <Mail className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-[#7B241C]" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Tên đăng nhập hoặc email@example.com"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 border-[#d9b38c] focus:ring-[#B22222] focus:border-[#B22222]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-[#5A1E1E]">
                  Mật khẩu
                </Label>
                <div className="relative">
                  <KeyRound className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-[#7B241C]" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 border-[#d9b38c] focus:ring-[#B22222] focus:border-[#B22222]"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute w-8 h-8 -translate-y-1/2 right-1 top-1/2 text-[#7B241C]"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-white text-md font-semibold bg-[#B22222] hover:bg-[#D32F2F] transition-all shadow-md hover:shadow-lg"
              >
                {loading ? (
                  "Đang xử lý..."
                ) : (
                  <>
                    <LogIn className="w-5 h-5 mr-2" />
                    Đăng Nhập
                  </>
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="p-6 text-sm text-center text-[#5A1E1E] border-t border-[#d9b38c]/30">
            Chưa có tài khoản?
            <Link
              to="/register"
              className="ml-1 font-semibold text-[#B22222] hover:text-[#D32F2F]"
            >
              Đăng ký ngay
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
