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
            <div className=' lg:flex  gap-4'>
                <FeaturedTestimonial />
                <PopularCities />
            </div>
        </div>

    )
}
