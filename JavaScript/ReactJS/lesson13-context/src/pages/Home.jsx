import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const About = () => {
  const [products] = useContext(ProductContext);
  
  return (
    <div>
          home
          {products.map(item=>{return <li key={item.id}>{item.title}</li>})}
    </div>
  );
};

export default About;
