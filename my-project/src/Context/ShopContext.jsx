import react from 'react';
import { createContext } from 'react';
import all_product from '../Components/Assets/all_product.js';

export const ShopContext = createContext(null);

const ShopProvider = ({ children}) => { 
    const contextValue = { all_product};

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
}
export default ShopProvider;