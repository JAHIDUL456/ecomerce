import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import all_product from '../Components/Assets/all_product.js'
import Item from '../Components/Items/Items.jsx'




const ShopCat = (props) => {
  const {all_product}= useContext(ShopContext);
  return (
    <div>
      <img src={props.banner} alt="" />
      
      <h1 className="text-3xl font-bold text-center font-serif p-2 lg:mb-5 mt-5">Our Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-8">
        {all_product.map((item,i)=>{
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
                
              />
            )
          }
        })}
        
      </div>
      
    </div>
  )
}

export default ShopCat