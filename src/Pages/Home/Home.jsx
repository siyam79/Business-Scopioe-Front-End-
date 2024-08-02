import React from 'react'
import Banner from '../../Components/Home/Banner'
import FeaturedTherapist from '../../Components/Home/FeaturedTherapist'
import FeaturedTestimonial from '../../Components/Home/FeaturedTestimonial'

export default function Home() {
    return (

        <div className='px-7'>
            <Banner />
            <FeaturedTherapist />
            <div className='  '>
                <FeaturedTestimonial />
            </div>
        </div>

    )
}
