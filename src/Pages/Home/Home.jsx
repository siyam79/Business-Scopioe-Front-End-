import React from 'react'
import Banner from '../../Components/Home/Banner'
import FeaturedTherapist from '../../Components/Home/FeaturedTherapist'
import FeaturedTestimonial from '../../Components/Home/FeaturedTestimonial'
import PopularCities from '../../Components/Home/PopularCities'

export default function Home() {
    return (

        <div className=''>
            <Banner />
            <FeaturedTherapist />
            <div className=' lg:flex  gap-4  2xl:pb-12 xl:pb-10 lg:pb-8 pb-6  '>
                <FeaturedTestimonial />
                <PopularCities />
            </div>
        </div>

    )
}
