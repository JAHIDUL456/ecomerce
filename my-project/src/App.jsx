import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} /> 
          <Route path="/contact" element={<h1>Contact Page</h1>} />
          <Route path="/products" element={<h1>Products Page</h1>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App