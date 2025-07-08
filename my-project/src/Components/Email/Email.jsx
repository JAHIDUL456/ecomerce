import React from 'react'

const Email = () => {
  return (
    <div>

        <div className='w-[90%] mx-auto bg-gradient-to-r from-gray-300 via-purple-100 to-pink-200 mb-15 mt-2 p-4 rounded-lg shadow-lg'>
            <h2 className='text-3xl font-bold text-center font-serif p-2 lg:mb-5 mt-5'>
                Subscribe to our Newsletter
            </h2>
            <p className='text-center text-black font-semibold mb-4'>Stay updated with the latest news and offers</p>
            <div className='flex  items-center justify-center'>
<input type='email' placeholder='Enter your email address' className='w-full max-w-md p-2 border border-black text-black rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500' /><button className='text-center bg-black text-white rounded-2xl m-1 font-semibold p-2 mt-[-15px] hover:bg-gray-800 '>Subscribe</button>
            </div>
            
        </div>

    </div>
  )
}

export default Email