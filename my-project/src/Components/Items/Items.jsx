import React from 'react';

const Items = ({ image, name, new_price, old_price }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 m-2 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl">
      <div className='flex justify-center mb-4'>
      <img
        src={image}
        alt={name}
        className="w-[200px] p-1 object-cover rounded-xl mb-4"
      /></div>
      <h2 className="text-lg font-semibold mb-2 text-gray-800">{name}</h2>
      <div className="flex items-center justify-between">
        <div className="text-green-600 font-bold text-lg">${new_price}</div>
        <div className="line-through text-gray-500 text-sm">${old_price}</div>
      </div>
    </div>
  );
};

export default Items;
