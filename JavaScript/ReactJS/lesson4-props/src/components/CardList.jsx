import React, { Component } from "react";
import SingleCard from "./SingleCard";
import phone from '../img/phone-photo.webp';
class CardList extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center my-5">Products</h1>
        <div className="row g-5">
        <SingleCard photo="https://images.unsplash.com/photo-1680428517644-0f6569346521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" title="Flower"/>
        <SingleCard photo="https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg" title="Laptop"/>
        <SingleCard photo={phone} title="Phone"/>
        <SingleCard photo="" title="Tv"/>
     
        </div>
      </div>
    );
  }
}

export default CardList;
