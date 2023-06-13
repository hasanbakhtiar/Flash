import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
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
                        <LinkContainer to="/blogs">
                            <Nav.Link>Blog List</Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
                <LinkContainer to="/admin"><Button variant="warning">Admin</Button></LinkContainer>
            </Container>
        </Navbar>
    )
}

export default Header