import React, {  useContext } from 'react'
import { ProductConext } from '../context/ProductContext'
const Home = () => {
    const data = useContext(ProductConext);

  return (
    <div>
        <h1 className='text-center my-3'>Home Page</h1>
        {console.log(data)}
        
    </div>
  )
}

export default Home