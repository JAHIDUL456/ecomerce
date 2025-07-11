import React from 'react'



const AllProduct = (props) => {
    const { product } = props;
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
        <div className='m-3 w-[1000px] h-[500px] bg-white shadow-lg rounded-lg p-4'>
            <div className='flex '>
            <div className='flex flex-col lg:justify-center items-center lg:mt-0 mt-3'>
                {/* poduct images */}
                <img src={product.image} alt="" className='lg:w-[100px] w-[180px] p-1 mb-1' />
                <img src={product.image} alt="" className='lg:w-[100px] w-[180px] p-1 mb-1' />
                <img src={product.image} alt="" className='lg:w-[100px] w-[180px] p-1 mb-1' />
                <img src={product.image} alt="" className='lg:w-[100px] w-[180px] p-1 mb-1' />
            </div>
            <div className='flex p-3'>
                <div className='p-1 ml-[-10px]'>
                <img src={product.image} alt="" className='lg:w-[400px] w-[600px]'/></div>
                <div className='p-1 ml-[10px]'><h1 className='lg:text-2xl font-bold mb-2'>{product.name}</h1>
                <p className='text-md p-1 hidden lg:block'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus error dignissimos delectus quis!<br></br> Esse reprehenderit adipisci alias facilis blanditiis voluptas.</p>
                <h1 className='lg:text-2xl font-bold mt-4'>Select Size</h1>
                <div className='lg:mt-3 mt-2 '><button className='mr-2 border-2 border-black lg:pl-3 lg:pr-3 p-2 rounded-md hover:broder-2 hover:border-blue-400'>S</button>
                <button className='mr-2 m-1 border-2 border-black lg:pl-3 lg:pr-3 rounded-md hover:broder-2 p-2 hover:border-blue-400'>M</button>
                <button className='mr-2 m-1 border-2 border-black lg:pl-3 lg:pr-3 rounded-md hover:broder-2 p-2 hover:border-blue-400'>L</button>
                <button className='mr-2 m-1 border-2 border-black lg:pl-3 lg:pr-3 rounded-md hover:broder-2 p-2 hover:border-blue-400'>XL</button>
                </div>
                <button className='lg:mt-10 mt-3 bg-blue-500 lg:p-3 p-2 text-md font-semibold rounded-xl text-white hover:bg-amber-400'><a href="/cart">add to cart</a></button>
                </div>
            </div>


            </div>

        </div>
    </div>
  )
}

export default AllProduct