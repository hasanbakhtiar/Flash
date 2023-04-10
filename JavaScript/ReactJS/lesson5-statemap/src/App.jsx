import React, { Component } from "react";
import SingleCard from "./components/SingleCard";
import products from "./data/product";
class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="my-5 text-center">Products</h1>
        <div className="row g-5">
        {products.map(item=>{

         return <SingleCard
         key={item.id}
          photo={item.photo} 
          price={item.price}
          title={item.title}
          color={item.color}
          stock={item.stock}
           />
        })}
        </div>
      </div>
    );
  }
}

export default App;
