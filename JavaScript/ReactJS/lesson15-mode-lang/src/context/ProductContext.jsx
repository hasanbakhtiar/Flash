import { createContext, useState } from "react";
import products from "../data/products";

export const ProductConext = createContext("");

export const ProductProvider = ({ children }) => {
    const [data,setData] = useState(products);
    return <ProductConext.Provider value={[data,setData] }>
        {children}
    </ProductConext.Provider>
}