import React from 'react';
import { NavLink } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUserFriends, FaRegHeart, FaRegFile } from "react-icons/fa";
import { IoSearchOutline, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaShop } from "react-icons/fa6";
import useAuth from '../../Hooks/useAuth';

export default function Sidebar({ isOpen, toggleSidebar }) {

    const { user } = useAuth();

    const navItems = [
        {
            path: '/',
            name: "Home",
            icon: <LuLayoutDashboard />
        },
        {
            path: "/products",
            name : "Products",
            icon : <FaShop />
        },
        {
            path: '/newListing',
            name: "New Listing",
            icon: <FaUserFriends />
        },
        {
            path: '/search',
            name: "Search",
            icon: <IoSearchOutline />
        },
        {
            path: '/about',
            name: "About",
            icon: <FaRegFile />
        },
        {
            path: '/favorites',
            name: "Favorites",
            icon: <FaRegHeart />
        },
        {
            divider: true // Add a divider here
        },
        {
            path: '/helpCenter',
            name: "Help Center",
            icon: <AiOutlineInfoCircle />
        },
        {
            path: '/settings',
            name: "Settings",
            icon: <IoSettingsOutline />
        }
    ];

    return (
        <section className={`fixed top-0  
        lg:left-8 2xl:w-[250px] lg:w-[220px] w-[220px] bg-[#FFFFFF] shadow-lg h-auto min-h-screen
        
        border-[#E7E7E7] overflow-y-auto z-[9998] right-0 ${isOpen ? 'block' : 'hidden'} lg:block`}>
            <div className='text-center py-10 text-[40px] lg:block hidden text-[#4285F3]'>
                <h1 className=''>LOGO</h1>
            </div>
            <div className='lg:hidden  bg-[#156BCA] h-[302px] w-full  pt-[116px] pl-20 '>
                <div className=' px-6 '>
                    {
                        user?.photoURL ? <img className='w-[74px] h-[74px] rounded-full ' src={user?.photoURL} alt="" /> : <img src="https://i.ibb.co/JkNR5W3/user5.png" alt="usaer" className='w-[74px] h-[74px] rounded-full' />
                    }

                </div>
                <h3 className=' text-[#FFFFFF] text-[24px] font-semibold '> {user?.displayName
                    ? user?.displayName : "Jhone"} </h3>
                <p className=' text-[#1A2634] text-[12px] font-normal '> {user?.email
                    ? user?.email : "user@gmail.com"} </p>

            </div>
            <nav>
                <ul className='list-none p-0'>
                    {navItems.map((item, index) => (
                        item.divider ? (
                            <li key={index} className='my-2'>
                                <hr className='border-[#E7E7E7] border-t' />
                            </li>
                        ) : (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center p-4 text-lg ${isActive ? 'bg-[#D4E9FF] text-[#152A16] border-l-2   border-gray-700 font-medium text-[15px]' : 'text-[#5C635A] font-normal'}`
                                    }
                                    onClick={toggleSidebar}
                                >
                                    <span className='mr-2 text-[#5C635A]'>{item.icon}</span>
                                    {item.name}
                                </NavLink>
                            </li>
                        )
                    ))}
                </ul>
            </nav>
        </section>
    );
}
