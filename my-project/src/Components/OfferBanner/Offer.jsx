import React from 'react'
import banner from '../../Components/Assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='lg:pl-[50px] lg:pr-[50px] pl-[20px] pr-[20px] mb-[10px]'>
        <div className=' flex justify-between items-center bg-gradient-to-r from-red-100 via-blue-300 to-pink-200 p-4 lg:h-[45vh]  h-[25vh]'>
            <div className='lg:ml-[20%] items-center gap-2'>
                {/* This section is for the offer banner. */}
                <p className='lg:text-2xl lg:font-bold font-bold text-lg '>Offer of the day</p>
                
                <p className='lg:text-2xl lg:font-bold font-bold text-lg'>Get 50% off on your first purchase!</p>
                <button className='bg-red-400 text-white lg:py-2 lg:px-4 ml-2 mt-3 p-2  rounded-md hover:bg-red-500 transition-all duration-300 ease-in-out'>Shop Now</button>
            </div>
            <div className='lg:mr-[20%]  mb-[40px] '>
                {/* this section is for the offer banner */}
                <img src={banner} alt="" className='lg:w-[200px] w-[250px] '/>
            </div>
        </div>
    </div>
  )
}

export default Offer