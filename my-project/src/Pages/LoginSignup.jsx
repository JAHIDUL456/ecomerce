import React from 'react'

const LoginSignup = () => {
  return (
    <div >
      
      <div className='items-center justify-center flex mt-5'>
        <div className='flex flex-col items-center justify-center  bg-blue-200 lg:w-[35vw] lg:h-[70vh] rounded-2xl shadow-2xl p-5 sm:w-[50vw] h-[50vh]  '>
          {/* Login sign up page  */}
          <h1 className='text-2xl font-bold mb-6 mt-[-2rem]'>Sign Up</h1>
          <div className='flex flex-col gap-4 w-70 mb-5 mt-2 '>
            <input className='border-2 border-black p-2 rounded-2xl' type="text" placeholder='Your name'/>
            <input className='border-2 border-black p-2 rounded-2xl' type="email" placeholder='Your email'/>
            <input className='border-2 border-black p-2 rounded-2xl' type="password" placeholder='Your password'/>
          </div>
          <button className='bg-red-400 text-white p-2 rounded-xl font-bold'>Sign Up</button>
          <p>Already have an account? <a className='text-red-600' href="/login">Login</a></p>
         
            
        </div>
      </div>
    </div>
  )
}

export default LoginSignup