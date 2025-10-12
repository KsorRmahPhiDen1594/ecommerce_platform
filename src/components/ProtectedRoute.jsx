import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-primary text-xl">
        Đang tải...
      </div>
    );
  }

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ✅ Kiểm tra role đúng cách
  const roles = currentUser.roles?.map((r) =>
    typeof r === "string" ? r.toLowerCase() : r.name?.toLowerCase()
  );

  const isAdmin = roles?.some((r) =>
    ["admin", "superadmin", "role_admin", "role_superadmin"].includes(r.toLowerCase())
  );

  if (adminOnly && !isAdmin) {
    return <Navigate to="/" replace />;
  }


  console.log("✅ currentUser:", currentUser);


  return children;
};

export default ProtectedRoute;
