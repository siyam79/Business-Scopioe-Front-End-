import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'

export default function MainLayout() {
  return (

    <div className="lg:max-w-7xl 2xl:max-[1440px] lg:w-[1440px] mx-auto px-1 ">

      <div className='flex '>
        <div className=' w-[250px] '>
          <Sidebar />
        </div>
        <div className=' w-full  '>
          <Header />
          <div className=' w-[1130px] mx-auto min-h-screen bg-[#E7E7E7]'>
            <Outlet></Outlet>
            
          </div>
        </div>
      </div>


    </div>

  )
}
