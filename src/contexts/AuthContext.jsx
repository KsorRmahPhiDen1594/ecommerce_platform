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
