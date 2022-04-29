import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar bg='dark' variant='dark' className='header' expand="lg">
                <Container>
                    <Navbar.Brand className='fw-bold' href="#home">Bikers</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='fw-bold text-white' href="#home" as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link className='fw-bold text-white' href="#link" as={Link} to='/inventory'>Inventory</Nav.Link>
                            <Nav.Link className='fw-bold text-white' href="#link" as={Link} to='/blogs'>Blogs</Nav.Link>
                            <Nav.Link className='fw-bold text-white' href="#link" as={Link} to='/Login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;