import React, { useContext} from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import { ProductContext } from '../context/ProductContext';

const ProductDetails = () => {
    const {id} = useParams();
    const [product] = useContext(ProductContext);

    const productdetails = product.find(p=>p.id.toString() === id);
    const {addItem} = useCart();
    
  return (
<>
{productdetails === undefined ? <h1>Loading...</h1> :<div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={productdetails.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{productdetails.title}</h1>
      <p className="lead">{productdetails.description}</p>
      <p className=" text-success" style={{"textWeight":"bolder !important","fontSize":"25px"}}>{productdetails.price}$</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button onClick={()=>{addItem(productdetails)}} type="button" className="btn btn-primary btn-lg px-4 me-md-2">Add to cart</button>
        <LinkContainer to='/products'>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Back</button>
        </LinkContainer>
      </div>
    </div>
  </div>
</div>}

</>

  )
}

export default ProductDetails