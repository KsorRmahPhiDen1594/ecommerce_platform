// import React, { createContext, useState, useEffect, useContext } from "react";
// import { useToast } from "@/components/ui/use-toast";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext(null);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { toast } = useToast();
//   // useNavigate will be initialized after this component is mounted and within Router context
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem("currentUser");
//     if (storedUser) {
//       setCurrentUser(JSON.parse(storedUser));
//     }
//     setLoading(false);
//   }, []);

//   const login = (email, password) => {
//     setLoading(true);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const users = JSON.parse(localStorage.getItem("users")) || [];
//         const user = users.find(
//           (u) => u.email === email && u.password === password
//         );
//         if (user) {
//           const userData = {
//             email: user.email,
//             name: user.name || "Người dùng",
//             role: user.role || "user",
//             id: user.id,
//           };
//           setCurrentUser(userData);
//           localStorage.setItem("currentUser", JSON.stringify(userData));
//           toast({
//             title: "Đăng nhập thành công!",
//             description: `Chào mừng trở lại, ${userData.name}!`,
//           });
//           setLoading(false);
//           resolve(userData);
//         } else {
//           toast({
//             variant: "destructive",
//             title: "Đăng nhập thất bại",
//             description: "Email hoặc mật khẩu không đúng.",
//           });
//           setLoading(false);
//           reject(new Error("Email hoặc mật khẩu không đúng."));
//         }
//       }, 1000);
//     });
//   };

//   const adminLogin = (email, password) => {
//     setLoading(true);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const users = JSON.parse(localStorage.getItem("users")) || [];
//         const adminUser = users.find(
//           (u) =>
//             u.email === email &&
//             u.password === password &&
//             (u.role === "admin" || u.role === "superadmin")
//         );
//         if (adminUser) {
//           const adminData = {
//             email: adminUser.email,
//             name: adminUser.name || "Admin",
//             role: adminUser.role,
//             id: adminUser.id,
//           };
//           setCurrentUser(adminData);
//           localStorage.setItem("currentUser", JSON.stringify(adminData));
//           toast({
//             title: "Đăng nhập Admin thành công!",
//             description: `Chào mừng Admin ${adminData.name}!`,
//           });
//           setLoading(false);
//           resolve(adminData);
//         } else {
//           toast({
//             variant: "destructive",
//             title: "Đăng nhập Admin thất bại",
//             description: "Tài khoản không hợp lệ hoặc không có quyền Admin.",
//           });
//           setLoading(false);
//           reject(new Error("Tài khoản Admin không hợp lệ."));
//         }
//       }, 1000);
//     });
//   };

//   const register = (name, email, password) => {
//     setLoading(true);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let users = JSON.parse(localStorage.getItem("users")) || [];
//         if (users.find((u) => u.email === email)) {
//           toast({
//             variant: "destructive",
//             title: "Đăng ký thất bại",
//             description: "Email đã tồn tại.",
//           });
//           setLoading(false);
//           reject(new Error("Email đã tồn tại."));
//           return;
//         }
//         const newUser = {
//           id: Date.now().toString(),
//           name,
//           email,
//           password,
//           role: "user",
//         };
//         users.push(newUser);
//         localStorage.setItem("users", JSON.stringify(users));

//         const userData = {
//           email: newUser.email,
//           name: newUser.name,
//           role: newUser.role,
//           id: newUser.id,
//         };
//         setCurrentUser(userData);
//         localStorage.setItem("currentUser", JSON.stringify(userData));
//         toast({
//           title: "Đăng ký thành công!",
//           description: `Chào mừng ${name} đến với ShopeeCharm!`,
//         });
//         setLoading(false);
//         resolve(userData);
//       }, 1000);
//     });
//   };

//   const logout = () => {
//     setCurrentUser(null);
//     localStorage.removeItem("currentUser");
//     toast({ title: "Đã đăng xuất", description: "Hẹn gặp lại bạn!" });
//     if (navigate) {
//       // Check if navigate is initialized
//       navigate("/");
//     }
//   };

//   const value = {
//     currentUser,
//     login,
//     adminLogin,
//     register,
//     logout,
//     loading,
//     setCurrentUser,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // ✅ Hàm decode JWT hỗ trợ UTF-8
  const decodeJwtPayload = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error('Decode JWT error:', e);
      return {};
    }
  };

  // ✅ Kiểm tra token khi load app
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('currentUser');
    if (token && storedUser) {
      try {
        const payload = decodeJwtPayload(token);
        const user = JSON.parse(storedUser);
        if (payload.sub === user.username) {
          setCurrentUser({
            name: user.name || payload.sub,
            username: payload.sub,
            email: user.email,
            roles: payload.roles || user.roles || [],
          });
        } else {
          clearAuth();
        }
      } catch {
        clearAuth();
      }
    } else {
      clearAuth();
    }
  }, []);

  const clearAuth = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  };

  // ✅ Login thường (User)
  const login = async (input, password) => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ username: input, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || data.message || 'Đăng nhập thất bại');

      const payload = decodeJwtPayload(data.token);
      const user = {
        name: payload.name || payload.sub,
        username: payload.sub,
        roles: payload.roles || [],
      };

      localStorage.setItem('token', data.token);
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);

      toast({ title: 'Đăng nhập thành công' });
      navigate('/');
    } catch (err) {
      toast({ variant: 'destructive', title: 'Lỗi', description: err.message });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ✅ Login Admin
const adminLogin = async (email, password, otp = null) => {
  setLoading(true);
  try {
    const res = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ username: email, password })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || data.message || 'Đăng nhập thất bại');

    const payload = decodeJwtPayload(data.token); // ✅ Dùng decode UTF-8 an toàn
    const userRoles = payload.roles || [];

    // Kiểm tra quyền admin
    if (!userRoles.includes('ROLE_ADMIN') && !userRoles.includes('ADMIN')) {
      throw new Error('Tài khoản không có quyền quản trị.');
    }

    const user = {
      name: payload.sub,
      username: payload.sub,
      roles: userRoles
    };

    localStorage.setItem('token', data.token);
    localStorage.setItem('currentUser', JSON.stringify(user));
    setCurrentUser(user);

    toast({ title: 'Đăng nhập Admin thành công' });
    navigate('/admin/dashboard');
  } catch (err) {
    toast({ variant: 'destructive', title: 'Lỗi', description: err.message });
    throw err;
  } finally {
    setLoading(false);
  }
  };


  // ✅ Register user
  const register = async (name, email, password) => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          username: name.trim(),
          email: email.trim(),
          password,
        }),
      });

      const data = await res.text();
      if (!res.ok) throw new Error(data || 'Đăng ký thất bại');

      toast({
        title: 'Thành công',
        description: 'Đăng ký tài khoản thành công! Vui lòng đăng nhập.',
      });
      navigate('/login');
    } catch (err) {
      toast({ variant: 'destructive', title: 'Lỗi', description: err.message });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ✅ Logout
  const logout = () => {
    clearAuth();
    toast({ title: 'Đăng xuất thành công' });
    navigate('/');
  };

  const isAdmin = () =>
    currentUser?.roles?.includes('ROLE_ADMIN') ||
    currentUser?.roles?.includes('ADMIN');

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        register,
        logout,
        adminLogin,
        isAdmin,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
