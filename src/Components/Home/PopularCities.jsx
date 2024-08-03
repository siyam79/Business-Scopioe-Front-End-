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
    <section className='w-1/2 h-[429px] border mb-6'>
      <h4 className='pb-2'>PopularCities</h4>
      <div className='bg-[#FFFFFF] rounded-lg px-7 pb-20'>
        <div className='grid grid-cols-3'>
        
            {
              PopularCitiesName?.map((item, i) => (
                <p key={i} className='py-6'> {item?.name} </p>
              ))
            }
          
        </div>
      </div>
    </section>
  );
}
