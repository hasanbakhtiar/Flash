import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "react-use-cart";
import { ProductContext } from "../context/ProductContext";
import { ListGroup } from "react-bootstrap";

function Header() {
  const { totalItems } = useCart();
  const [query,setQuery] = useState("");
  const [product] =useContext(ProductContext);
  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link>Products</Nav.Link>
            </LinkContainer>
          </Nav>
        


        <div className="me-3">
       
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <i className="fa-solid fa-magnifying-glass"></i>
          </button>
       
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Search</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
          <div className="input-group mb-3">
            <input onChange={e=>setQuery(e.target.value)} type="text" className="form-control" placeholder="Enter product" aria-label="Enter product" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <ListGroup>
  {query === ""? <></> :  product.filter(q=>q.title.toLocaleLowerCase().includes(query)).map(item=>(

<LinkContainer to={`/products/${item.id}`}><ListGroup.Item className="search-item">{item.title}</ListGroup.Item></LinkContainer>
))}
    </ListGroup>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <LinkContainer to="/basket">
            <button type="button" className="btn btn-warning position-relative">
              <i className="fa-solid fa-cart-shopping" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
