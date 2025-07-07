import React from 'react'
import data from '../../Components/Assets/data.js'
const Popular = () => {
  return (
    <div className='w-[90%] mx-auto  bg-white'>
        <h2 className='text-3xl font-bold text-center my-8 font-serif  '>Popular Products</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-2 mb-2 sm:m-[-50px]'>
            {data.map((item) => (
            <div key={item.id} className=' p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
                <div className='flex justify-center'><img src={item.image} alt={item.name} className='w-[250px] mb-4 p-2 rounded-xl ' /></div>
                <h3 className='text-lg font-semibold mb-2 sm:text-md'>{item.name}</h3>
                <p className='text-gray-500 line-through'>${item.old_price.toFixed(2)}</p>
                <p className='text-green-600 text-xl font-bold'>${item.new_price.toFixed(2)}</p>
            </div>
            ))}
        </div>

    </div>
  )
}

export default Popular