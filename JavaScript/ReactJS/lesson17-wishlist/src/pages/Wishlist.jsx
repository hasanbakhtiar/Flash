import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeWish } from '../manager/action/wishAction';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const wishdata = useSelector(p=>p);
    const dispatch = useDispatch();
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                
                {wishdata.wish.map((item,c)=>(
                    <tr>
                    <th scope="row">{c+1}</th>
                    <td><img width={100} src={item.photo} alt={item.title} /></td>
                    <td><Link to={`/products/${item.id}`}>{item.title}</Link></td>
                    <td>{item.price}</td>
                    <td><button className='btn btn-danger' onClick={()=>{
                        dispatch(removeWish({id:item.id}))
                    }}>X</button></td>
                </tr>
                ))}
            </tbody>
            <button onClick={()=>{dispatch({type:"CLEARALL_WISH"})}} className='btn btn-danger mt-5'>clear all</button>
        </table>

    )
}

export default Wishlist