import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'

export default function MainLayout() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };


  return (

    <div className="lg:max-w-7xl 2xl:max-[1440px] lg:w-[1440px] mx-auto px-1 ">

      <div className='flex '>
        <div className=' 2xl:w-[250px] lg:w-[220px] '>
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div className=' w-full  '>
          <Header toggleSidebar={toggleSidebar} />
          {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-[9998]" onClick={closeSidebar}></div>}
          <div className=' 2xl:w-[1190px] lg:w-[1000px] mx-auto h-screen px-7  2xl:mt-24 lg:mt-20 pt-8 bg-[#E7E7E7] z-50 '>
            <Outlet></Outlet>

          </div>
        </div>
      </div>


    </div>

  )
}
