import React, { useState } from 'react'

const Counter = () => {
    const [state,setState] = useState(1);
    const [text,setText] = useState("hello");
    const increment = ()=>{
        setState(state+1)
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