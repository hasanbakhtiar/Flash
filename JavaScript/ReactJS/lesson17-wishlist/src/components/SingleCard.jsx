import React from 'react'
import { useDispatch } from 'react-redux'
import { addWish } from '../manager/action/wishAction';
import { Link } from 'react-router-dom';

const SingleCard = ({ photo, title, price, id }) => {
    const dispatch = useDispatch();
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <Link to={`/products/${id}`}>
            <div className="card" >
                <img height={300} src={photo} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price}</p>
                    <button onClick={() => { dispatch(addWish({ title: title, id: id, price: price, photo: photo }));alert("wish added"); }
                } className="btn btn-primary">Add wishlist</button>
                </div>
            </div>
            </Link>
        </div>

    )
}

export default SingleCard