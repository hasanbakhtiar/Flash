import React, { useContext } from 'react'
import SingleCard from '../components/SingleCard';
import { Row } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';

const Products = () => {
    const [product] = useContext(ProductContext);
 
  return (
    <>
        <h1 className='text-center my-5'>Products list</h1>  
        <Row className='g-5'>
        {product.map(item=>(
            <SingleCard 
            photo={item.image}
            title={item.title}
            price={item.price}
            key={item.id}
            id={item.id}
            alldata={item}
            />
        ))}
        </Row>
        
        
         
    </>
  )
}

export default Products