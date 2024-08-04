import React, { useState, useEffect } from 'react';

export default function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

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
        console.log((error.message));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className='w-full lg:flex items-center justify-between pb-4'>
        <h1 className='text-[28px] text-center lg:text-left py-2 '>Products</h1>

        {/* Search bar */}
        <div className="flex justify-center sm:justify-start">
          <input
            className="text-md py-2 px-4 border-2 border-gray-500 placeholder-gray-500 font-semibold rounded-l"
            type="search"
            name="q"
            placeholder="Search entire store here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#156BCA] px-5 py-1 text-lg font-bold hover:shadow-2xl cursor-pointer transition duration-250 ease-in-out rounded-r text-white"
          >
            Search
          </button>
        </div>
      </div>

      <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-2'>
        {filteredProducts?.length === 0 ? (
          <div className="flex flex-col items-center justify-center 2xl:w-[1190px] xl:w-[1120px] lg:w-[100px] mx-auto min-h-screen text-gray-600">
            <p className="mt-1 text-[22px]">Products Not Found</p>
          </div>
        ) : (
          filteredProducts?.map(product => (
            <div key={product.id} class="flex px-2 py-3">
              <div class="max-w-sm  overflow-hidden shadow-lg rounded-lg">
                <img class="w-full lg:h-[220px] h-[200px] " src={product?.image} alt="Sunset in the mountains" />
                <div class="px-3 py-2">
                  <div class="font-bold text-xl mb-2">{product?.name} </div>
                  <p class="text-gray-700 text-base">
                    {product?.description}
                  </p>
                </div>
                <div class="px-6 py-4">
                  <span class="inline-block bg-gray-300  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3">{product?.price}/tk </span>
                  <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3">{product?.model} </span>
                  <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{product?.availability} </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
