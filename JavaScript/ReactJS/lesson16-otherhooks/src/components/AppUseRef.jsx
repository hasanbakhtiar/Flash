import React, { useRef } from 'react'

const AppUseRef = () => {

    const inputref = useRef();
    const handleClick=()=>{
        console.log(inputref.current.value);
    }
    
  return (
    <div className='container my-5'>
        
        <input type="text" ref={inputref} /><button onClick={handleClick}>test</button>
        
        
    </div>
  )
}

export default AppUseRef