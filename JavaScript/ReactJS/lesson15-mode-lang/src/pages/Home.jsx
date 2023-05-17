import React, {  useContext } from 'react'
import { ProductConext } from '../context/ProductContext'
const Home = () => {
    const [data] = useContext(ProductConext);

  return (
    <div>
        <h1 className='text-center my-3'>Home Page</h1>
        {data.map(i=>{
            return <li key={i.id}>{i.title}</li>
        })}
        
    </div>
  )
}

export default Home