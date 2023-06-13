import React, { useEffect, useLayoutEffect, useState } from 'react'

const AppUseLayoutEffect = () => {


    const [data,setData] = useState('hello');
    useLayoutEffect(()=>{
        setData('bye')
    },[])
  return (
    <h1>{data}</h1>
  )
}

export default AppUseLayoutEffect