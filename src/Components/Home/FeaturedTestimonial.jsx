import React from 'react';

// react icon
import { IoLocation } from "react-icons/io5";

// ?react swiper SwiperSlide
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';

export default function FeaturedTestimonial() {

    // fack dumy data 
    const clients = [
        {
            title: "Healing Bodywork ",
            location: "123 Elm Street, New York",
            description: "Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of",
            image: "https://i.ibb.co/KWgsR4Y/user6.png",

        },
        {
            title: "Healing Bodywork ",

            location: "123 Elm Street, New York",

            description: "Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of",
            image: "https://i.ibb.co/hBqGT6X/user7.png",

        },
        {
            title: "Designer Watch",
            location: "123 Elm Street, New York",
            description: "Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of",
            image: "https://i.ibb.co/hBqGT6X/user7.png",

        },
        {
            title: "Healing Bodywork ",
            location: "123 Elm Street, New York",
            description: "Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of",
            image: "https://i.ibb.co/KWgsR4Y/user6.png",

        },
        {
            title: "Healing Bodywork ",
            location: "123 Elm Street, New York",
            description: "Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of",
            image: "https://i.ibb.co/KWgsR4Y/user6.png",

        },
        {
            title: "Healing Bodywork ",
            location: "123 Elm Street, New York",
            description: "Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of",
            image: "https://i.ibb.co/hBqGT6X/user7.png",

        }
    ];


    return (
        <section className='lg:w-1/2 2xl:w-1/2 2xl:h-[429px] lg:h-[380px] mb-6'>
            <h2 className='text-lg lg:text-xl 2xl:text-2xl font-semibold pb-2 lg:px-0 px-2 '>Featured Testimonial</h2>
            <div className='bg-[#FFFFFF] rounded-lg shadow-md 2xl:px-7 lg:px-4 px-1'>
                <div className="lg:w-full w-full 2xl:h-[400px] lg:h-[390px] h-[380px] lg:pt-4 flex items-center justify-center relative">
                    <Swiper
                        slidesPerView={1}
                        grid={{ rows: 2 }}
                        spaceBetween={0}
                        pagination={{ clickable: true }}
                        modules={[Grid, Pagination]}
                        className="w-full h-full"
                    >
                        {clients.map((client, index) => (
                            <SwiperSlide key={index} className="text-center lg:text-lg text-sm flex justify-center items-center">
                                <div className="flex items-center justify-center lg:w-[420px] 2xl:w-full xl:w-full w-full h-[150px] mt-2 border border-gray-300 overflow-hidden rounded-lg">
                                    <img
                                        src={client.image}
                                        alt={`Slide ${index + 1}`}
                                        className="object-cover rounded-lg lg:max-w-[130px] max-w-[100px] 
                                        max-h-[130px] lg:px-2 px-1"

                                    />
                                    <div className='lg:py-2 text-left lg:px-2 px-1  '>
                                        <p className='flex items-center lg:gap-1 gap-0.5 font-normal lg:text-[14px] text-sm text-[#5C635A] truncate '>
                                            <IoLocation size={18}/> {client.location}
                                        </p>
                                        <h1 className="font-bold text-[16px]  lg:text-xl py-1">
                                            {client.title} <span className='text-[#156BCA] italic'>by Cort</span>
                                        </h1>
                                        <p className="lg:text-[14px] font-normal text-[12px] text-[#5C635A]">
                                            {client.description} <span className='text-[#156BCA] font-normal text-xs'>...Read More</span>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
