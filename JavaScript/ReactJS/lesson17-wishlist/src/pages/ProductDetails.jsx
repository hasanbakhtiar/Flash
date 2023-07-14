import React from 'react'
import { useParams } from 'react-router-dom';
import product from '../data/dummy-data';

const ProductDetails = () => {
    const {id} = useParams();
    const productdetails = product.find(p=>p.id.toString() === id);

  return (
    <div>
        <img src={productdetails.img}  alt="" />
        <h1>{productdetails.title}</h1>
        <p>{productdetails.price}</p>
        <button className='btn btn-success'>add to cart</button>
    </div>
  )
}

export default ProductDetails