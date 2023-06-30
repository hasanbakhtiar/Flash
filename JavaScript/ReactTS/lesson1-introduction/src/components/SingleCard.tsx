import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { productType } from '../config';

const SingleCard:React.FC<productType> = ({title,price,stock}) => {
  return (
   <Col sm={12} md={3}>
    <Card >
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
      {price}
      </Card.Text>
      <Button variant={price<100?"success":"danger disabled"}>{stock?"inStock":"stock out"}</Button>
    </Card.Body>
  </Card>
   </Col>
  )
}

export default SingleCard