import React from 'react'
import { Link } from 'react-router-dom'

const SingleCard = ({photo,title,price}) => {
  return (
<div className="col-12 col-sm-6 col-md-4">
<div className="card" >
  <img src={photo} className="card-img-top" alt={title} />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{price}</p>
    <Link to="/products" className="btn btn-primary">Add to cart</Link>
  </div>
</div>
</div>

  )
}

export default SingleCard