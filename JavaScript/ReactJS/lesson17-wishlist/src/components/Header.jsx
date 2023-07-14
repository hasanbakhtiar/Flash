import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    const wishdata = useSelector(p=>p);
    
    return (
        <Navbar bg="dark" className='navbar-dark' expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Best Blog</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/products">
                            <Nav.Link>Product List</Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
                <LinkContainer to="/wishlist"><Button variant="warning">wishlist(<span className='text-danger'>{wishdata.wish.length}</span>)</Button></LinkContainer>
            </Container>
        </Navbar>
    )
}

export default Header