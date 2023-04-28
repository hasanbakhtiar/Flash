import React, { useEffect, useState } from 'react'

const Counter = () => {

    
    
    
    const [state,setState] = useState(1);
    const [text,setText] = useState("hello");


    useEffect(()=>{
        console.log('useEffect is running...');
    },[text])
    
    
    const increment = ()=>{
       if (state<5) {
        setState(state+1)
       }
    }
  return (
    <div className='container mt-5'>
        <p>{text}</p>
        <button onClick={()=>{setText('Salam')}}>az</button>
        <p className='text-danger'>{state}</p>
        <button onClick={increment}>+1</button>
    </div>
  )
}

export default Counter