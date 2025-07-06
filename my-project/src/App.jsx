import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCat from './Pages/ShopCat'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={Shop} />
          <Route path="/mens" element={ShopCat} /> 
          <Route path="/womens" element={ShopCat} />
          <Route path="/kids" element={ShopCat} />
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App