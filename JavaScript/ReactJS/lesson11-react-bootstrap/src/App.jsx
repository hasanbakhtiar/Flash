import React, { useState } from 'react'
import product from './data/product'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';

const App = () => {
    const [state,setState] = useState(product);
  return (
    <Container>
        <Row className='g-5'>
        {state.map(item=>{
            return  <Col sm={6} md={3}>
            <Card >
            <Card.Img variant="top" src={item.img   } />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="outline-warning">Go somewhere</Button>
            </Card.Body>
          </Card>
            </Col>
        })}
        </Row>
    </Container>
  )
}

export default App