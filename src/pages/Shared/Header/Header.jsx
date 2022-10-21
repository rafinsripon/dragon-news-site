import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Extrahome from '../../Home/Extrahome';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const {user, logOut } = useContext(AuthContext);
    // console.log(user);

    //Handle log Out
    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => {
            console.log('Logout Error: ', error);
        })
    }
    return (
        <div className=''>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='Small shadow border-bottom py-2'>
                <Container>
                    <Link to="/" className='fs-3 fw-bold text-decoration-none'>Dragon<span className='text-danger'>News</span></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-5 " style={{fontFamily: 'Syne'}}>
                        <Nav.Link href="#allnews" className='fs-5 fw-bold'>All News</Nav.Link>
                        <Nav.Link href="#category" className='fs-5 fw-bold'>Category</Nav.Link>
                    </Nav>
                    <Nav>
                        <div className='d-flex align-items-center' >
                            {
                                user?.uid ? <>
                                <span className='fw-bold fs-5 text-secondary'>{user?.displayName}</span>
                                <Button onClick={handleLogOut} className='ms-4 fs-5 fw-bold text-secondary' variant="light">Log Out</Button>
                                </>
                                :
                                <>
                                <Link className='px-4 text-decoration-none text-secondary fw-bold' to='/login'>Log In</Link>
                                <Link className='px-4 text-decoration-none text-secondary fw-bold' to='/register'>Register</Link>
                                </>
                            }
                        </div>

                        <Nav.Link eventKey={2} href="#memes">
                        {user?.photoURL ?
                        <Image style={{height: '40px'}} roundedCircle src={user?.photoURL}></Image>
                        :
                        <FaUser className='fs-3'/>
                        }
                        </Nav.Link>
                    </Nav>
                    <div className="d-lg-none">
                        <LeftSideNav />
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;