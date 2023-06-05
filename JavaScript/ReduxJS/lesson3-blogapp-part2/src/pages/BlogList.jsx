import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const BlogList = () => {
    const blogdata = useSelector(state=>state);
    return (
        <div>
            <h1 className='text-center my-5'>Blogs</h1>
            <Row>
              {blogdata.map(item=>(
                  <Col sm={12} md={3}>
                  <Card>
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>
                            {item.auther}
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                  </Card>
              </Col>
              ))}
            </Row>
        </div>
    )
}

export default BlogList