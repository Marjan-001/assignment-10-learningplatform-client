import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

import { FaStaylinked, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';

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
                        <Nav className="me-auto ">
                            <Link className="log" to='/'>Home</Link>
                            <Link className="log" to='/courses'>Courses</Link>
                            <Link className="log" to='/faq'>FAQ</Link>
                            <Link className="log" to='/blog'>Blog</Link>

                        </Nav>
                        {/* <Nav className='me-3' >
                            <Link className='log' to='/login'>Login</Link>
                            <Link className='register' to='register'>Register</Link>


                        </Nav> */}

                        <Nav.Link href="#">

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
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px', marginLeft: '10px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }

                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;