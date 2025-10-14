import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext.jsx";
import MainLayout from "@/layouts/MainLayout.jsx";
import AdminLayout from "@/layouts/AdminLayout.jsx";
import ProtectedRoute from "@/components/ProtectedRoute.jsx";
import { ShoppingCartProvider } from "@/contexts/ShoppingCartContext.jsx";
import { WishlistProvider } from "@/contexts/WishlistContext.jsx";
import { ThemeProvider } from "@/contexts/ThemeContext.jsx";
import ChatWidget from "@/components/ChatWidget.jsx";
import MapPage from "./pages/MapPage";

// 🏠 Trang người dùng
const HomePage = React.lazy(() => import("@/pages/HomePage.jsx"));
const CategoryPage = React.lazy(() => import("@/pages/CategoryPage.jsx"));
const ProductDetailPage = React.lazy(() =>
  import("@/pages/ProductDetailPage.jsx")
);
const CartPage = React.lazy(() => import("@/pages/CartPage.jsx"));
const CheckoutPage = React.lazy(() => import("@/pages/CheckoutPage.jsx"));
const UserAccountPage = React.lazy(() => import("@/pages/UserAccountPage.jsx"));
const LoginPage = React.lazy(() => import("@/pages/LoginPage.jsx"));
const RegisterPage = React.lazy(() => import("@/pages/RegisterPage.jsx"));
const NotFoundPage = React.lazy(() => import("@/pages/NotFoundPage.jsx"));
const HelpPage = React.lazy(() => import("@/pages/HelpPage.jsx"));
const AboutPage = React.lazy(() => import("@/pages/AboutPage.jsx"));
const TermsPage = React.lazy(() => import("@/pages/TermsPage.jsx"));
const NotificationsPage = React.lazy(() =>
  import("@/pages/NotificationsPage.jsx")
);

// 🧾 Trang từ Footer
const FeedbackPage = React.lazy(() => import("@/pages/FeedbackPage.jsx"));
const MembershipPage = React.lazy(() => import("@/pages/MembershipPage.jsx"));
const PolicyPage = React.lazy(() => import("@/pages/PolicyPage.jsx"));
const CareersPage = React.lazy(() => import("@/pages/CareersPage.jsx"));
const NewsPage = React.lazy(() => import("@/pages/NewsPage.jsx"));
const FranchisePage = React.lazy(() => import("@/pages/FranchisePage.jsx"));

// 👑 Trang quản trị viên
const AdminLoginPage = React.lazy(() =>
  import("@/pages/admin/AdminLoginPage.jsx")
);
const AdminDashboardPage = React.lazy(() =>
  import("@/pages/admin/AdminDashboardPage.jsx")
);
const AdminUserManagementPage = React.lazy(() =>
  import("@/pages/admin/AdminUserManagementPage.jsx")
);
const AdminProductManagementPage = React.lazy(() =>
  import("@/pages/admin/AdminProductManagementPage.jsx")
);
const AdminOrderManagementPage = React.lazy(() =>
  import("@/pages/admin/AdminOrderManagementPage.jsx")
);

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <ShoppingCartProvider>
            <WishlistProvider>
              <Suspense
                fallback={
                  <div className="flex items-center justify-center h-screen text-xl text-primary">
                    Đang tải trang...
                  </div>
                }
              >
                <Routes>
                  {/* Layout chính cho người dùng */}
                  <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route
                      path="category/:categoryName?"
                      element={<CategoryPage />}
                    />
                    <Route path="product/:id" element={<ProductDetailPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route
                      path="checkout"
                      element={
                        <ProtectedRoute>
                          <CheckoutPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="account/:tab?"
                      element={
                        <ProtectedRoute>
                          <UserAccountPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="notifications"
                      element={
                        <ProtectedRoute>
                          <NotificationsPage />
                        </ProtectedRoute>
                      }
                    />

                    {/* 🌐 Các trang thông tin */}
                    <Route path="help" element={<HelpPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="terms" element={<TermsPage />} />

                    {/* 📞 Các trang từ Footer */}
                    <Route path="feedback" element={<FeedbackPage />} />
                    <Route path="membership" element={<MembershipPage />} />
                    <Route path="policy" element={<PolicyPage />} />
                    <Route path="careers" element={<CareersPage />} />
                    <Route path="news" element={<NewsPage />} />
                    <Route path="franchise" element={<FranchisePage />} />
                    <Route path="map" element={<MapPage />} />
                  </Route>

                  {/* Trang đăng nhập/đăng ký */}
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />

                  {/* 👑 Trang quản trị */}
                  <Route path="/admin/login" element={<AdminLoginPage />} />
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute adminOnly={true}>
                        <AdminLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route path="dashboard" element={<AdminDashboardPage />} />
                    <Route path="users" element={<AdminUserManagementPage />} />
                    <Route
                      path="products"
                      element={<AdminProductManagementPage />}
                    />
                    <Route
                      path="orders"
                      element={<AdminOrderManagementPage />}
                    />
                  </Route>

                  {/* Trang không tìm thấy */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
              <ChatWidget />
              <Toaster />
            </WishlistProvider>
          </ShoppingCartProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
