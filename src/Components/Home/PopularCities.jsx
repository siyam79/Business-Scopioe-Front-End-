import React from 'react';

export default function PopularCities() {
  const PopularCitiesName = [
    { name: "PopularCities" },
    { name: "Indianapolis, IN" },
    { name: "Philadelphia" },
    { name: "Boston, MA" },
    { name: "Kansas City, MO" },
    { name: "PopularCities" },
    { name: "Indianapolis, IN" },
    { name: "Philadelphia" },
    { name: "Boston, MA" },
    { name: "Kansas City, MO" },
    { name: "PopularCities" },
    { name: "Indianapolis, IN" },
    { name: "Philadelphia" },
    { name: "Boston, MA" },
    { name: "Kansas City, MO" },
    { name: "PopularCities" },
    { name: "Indianapolis, IN" },
    { name: "Philadelphia" },
    { name: "Boston, MA" },
    { name: "Kansas City, MO" },
    { name: "Kansas City, MO" },
  ];

  return (
    <section className='2xl:w-1/2 lg:w-1/2 2xl:h-[429px] lg:h-[380px] '>
      <h4 className='text-lg lg:text-xl 2xl:text-2xl font-semibold pb-2 lg:px-0 px-2 '>PopularCities</h4>
      <div className='bg-[#FFFFFF] rounded-lg shadow-md  2xl:px-7 lg:px-3 px-1 '>
        <div className='grid grid-cols-3 lg:pb-3'>
        
            {
              PopularCitiesName?.map((item, i) => (
                <p key={i} className='py-4  text-[#156BCA] underline lg:text-[14px] text-[12px] border-b border-[#E7E7E7] '>
                <span className=' lg:px-3 px-1 sm:text-sm '>  {item?.name}</span>
                </p>      
              ))
            }
          
        </div>
      </div>
    </section>
  );
}
