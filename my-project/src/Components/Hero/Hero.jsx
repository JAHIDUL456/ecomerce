import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../../Components/Assets/hero_image.png'
const Hero = () => {
  return (
    <div>
        <div className='flex justify-between items-center p-4 bg-gradient-to-r from-gray-100 via-purple-100 to-pink-100'>
            <div className='lg:ml-[250px]'>
                {/* Left side content */}
                <p className='text-4xl font-bold p-1'>New Arrival</p>
                <p className='text-3xl font-bold p-1 text-red-400'>2025 Best</p>
                <p className='text-2xl font-bold p-1'>Collections</p>
                <Link to="/products" ><button className='bg-red-400 text-white py-2 px-4 ml-2 mt-5 rounded-md hover:bg-red-500 transition-all duration-300 ease-in-out courser-pointer'>Shop Now</button></Link>
            </div>
            <div >
                {/* Right side content */}
                <img src={hero} alt="" className='w-90 lg:mr-[150px]'/>
            </div>
        </div>
    </div>
  )
}

export default Hero