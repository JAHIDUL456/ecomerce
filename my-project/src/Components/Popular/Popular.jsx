import React from 'react'
import data from '../../Components/Assets/data.js'

const Popular = () => {
  return (
    <div className='w-[90%] mx-auto bg-white mb-25'>
      <h2 className='text-3xl font-bold text-center font-serif p-2 lg:mb-10 mt-5'>
        Popular Products
      </h2>
     
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-4'>
        {data.map((item) => (
          <div
            key={item.id}
            className='w-full p-2 rounded-lg shadow-lg   hover:bg-gray-100 hover:scale-[1.1] transition-all duration-300 hover:border-b-1 hover:border-red-500'
          >
            <div className='flex justify-center'>
              <img
                src={item.image}
                alt={item.name}
                className='w-full max-w-[180px] h-auto mb-4 p-2 rounded-xl'
              />
            </div>
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
