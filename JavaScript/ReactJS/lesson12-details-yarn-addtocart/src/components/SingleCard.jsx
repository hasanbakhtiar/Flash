import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

function SingleCard({title,photo,price,id}) {
  return (
    <Col sm={6} md={3}>
      <Card>
        <Card.Img variant="top" src={photo} height={300}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {price}$
          </Card.Text>
          <LinkContainer to={`/products/${id}`}>
          <Button variant="primary">Add to cart</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleCard;
