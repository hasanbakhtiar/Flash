import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { addblog } from '../../../manager/actionBlog'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'


const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='text-center my-5 '>Add new blog</h1>
      <BlogForm formSubmit={(params)=>{
        dispatch(addblog(params));
        navigate('/admin')
      }} />
    </div>
  )
}

export default AddBlog