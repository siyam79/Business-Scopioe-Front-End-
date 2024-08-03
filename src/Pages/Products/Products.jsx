import React, { useState, useEffect } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  // Helper function to truncate text
  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.slice(0, length) + '...';
    }
    return text;
  };


  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 classNameName=' text-[28px] ' >Products</h1>




      <div className=' grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  '>
        {products?.map(product => (
          <div key={product.id}>
            <div className="relative  overflow-hidden bg-gray-50 rounded-xl mb-6  ">
              <div
                className="group relative cursor-pointer overflow-hidden bg-white pt-0 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg ">

                <span className="absolute top-1 left-1 z-0 h-10 w-10 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]">

                </span>
                <div className="relative z-10 top-1 
                left-1 ">
                  {/* icon */}
                  <span className="grid left-10 top-0 h-10 w-10 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 left-0 text-white transition-all">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  </span>

                  <div
                    className="space-y-1 pt-5 text-base leading-7 text-[#5C635A] transition-all duration-300 group-hover:text-white/90 px-2 ">
                    <div className=' flex items-center justify-between  '> Model <span className=''>{product?.model}</span> </div>
                    <h1 className=' text-[20px]  text-gray-600 font-bold '> {product?.name} </h1>


                    {truncateText(product.description, 50)}
                    {product.description.length > 50 && (
                      <span className='text-sky-500 font-semibold'>...</span>
                    )}

                    <p className=' py-2 flex items-center justify-between '>  <span className=' font-semibold '>Manufacturer</span> {product.manufacturer} </p>
                  </div>

                  <div className='flex items-center justify-between gap-1 px-2 font-normal text-[16px] sm:text-sm text-[#5C635A]'>
                    <p className=' font-semibold'> Price {product.price} </p>
                    <p className='font-semibold'> {product.availability} </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
