import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import heart from '../../../images/heart.png'
const Header = () => {
    const[user] = useAuthState(auth)

    const handleSignOut =() => {
        signOut(auth);
    }



    return (
        <>


            <Navbar collapseOnSelect expand="lg" sticky='top' bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link}to="/">
                        <img height={30} src={heart} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services ">Services</Nav.Link>
                            <Nav.Link href="home#doctor">Doctor</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            
                            {   
                              
                                  user ?
                                  <button className='btn btn-primary text-white' onClick={handleSignOut}>Sign Out</button>
                                  : 
                                <Nav.Link as={Link} to="login">
                               Login 
                            </Nav.Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <br />
            <header>
                <h1 className='text-primary mt-3 mb-5 fs-1 fw-bolder'>Cardio Health</h1>
            </header>
        </>
    );
};

export default Header;