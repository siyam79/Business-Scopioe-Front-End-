import React from 'react';
import { NavLink } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUserFriends, FaRegHeart, FaRegFile, } from "react-icons/fa";
import { IoSearchOutline, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaShop } from "react-icons/fa6";
import { IoClose } from "react-icons/io5"; // Import the close icon
import useAuth from '../../Hooks/useAuth';

export default function Sidebar({ isOpen, toggleSidebar, closeSidebar }) {

    const { user } = useAuth();

    const navItems = [
        { path: '/', name: "Home", icon: <LuLayoutDashboard /> },
        { path: "/products", name: "Products", icon: <FaShop /> },
        { path: '/newListing', name: "New Listing", icon: <FaUserFriends /> },
        { path: '/search', name: "Search", icon: <IoSearchOutline /> },
        { path: '/about', name: "About", icon: <FaRegFile /> },
        { path: '/favorites', name: "Favorites", icon: <FaRegHeart /> },
        { divider: true },
        { path: '/helpCenter', name: "Help Center", icon: <AiOutlineInfoCircle /> },
        { path: '/settings', name: "Settings", icon: <IoSettingsOutline /> }
    ];

    return (
        <section className={`fixed top-0 lg:left-8 2xl:w-[250px] lg:w-[220px] w-[220px] bg-[#FFFFFF] shadow-lg h-auto min-h-screen border-[#E7E7E7] overflow-y-auto z-[9998] right-0 ${isOpen ? 'block' : 'hidden'} lg:block`}>

            <div className='text-center py-10 text-[40px] lg:block hidden text-[#4285F3]'>
                <h1>LOGO</h1>
            </div>
            <div className='lg:hidden bg-[#156BCA] h-[302px] w-full relative mb-2'>

                {/* cross icon  */}
                <div className="lg:hidden flex justify-start p-2">
                    <IoClose size={24} className="text-xl cursor-pointer text-white " onClick={closeSidebar} />
                </div>
                <div className=' text-right absolute right-4 bottom-8'>
                    <div className=' ml-20 '>
                        {
                            user?.photoURL ? <img className=' w-20 h-20 text-right rounded-full' src={user?.photoURL} alt="" /> : <img src="https://i.ibb.co/JkNR5W3/user5.png" alt="user" className=' w-20 h-20 text-right rounded-full' />
                        }
                    </div>
                    <h3 className='text-[#FFFFFF] text-[24px] font-semibold'>{user?.displayName ? user?.displayName : "sagar soni"}</h3>
                    <p className='text-[#1A2634]  text-[12px] font-normal'>{user?.email ? user?.email : "user@gmail.com fddds"}</p>
                </div>
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
                                        `flex items-center p-4 text-lg ${isActive ? 'bg-[#D4E9FF] text-[#152A16] border-l-2 border-gray-700 font-medium text-[15px]' : 'text-[#5C635A] font-normal'}`
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
