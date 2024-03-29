import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {  editBlogFromDatabase } from '../../../manager/actionBlog'


const EditBlog = () => {
    const {id} = useParams();
    const blogdata = useSelector(state=>state);
    const comingdata = blogdata.find(a=>a.id.toString() === id);
    const dispatch = useDispatch();
    const navigate = useNavigate();

 

  return (
    <div>
        <h1 className='text-center'>Edit Blog</h1>
        <BlogForm 
         editblog={comingdata}
         formSubmit={(params)=>{
          dispatch(editBlogFromDatabase(comingdata.id,params));
          navigate('/admin');
          window.location.reload();
        }}
         />

    </div>
  )
}

export default EditBlog