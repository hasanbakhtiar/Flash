import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleCard from '../components/SingleCard';
import { Row } from 'react-bootstrap';

const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios
        .get('https://fakestoreapi.com/products')
        .then(res=>setProducts(res.data))
    },[])
  return (
    <>
        <h1 className='text-center my-5'>Products list</h1>  
        <Row className='g-5'>
        {products.map(item=>(
            <SingleCard 
            photo={item.image}
            title={item.title}
            price={item.price}
            key={item.id}
            id={item.id}
            />
        ))}
        </Row>
        
        
         
    </>
  )
}

export default Products