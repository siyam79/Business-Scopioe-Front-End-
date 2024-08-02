import React from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgLogOut } from "react-icons/cg";

export default function Header({ toggleSidebar }) {
    return (
        <section className='2xl:max-w-[1190px] 2xl:w-[1190px] lg:max-w-[1000px] lg:w-[1000px] lg:ml-14 2xl:ml-0 w-full mx-auto fixed top-0 z-[999] bg-[#FFFFFF] shadow-md border-[#E7E7E7] lg:h-[88px] 2xl:h-[96px] h-[60px]'>
            <div className='flex items-center justify-between lg:px-7 px-3 lg:my-6'>
                <div className='hidden lg:flex items-center gap-3 '>
                    <img src="https://i.ibb.co/JkNR5W3/user5.png" alt="usaer" className='w-10 h-10 rounded-full ' />
                    <div>
                        <h4 className='flex items-center gap-8 text-[#152A16] text-[15px] font-medium '>sagar soni  <span> <RiArrowDropDownLine /> </span> </h4>
                        <p className=' text-[#5C635A] font-normal text-[14px] '>sagar@gmail.com</p>
                    </div>
                </div>
                <div className='lg:hidden'>
                    <h1 className=' text-[#4285F3] text-[32px] font-normal '> Logo </h1>
                </div>
                <div className='hidden lg:block'>
                    <div className='flex items-center justify-center gap-8'>
                        <div className='border border-[#E7E7E7] p-2 rounded-full'>
                            <IoNotificationsOutline size={24} />
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='text-[#F15E4A] text-[15px] font-medium'>Log Out</p>
                            <div className='bg-[#FFECEA] p-2 rounded-full transform rotate-180 '>
                                <CgLogOut size={24} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:hidden flex items-center gap-4 justify-center my-4' onClick={toggleSidebar}>
                    <div className=''>
                        <IoNotificationsOutline size={24} />
                    </div>
                    <div className='l'>
                        <HiOutlineMenuAlt3 size={24} />
                    </div>
                </div>
            </div>
        </section>
    )
}
