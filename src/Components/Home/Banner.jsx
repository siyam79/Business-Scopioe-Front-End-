import React from 'react'

export default function Banner() {
  return (
    <section className=''>
      <div className=' h-[212px] bg-[#FFFFFF] rounded-lg lg:px-7 flex  justify-between '>
        <div className=' lg:max-w-[587px] w-full '>
          <div className=' py-4 '>
            <h1 className=' text-[#152A16] py-4 font-semibold text-[20px] line-height-[30px] leading-8 '> I am Looking For Massage Therapist Near.. </h1>
            <p className=' text-[15px] leading-6 font-medium'>
              In using this site, I agree to be bound by the  <span className=' underline text-[#156BCA] '> Terms of Service</span> <br /> and   <span className='underline text-[#156BCA] '>Privacy Policy</span> </p>
          </div>

          <div class="relative ">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="search" class="block w-full py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#E7E7E7] focus:ring-blue-500 focus:border-blue-500 " placeholder=" ZIP Code or City Name" />

            <button type="submit" class="text-white absolute end-2 bottom-1  bg-[#156BCA] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Go</button>
          </div>
        </div>
        <div>
          Right
        </div>

      </div>
    </section>
  )
}
