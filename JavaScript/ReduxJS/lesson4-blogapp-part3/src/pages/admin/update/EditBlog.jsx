import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


const EditBlog = () => {
    const {id} = useParams();
    const blogdata = useSelector(state=>state);
    const comingdata = blogdata.find(a=>a.id.toString() === id);
    

 

  return (
    <div>
        <h1 className='text-center'>Edit Blog</h1>
        <BlogForm editblog={comingdata}/>
    </div>
  )
}

export default EditBlog