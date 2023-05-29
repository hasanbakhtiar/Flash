import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const blog = useSelector(state=>state);
    
  return (
    <div>
        {blog.map(i=>{
            return <li key={i.id}>{i.title} - {i.auther}</li>
        })}
    </div>
  )
}

export default Home