import React from 'react'
import SearchhBar from './SearchBar'
import { BannerImage, BannerImageBG } from './BannerImage'

export default function Banner() {
  return (
    <section className=''>
      <div className='lg:h-[212px] h-[428px] bg-[#FFFFFF] rounded-lg lg:px-7 lg:flex justify-between'>
        <div className='2xl:w-1/2 lg:w-1/2 w-full px-2 lg:px-0'>
          <div className='lg:py-4'>
            <h1 className='text-[#152A16] py-4 text-[18px] truncate  font-medium lg:text-[20px] lg:leading-8'>I am Looking For Massage Therapist Near..</h1>
            <p className='text-[15px] leading-6 font-normal mb-6 lg:mb-0'>
              In using this site, I agree to be bound by the <span className='underline text-[#156BCA]'>Terms of Service</span> <br className=' lg:block hidden '/> and <span className='underline text-[#156BCA]'>Privacy Policy</span>
            </p>
          </div>

          <div className='lg:block hidden'>
            <SearchhBar />
          </div>
        </div>
        <div className='relative 2xl-w-1/2 lg:w-1/2 2xl:ml-60 lg:ml-24 w-full'>
          <div className='relative'>
            <BannerImageBG />
          </div>
          <div className='absolute lg:top-16 lg:right-0 bottom-14 2xl:left-36  lg:left-36 left-16 transform lg:-translate-y-1/2'>
            <BannerImage />
          </div>

          <div className='lg:hidden'>
            <SearchhBar />
          </div>
        </div>
      </div>
    </section>
  )
}
