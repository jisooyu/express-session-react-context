import React, { useContext } from 'react';
import { userContext } from '../context/AuthContext';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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

            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Slow Coding</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#prague">Baby Jesus of Prague</Nav.Link>
                        <Nav.Link href="#fatima">Fatima Mother Mary</Nav.Link>
                        <Nav.Link href="#prayer">Prayer to Mother Mary</Nav.Link>
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
                </Container>
            </Navbar>

        </>
    );
}

export default Header;