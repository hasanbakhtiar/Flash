import React, { forwardRef, useImperativeHandle, useRef } from 'react'


const MyInput = forwardRef((props,ref)=>{
    
    useImperativeHandle(ref,()=>({
            mytest:test
    }))
    
    
    const test =()=>{
        alert("Hello")
     }

    return (
        <input type="text" />
    )
})

const AppUseImperativeHandle = () => { 
  

    const inputref = useRef();

    
    const handleClick=()=>{
            inputref.current.mytest();
    }
    
  return (
    <div><MyInput ref={inputref}/><button onClick={handleClick}>test</button></div>
  )
}

export default AppUseImperativeHandle