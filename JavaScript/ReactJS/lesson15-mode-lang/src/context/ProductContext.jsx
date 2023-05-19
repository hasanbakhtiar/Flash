import { createContext, useContext, useState } from "react";
import productsen from "../data/productsen";
import productsaz from "../data/productsaz";
import { LangContext } from "./LangContext";

export const ProductConext = createContext("");

export const ProductProvider = ({ children }) => {
    const [datap, setDatap] = useState(productsen);
    const [datav, setDatav] = useState(productsaz);
    const [lang] = useContext(LangContext);
    return <ProductConext.Provider value={lang === "AZ" ? [datap, setDatap] : [datav, setDatav]}>
        {children}
    </ProductConext.Provider>
}