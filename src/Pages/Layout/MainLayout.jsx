import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'

export default function MainLayout() {
  return (

    <div className="lg:max-w-7xl 2xl:max-[1440px] lg:w-[1440px] mx-auto px-1 ">

      <div className='flex '>
        <div className='w-1/5 '>
          <Sidebar />
        </div>
        <div className=' w-full  '>
          <Header />
          <div className=' px-2'>
            <Outlet></Outlet>
            
          </div>
        </div>
      </div>


    </div>

  )
}
