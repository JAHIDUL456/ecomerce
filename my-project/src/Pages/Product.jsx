import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AllProduct from '../Components/AllProduct/AllProduct.jsx';
import { ShopContext } from '../Context/ShopContext.jsx'; // ✅ Ensure proper import

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams(); 
  const product = all_product.find(item => item.id === parseInt(productId)); 

  if (!product) {
    return (
      <div className="text-center text-red-500 mt-10 text-xl">
        Product not found or loading...
      </div>
    );
  }

  return (
    <div>
      <AllProduct product={product} />
    </div>
  );
};

export default Product;
