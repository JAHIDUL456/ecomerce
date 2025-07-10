import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* this section is for the footer */}
      <footer className='bg-gray-500 text-white py-6 mt-10'>
        <div className='container mx-auto text-center'>
          <p className='text-sm'>© 2025 Fashion_BD. All rights reserved.</p>
          <p className='text-sm'>Follow us on:</p>
          <div className='flex justify-center space-x-4 mt-2'>
            <a href='#' className='text-white hover:text-gray-400'>Facebook</a>
            <a href='#' className='text-white hover:text-gray-400'>Twitter</a>
            <a href='#' className='text-white hover:text-gray-400'>Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer