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
            "image": "https://i.ibb.co/27fkH7g/user1.png"
        }, // Duplicate entry for testing scroll
    ]

    return (
        <section className='pt-8 pb-10'>
            <h3 className='text-[18px] font-medium pb-2'>Featured Therapist</h3>
            <div className='relative bg-[#FFFFFF] rounded-lg px-7'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10} 
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Navigation]}
                    className="h-[363px]"
                >
                    {userInformation.map((user, index) => (
                        <SwiperSlide key={index} className="flex flex-col items-center mx-4 mr-4 "> {/* Reduced margin between slides */}
                            <div className='h-[303px] w-[214px] border-[#E7E7E7] shadow-lg flex flex-col items-center p-1 my-6 '> {/* Reduced padding */}
                                <img src={user.image} alt="user" className="h-[146px] w-[194px] object-cover mb-2" />
                                <div>
                                    <h4 className="text-xl font-semibold">{user.name}</h4>
                                    <p className="text-sm text-gray-600">{user.location}</p>
                                    <p className="text-sm text-gray-600">{user.productionTypes}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Navigation buttons */}
                <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10">
                    <button className="swiper-button-prev bg-[#156BCA] p-2 rounded-full shadow-md flex items-center justify-center w-20 h-10">
                        
                    </button>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
                    <button className="swiper-button-next bg-[#156BCA] p-2 rounded-full shadow-md flex items-center justify-center w-10 h-10">
                     
                    </button>
                </div>
            </div>
        </section>
    );
}
