import { createContext } from "react";
import products from "../data/products";

export const ProductConext = createContext("");

export const ProductProvider = ({ children }) => {
    
    return <ProductConext.Provider value={'test'}>
        {children}
    </ProductConext.Provider>
}