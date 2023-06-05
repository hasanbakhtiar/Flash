import React, { useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

const BlogForm = () => {
  const [title,setTitle] = useState('');
  const [auther,setAuther] = useState('');
  const dispatch = useDispatch();
  const blogSubmited =e=>{
      e.preventDefault();
      dispatch({
        type:"ADD_BLOG",
        newblog:{
          id:crypto.randomUUID(),
          title:title,
          auther:auther
        }
      })

  }
  
  return (
  <div className="d-flex justify-content-center">
     <Col md={6}>
     <Form onSubmit={blogSubmited}>
    <Form.Group className="mb-3" >
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Enter title" onChange={e=>{setTitle(e.target.value)}}/>
  
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Auther</Form.Label>
      <Form.Control type="text" placeholder="Enter auther" onChange={e=>{setAuther(e.target.value)}}/>
    </Form.Group>

    <Button variant="primary" type="submit">
      Publish
    </Button>
  </Form>
   </Col>
  </div>
  )
}

export default BlogForm