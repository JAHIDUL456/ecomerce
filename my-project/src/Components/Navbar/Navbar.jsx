import React, { use } from 'react'
import logo from '../../Components/Assets/logo.png' // Adjust the path as necessary
import cart from '../../Components/Assets/cart_icon.png' // Adjust the path as necessary
import { Link } from 'react-router-dom' // Import Link for navigation
import { useState } from 'react' // Import useState for managing state
const Navbar = () => {

  const [menu, setmenu]= useState("shop");
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
              <li className='text-black font-bold hover:border-b-2 p-1 border-blue-600 transition-all duration-100 ease-in-out cursor-pointer' onClick={()=>setmenu("shop")}>
                <Link to="/">Shop</Link>
              </li>
              <li className='text-black font-bold hover:border-b-2 p-1 border-blue-600 transition-all duration-100 ease-in-out cursor-pointer' onClick={()=>setmenu("men")}> 
                <Link to="/mens">Mens</Link></li>
              <li className='text-black font-bold hover:border-b-2 p-1 border-blue-600 transition-all duration-100 ease-in-out cursor-pointer' onClick={()=>setmenu("women")}>
                <Link to="/womens">Womens</Link>
              </li>
              <li className='text-black font-bold hover:border-b-2 p-1 border-blue-600 transition-all duration-100 ease-in-out cursor-pointer' onClick={()=>setmenu("kids")}>
                <Link to="/kids">Kids</Link> </li>
          

            </ul>
          </div>
          <div className='flex items-center gap-4 p-2'>
            {/* This section is for search bar */}
            
            
            <Link to="/login">
            <button className='border-2 border-blue-600 text-black p-2 font-bold rounded-xl hover:border-green-400 hover:text-black hover:font-bold transition-all duration-200 ease-in-out'>Login</button>
            </Link>
            
            <Link to="/cart">
            <img src={cart} alt="" className='w-8 h-8' />
            </Link>
              
            
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar