import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCat from './Pages/ShopCat'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer.jsx'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<ShopCat category="men"/>} /> 
          <Route path="/womens" element={<ShopCat category="women"/>} />
          <Route path="/kids" element={<ShopCat category="kid"/>} />
          <Route path="/products" element={<Product/>} />
          <Route path=":productId" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LoginSignup/>} />





        </Routes>
        <Footer />
        
      </BrowserRouter>
    </div>
  )
}

export default App