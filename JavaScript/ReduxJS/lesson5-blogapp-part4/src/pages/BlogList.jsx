import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const BlogList = () => {
    const blogdata = useSelector(state=>state);
    return (
        <div>
            <h1 className='text-center my-5'>Blogs</h1>
            <Row>
              {blogdata.map(item=>(
                  <Col key={item.id} sm={12} md={3}>
                  <Card>
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>
                            {item.auther}
                          </Card.Text>
                         <Link to={`/blogs/${item.id}`}> <Button variant="primary">Read More</Button></Link>
                      </Card.Body>
                  </Card>
              </Col>
              ))}
            </Row>
        </div>
    )
}

export default BlogList