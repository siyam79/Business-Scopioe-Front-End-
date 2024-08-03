import React from 'react'

export default function SearchhBar() {
    return (
        <div className="relative 2xl:w-[470px] xl:w-[450px] lg:w-[440px]  w-full px-2 lg:mt-0 mt-8">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input type="search" id="search" className="block w-full py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#E7E7E7] focus:ring-blue-500 focus:border-blue-500 " placeholder=" ZIP Code or City Name" />

            <button type="submit" className="text-white absolute lg:end-2 end-6 xl:mr-1  bottom-1  bg-[#156BCA] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 ">Go</button>
        </div>
    )
}
