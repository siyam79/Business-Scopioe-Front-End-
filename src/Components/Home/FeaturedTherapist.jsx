import React from 'react';

import { IoLocation } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function FeaturedTherapist() {

    const userInformation = [
        {
            "name": "Alexander Cort",
            "location": "123 Elm Street, New York",
            "productionTypes": "Mobile & In-Studio",
            "image": "https://i.ibb.co/27fkH7g/user1.png"
        },
        {
            "name": "Alexander Cort",
            "location": "123 Elm Street, New York",
            "productionTypes": "Mobile & In-Studio",
            "image": "https://i.ibb.co/27fkH7g/user1.png"
        },
        {
            "name": "Alexander Cort",
            "location": "123 Elm Street, New York",
            "productionTypes": "Mobile & In-Studio",
            "image": "https://i.ibb.co/27fkH7g/user1.png"
        },
        {
            "name": "Alexander Cort",
            "location": "123 Elm Street, New York",
            "productionTypes": "Mobile & In-Studio",
            "image": "https://i.ibb.co/27fkH7g/user1.png"
        },
        {
            "name": "Alexander Cort",
            "location": "123 Elm Street, New York",
            "productionTypes": "Mobile & In-Studio",
            "image": "https://i.ibb.co/27fkH7g/user1.png"
        },
        {
            "name": "Alexander Cort",
            "location": "123 Elm Street, New York",
            "productionTypes": "Mobile & In-Studio",
            "image": "https://i.ibb.co/27fkH7g/user1.png"
        },
        {
            "name": "Alexander Cort",
            "location": "123 Elm Street, New York",
            "productionTypes": "Mobile & In-Studio",
            "image": "https://i.ibb.co/27fkH7g/user1.png"
        }
    ];

    return (
        <section className='pt-8 pb-10'>
            <h3 className='text-[18px] font-medium pb-2'>Featured Therapist</h3>
            <div className='relative bg-[#FFFFFF] rounded-lg px-2 lg:px-7 h-[363px]'>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: -35,
                        },
                    }}
                    className="mySwiper"
                >
                    {userInformation.map((user, index) => (
                        <SwiperSlide key={index}>
                            <div className='lg:h-[303px] w-full h-full lg:w-[190px] border-gray-800 my-6 mx-12 shadow-md overflow-hidden rounded-bl-xl rounded-br-xl rounded-md'>
                                <div className='lg:max-w-[190px] w-full p-2'>
                                    <img className='w-full h-[100px] object-cover rounded-lg' src={user.image} alt={user.name} />
                                </div>
                                <div className='text-left ml-2 text-[12px]'>
                                    <h3 className="font-medium text-sm">{user?.name}</h3>
                                    <p className="flex items-center gap-2"><IoLocation /> {user?.location}</p>
                                    <p className="flex items-center gap-2"><FaCar /> {user?.productionTypes}</p>
                                </div>
                                <div className='mt-7 bg-[#156BCA] rounded-bl-xl rounded-br-xl'>
                                    <button className="text-[#ffffff] cursor-pointer text-[14px] font-medium py-4">See Details</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
