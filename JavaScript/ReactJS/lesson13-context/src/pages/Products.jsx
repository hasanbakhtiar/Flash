import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Products = () => {
  const [products] = useContext(ProductContext);

  return (
    <div>
        products
        {products.map(item=>{return <span key={item.id}>{item.title}</span>})}

    </div>
  );
};

export default Products;
