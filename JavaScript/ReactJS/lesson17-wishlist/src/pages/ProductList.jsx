import React from 'react'
import { Row } from 'react-bootstrap'
import product from '../data/dummy-data'
import SingleCard from '../components/SingleCard'

const ProductList = () => {
  return (
    <Row className='mt-5 g-5'>
      {product.map(item=>(
        <SingleCard key={item.id} id={item.id} photo={item.img} title={item.title} price={item.price}/>
      ))}
    </Row>
  )
}

export default ProductList