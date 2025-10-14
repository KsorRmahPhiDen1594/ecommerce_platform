import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen transition-colors duration-300 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800'>
      <Header />
      <main className='container flex-grow px-2 py-4 mx-auto md:py-6 md:px-0'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
