import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

import { FaStaylinked } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Button } from 'react-bootstrap';

const Header = () => {
    const { user } = useContext(AuthContext);

    const { logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                <Container>

                    <Navbar >
                        <Container>
                            <Navbar.Brand >
                                <FaStaylinked ></FaStaylinked>
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                    <Navbar.Brand >Code Smashers</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Courses</Nav.Link>
                            <Nav.Link href="#pricing">FAQ</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>

                        </Nav>
                        {/* <Nav className='me-3' >
                            <Link className='log' to='/login'>Login</Link>
                            <Link className='register' to='register'>Register</Link>


                        </Nav> */}

                        <Nav.Link eventKey={2} href="#">

                            {
                                user?.uid ?
                                    <>
                                        <span className='username' href="#">{user?.displayName}</span>
                                        <Button onClick={handleLogOut} className='ms-3' variant="light" >Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='log' to='/login'>Login</Link>
                                        <Link className='register' to='/register'>Register</Link>
                                    </>
                            }

                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;