import React, { createContext, useState, useEffect, useContext } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  // useNavigate will be initialized after this component is mounted and within Router context
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        if (user) {
          const userData = {
            email: user.email,
            name: user.name || "Người dùng",
            role: user.role || "user",
            id: user.id,
          };
          setCurrentUser(userData);
          localStorage.setItem("currentUser", JSON.stringify(userData));
          toast({
            title: "Đăng nhập thành công!",
            description: `Chào mừng trở lại, ${userData.name}!`,
          });
          setLoading(false);
          resolve(userData);
        } else {
          toast({
            variant: "destructive",
            title: "Đăng nhập thất bại",
            description: "Email hoặc mật khẩu không đúng.",
          });
          setLoading(false);
          reject(new Error("Email hoặc mật khẩu không đúng."));
        }
      }, 1000);
    });
  };

  const adminLogin = (email, password) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const adminUser = users.find(
          (u) =>
            u.email === email &&
            u.password === password &&
            (u.role === "admin" || u.role === "superadmin")
        );
        if (adminUser) {
          const adminData = {
            email: adminUser.email,
            name: adminUser.name || "Admin",
            role: adminUser.role,
            id: adminUser.id,
          };
          setCurrentUser(adminData);
          localStorage.setItem("currentUser", JSON.stringify(adminData));
          toast({
            title: "Đăng nhập Admin thành công!",
            description: `Chào mừng Admin ${adminData.name}!`,
          });
          setLoading(false);
          resolve(adminData);
        } else {
          toast({
            variant: "destructive",
            title: "Đăng nhập Admin thất bại",
            description: "Tài khoản không hợp lệ hoặc không có quyền Admin.",
          });
          setLoading(false);
          reject(new Error("Tài khoản Admin không hợp lệ."));
        }
      }, 1000);
    });
  };

  const register = (name, email, password) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.find((u) => u.email === email)) {
          toast({
            variant: "destructive",
            title: "Đăng ký thất bại",
            description: "Email đã tồn tại.",
          });
          setLoading(false);
          reject(new Error("Email đã tồn tại."));
          return;
        }
        const newUser = {
          id: Date.now().toString(),
          name,
          email,
          password,
          role: "user",
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        const userData = {
          email: newUser.email,
          name: newUser.name,
          role: newUser.role,
          id: newUser.id,
        };
        setCurrentUser(userData);
        localStorage.setItem("currentUser", JSON.stringify(userData));
        toast({
          title: "Đăng ký thành công!",
          description: `Chào mừng ${name} đến với ShopeeCharm!`,
        });
        setLoading(false);
        resolve(userData);
      }, 1000);
    });
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    toast({ title: "Đã đăng xuất", description: "Hẹn gặp lại bạn!" });
    if (navigate) {
      // Check if navigate is initialized
      navigate("/");
    }
  };

  const value = {
    currentUser,
    login,
    adminLogin,
    register,
    logout,
    loading,
    setCurrentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
