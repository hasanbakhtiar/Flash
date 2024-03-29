import React, { useContext, useEffect, useState } from 'react'
import SingleCard from '../components/SingleCard';
import { Col, Row } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';

const Products = () => {
  const [product] = useContext(ProductContext);
  const [filterData, setFilterData] = useState(product);

  const categoryFilter = (cat) => {

    const result = product.filter(item => {
      return item.category === cat
    });
    setFilterData(result);
  }
  useEffect(() => {
    // categoryFilter(localStorage.getItem('category'));
  }, [])

  return (
    <>
      <h1 className='text-center my-5'>Products list</h1>
      <Row>
        <Col sm={12} md={3} className='position-relative'>
          <ul className="list-group position-fixed" style={{ "width": "15%" }}>
            <li className="list-group-item" onClick={() => {
              categoryFilter("men's clothing");
              localStorage.setItem('category', "men's clothing");
            }}>Men's clothing</li>
            <li className="list-group-item" onClick={() => {
              categoryFilter("women's clothing")
              localStorage.setItem('category', "women's clothing");

            }}>Women's clothing</li>
            <li className="list-group-item" onClick={() => {
              categoryFilter("jewelery")
              localStorage.setItem('category', "jewelery");
            }}>Jewelery</li>
            <li className="list-group-item" onClick={() => {
              categoryFilter("electronics");
              localStorage.setItem('category', "electronics");
            }}>Electronics</li>
          </ul>
        </Col>
        <Col sm={12} md={9}>
          <Row className='g-5'>
            {filterData.length === 0 ? product.map(item => (
              <SingleCard
                photo={item.image}
                title={item.title}
                price={item.price}
                key={item.id}
                id={item.id}
                alldata={item}
              />
            )) : filterData.map(item => (
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
        </Col>
      </Row>
    </>
  )
}

export default Products