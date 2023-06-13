import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    const {id} = useParams();
    const blogdata = useSelector(a=>a);
    const detailsData = blogdata.find(p=>p.id.toString() === id);
    
  return (
    <div>
        <h1>{detailsData.title}</h1>
        <p>{detailsData.auther}</p>
    </div>
  )
}

export default BlogDetails