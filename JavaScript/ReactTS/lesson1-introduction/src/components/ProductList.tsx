import React, { useEffect, useState }  from  "react";
import SingleCard from "./SingleCard";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

const ProductList: React.FC = () => {
   const [data,setData] = useState<any[]>([]);

   useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setData(res.data));
   },[])
  return (
    <div>
      <h1 className="text-center my-5">Product List</h1>
      <Container>
        <Row className="g-4">
          {data.map((item: any, count: number) => (
            <SingleCard 
            key={count} 
            title={item.title}
            price={item.price}
            stock={item.stock}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
