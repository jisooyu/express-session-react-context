import React, { useContext } from 'react';
import { userContext } from '../context/AuthContext';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    const userObject = useContext(userContext);

    const googleLogin = () => {
        window.location.href = '/auth/google';
    };

    const googleLogout = async () => {
        try {
            await axios.post('/api/logout');
            window.location.href = '/';
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Navbar className='mb-2' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Slow Coding</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Prayers" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#prague">Baby Jesus</NavDropdown.Item>
                                <NavDropdown.Item href="#fatima">Fatima</NavDropdown.Item>
                                <NavDropdown.Item href="#prayer">Rosary</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {userObject ? (
                                <Nav.Link onClick={googleLogout}>Log Out</Nav.Link>
                            ) : (
                                <li>
                                    <Nav.Link onClick={googleLogin}>Login With Google</Nav.Link>
                                </li>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;