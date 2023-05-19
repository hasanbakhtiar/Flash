import { useContext } from 'react';
import {Container,Button} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { ModeContext } from '../context/ModeContext';
import { LangContext } from '../context/LangContext';
import { ProductConext } from '../context/ProductContext';

function Header() {
    const [mode,setMode] = useContext(ModeContext);
    const [lang,setLang] = useContext(LangContext);
    const [data] = useContext(ProductConext)
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">

                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <Nav.Link>Product count:{data.length}</Nav.Link>
                        
                    </Nav>
                    <Button variant="warning" onClick={
                          ()=>{
                            mode==="light"?setMode('dark'):setMode('light');
                            mode==="light"?localStorage.setItem('mode','dark'):localStorage.setItem('mode','light');
                          }
                    }>{mode==="light"?"Dark":"Light"}</Button>
                    <Button className='ms-3' variant='success' onClick={()=>{
                          lang==="AZ"?setLang('EN'):setLang('AZ');
                    }}>{lang}</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;