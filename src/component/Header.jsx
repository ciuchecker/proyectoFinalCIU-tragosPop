import '../App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';



const Header = ({ titulo }) => {
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <div as={Link} to="/" className='contenedorTitulo'>
                        <p className='fuenteTitulo'>{titulo}</p>
                    </div>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    
                        <Nav className="justify-content-end">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/Compras">Compras</Nav.Link>
                            <Nav.Link as={Link} to="/Consignas">Consignas</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                <Outlet>
                </Outlet>
            </section>
        </div>
    );
}

export default Header;