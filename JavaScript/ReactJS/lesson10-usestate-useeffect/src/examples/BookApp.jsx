import React, { useState } from 'react'

const BookApp = () => {

    const [state,setState] = useState({
        img:'https://novella.az/wp-content/uploads/2020/08/Webp.net-compress-image499.jpg',
        title:"1984",
        auther:"George Orwell"
    })
    
    
  return (
        <div className='container mt-5'>
        <div className="card" style={{width: '18rem'}}>
            <img src={state.img} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{state.title}</h5>
            <p className="card-text">{state.auther}</p>
            <button className="btn btn-primary" onClick={()=>{
                setState({
                    img:'https://img.kitapyurdu.com/v1/getImage/fn:44734/wh:true/miw:200/mih:200',
                    title:"Intikam Melekleri",
                    auther:"Sir Arthur Conan Doyle"
                })
            }}>Next Book</button>
            </div>
        </div>
        </div>

  )
}

export default BookApp