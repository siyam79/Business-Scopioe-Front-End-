import React from 'react';
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
    ];

    return (
        <section className='pt-8 pb-10'>
            <h3 className='text-[18px] font-medium pb-2'> Featured Therapist </h3>
            <div className='h-[363px] bg-[#FFFFFF] rounded-lg px-7'>
                <Swiper
                    slidesPerView={3}
                    navigation={true}
                    modules={[Navigation]}
                    className="w-full h-full"
                >
                    {userInformation.map((user, index) => (
                        <SwiperSlide key={index} className="flex flex-col justify-center items-center text-center text-[18px] bg-white">
                            <img src={user.image} alt="user" className="w-24 h-24  mb-4"/>
                            <h4 className="text-xl font-semibold">{user.name}</h4>
                            <p className="text-sm text-gray-600">{user.location}</p>
                            <p className="text-sm text-gray-600">{user.productionTypes}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
