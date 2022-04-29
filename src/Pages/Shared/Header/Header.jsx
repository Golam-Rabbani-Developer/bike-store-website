import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import img from "../../../images/logo/header-logo (1).png"
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseinit';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <Navbar bg='dark' variant='dark' className='header' expand="lg">
                <Container>
                    <Navbar.Brand className='fw-bold' href="#home">
                        <span className='logo-text'>Bikers</span>
                        <img style={{ width: "80px" }} src={img} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='fw-bold text-white' href="#home" as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link className='fw-bold text-white' href="#link" as={Link} to='/inventory'>Inventory</Nav.Link>
                            <Nav.Link className='fw-bold text-white' href="#link" as={Link} to='/blogs'>Blogs</Nav.Link>
                            {
                                user ?
                                    <Nav.Link onClick={() => signOut(auth)} className='fw-bold text-white btn-danger btn'>LogOut</Nav.Link>
                                    :
                                    <Nav.Link className='fw-bold text-white global-btn rounded-2 px-3' href="#link" as={Link} to='/Login'>Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;