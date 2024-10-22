import React, { createContext } from 'react'
import all_product from '../Components/Assets/all_product';  //import all_product file to get data 

// create ShopContext usingcreateContext
export const ShopContext = createContext(null);

 // create function and pass props
const ShopContextProvider = (props) =>{

    // store data in contextValue that imported from all_product file
    const contextValue = {all_product};

    return(
        // pass contextValue
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
 
export default  ShopContextProvider; 

