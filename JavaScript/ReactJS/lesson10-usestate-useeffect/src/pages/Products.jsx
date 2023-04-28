
import axios from "axios";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Products = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    AOS.init();
    
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setItem(res.data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-5">Products</h1>
      <div className="row">
        {item.map((fd) => {
          return (
            <div className="col-12 col-sm-6 col-md-4" data-aos="flip-up">
              <div className="card">
                <img src={fd.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{fd.title}</h5>
                  <p className="card-text">
                   {fd.description}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
