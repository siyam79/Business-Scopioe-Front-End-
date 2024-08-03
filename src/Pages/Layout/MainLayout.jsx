import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="lg:max-w-7xl 2xl:max-[1440px] lg:w-[1440px] mx-auto px-1">
      <div className="flex">
        <div className="2xl:w-[250px] lg:w-[220px]">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} closeSidebar={closeSidebar} />
        </div>
        <div className="w-full">
          <Header toggleSidebar={toggleSidebar} />
          {/* Only render the overlay when the sidebar is open */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0" 
              onClick={closeSidebar}
            ></div>
          )}
          <div className="2xl:w-[1190px] xl:w-[1090px] lg:w-[1000px] mx-auto h-auto min-h-screen lg:px-4 px-1 2xl:mt-24 mt-[60px] lg:mt-20 lg:pt-8 pt-2 bg-[#E7E7E7] z-[20]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
