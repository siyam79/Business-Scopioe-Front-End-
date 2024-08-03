import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
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
            "image": "https://i.ibb.co/5FFTRHc/user2.png"
        },
        {
            "name": "Alexander Cort",
            "location": "123 Elm Street, New York",
            "productionTypes": "Mobile & In-Studio",
            "image": "https://i.ibb.co/Ry5cctz/user3.png"
        },
        {
            "name": "Alexander Cort",
            "location": "123 Elm Street, New York",
            "productionTypes": "Mobile & In-Studio",
            "image": "https://i.ibb.co/rQyw0dS/user4.png"
        },
        {
            "name": "Alexander Cort",
            "location": "123 Elm Street, New York",
            "productionTypes": "Mobile & In-Studio",
            "image": "https://i.ibb.co/rQyw0dS/user4.png"
        },
        {
            "name": "Alexander Cort",
            "location": "123 Elm Street, New York",
            "productionTypes": "Mobile & In-Studio",
            "image": "https://i.ibb.co/rQyw0dS/user4.png"
        },
        {
            "name": "Alexander Cort",
            "location": "123 Elm Street, New York",
            "productionTypes": "Mobile & In-Studio",
            "image": "https://i.ibb.co/27fkH7g/user1.png"
        }, // Duplicate entry for testing scroll
    ];

    return (
        <section className='pt-8 pb-10'>
            <h3 className='text-lg lg:text-xl 2xl:text-2xl font-semibold pb-2 lg:px-0 px-2'>Featured Therapist</h3>
            <div className='relative bg-[#FFFFFF] rounded-lg px-2 lg:px-7'>
                <Swiper
                    slidesPerView={3} // Default for small devices
                    spaceBetween={10}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 4,
                        },
                        // when window width is >= 1536px (2xl)
                        1536: {
                            slidesPerView: 4,
                        }
                    }}
                    modules={[Navigation]}
                    className="h-[363px]"
                >
                    {userInformation.map((user, index) => (
                        <SwiperSlide key={index} className="flex flex-col items-center mx-2 lg:mx-4 "> {/* Adjusted margin for small devices */}
                            <div className='h-[303px]  2xl:max-w-[214px] lg:w-[214px] w-[178.69px] border-[#E7E7E7] shadow-lg flex flex-col items-center p-2 lg:p-1 my-6'> {/* Adjusted padding */}
                                <img src={user.image} alt="user" className="h-[146px] w-full max-w-[194px] object-cover mb-2" />
                                <div className='text-center'>
                                    <h4 className="text-sm lg:text-xl font-semibold">{user.name}</h4>
                                    <p className="text-xs lg:text-sm text-gray-600">{user.location}</p>
                                    <p className="text-xs lg:text-sm text-gray-600">{user.productionTypes}</p>
                                </div>
                            </div>

                            
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Navigation buttons */}
                <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 hidden lg:flex">
                    <button className="swiper-button-prev bg-[#156BCA] p-2 rounded-full shadow-md flex items-center justify-center w-10 h-10 text-white">
                        <FaAngleLeft />
                    </button>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 hidden lg:flex">
                    <button className="swiper-button-next bg-[#156BCA] p-2 rounded-full shadow-md flex items-center justify-center w-10 h-10 text-white">
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </section>
    );
}
