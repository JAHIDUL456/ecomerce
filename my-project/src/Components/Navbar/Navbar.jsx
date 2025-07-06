import React from 'react'
import logo from '../../Components/Assets/logo.png' // Adjust the path as necessary
import cart from '../../Components/Assets/cart_icon.png' // Adjust the path as necessary
const Navbar = () => {
  return (
    <div>
      <div className='bg-white shadow-md '>
        <nav className='flex justify-between items-center  pl-4 pr-4'>
          {/* this is navbar */}
          
          <div className='flex items-center p-2'>
            {/* This section is for icon */}
            <img  src={logo} alt="logo"  width={50} />
          <h1 className='text-xl font-bold text-black p-2 pt-5' >Fashion_BD</h1>
          </div>
          <div >
            {/* This section is for list of items */}
            <ul className='flex items-center gap-4 p-2 '>
              <li><a href="/" className="text-black p-2 font-bold hover:border-b-2 hover:border-blue-500 courser-pointer">Home</a></li>
              <li><a href="/products" className="text-black p-2 font-bold hover:border-b-2 hover:border-blue-500 courser-pointer">Products</a></li>
              <li><a href="/about" className="text-black p-2 font-bold hover:border-b-2 hover:border-blue-500 courser-pointer">About</a></li>
              <li><a href="/contact" className="text-black p-2 font-bold hover:border-b-2 hover:border-blue-500 courser-pointer">Contact</a></li>
            </ul>
          </div>
          <div className='flex items-center gap-4 p-2'>
            {/* This section is for search bar */}
            <button className='border-2 border-blue-600 text-black p-2 font-bold rounded-xl hover:border-green-400 hover:text-black hover:font-bold transition-all duration-200 ease-in-out'>Login</button>
            <a href="/">
              <img src={cart} alt="" className='w-8 h-8' />
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar