import React, {  useContext, useState } from 'react'
import { ProductConext } from '../context/ProductContext'
const Home = () => {
    const [data] = useContext(ProductConext);
    const [lang,setLang]= useState('Hello');
  return (
    <div>
      <h1>{lang}</h1>
      <button onClick={()=>{setLang("Salam")}}>az</button>
        <h1 className='text-center my-3'>Home Page</h1>
        {data.map(i=>{
            return <li key={i.id}>{i.title}</li>
        })}
        
    </div>
  )
}

export default Home