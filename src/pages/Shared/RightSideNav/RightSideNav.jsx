import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { FaCcDiscover, FaFacebook, FaFire, FaGem, FaGithubSquare, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const {providerLogIn} = useContext(AuthContext);
    //Google Auth Provider
    const googleProvider = new GoogleAuthProvider();

    //Sign with google HandleClick
    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log('Google Sign In:', user);
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log('Google Sign In Error: ', errorMessage);
        })
    }

    return (
        <div className=' p-2 mt-5'>
            <ButtonGroup vertical className='w-100'>
                <Button onClick={handleGoogleSignIn} variant="outline-primary rounded-bottom fw-bold"><span className='me-2'><FcGoogle className='fs-4' /></span> Login With Google</Button>
                <Button variant="outline-secondary rounded-top mt-4 fw-bold"><span className='me-2'><FaGithubSquare className='fs-4 text-dark' /></span> Login With Github</Button>
            </ButtonGroup>
            <div className='mt-4 mb-4'>
                <h4 className='fw-bold'>Find Us On</h4>
                <ListGroup className='mt-2'>
                    <ListGroup.Item className='mt-3 Regular shadow'>
                        <span className='me-2'><FaFacebook className='fs-4' /></span> Cras justo odio</ListGroup.Item>
                    <ListGroup.Item className='mt-3 Regular shadow'>
                        <span className='me-2'><FaYoutube className='fs-4' /></span> Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item className='mt-3 Regular shadow'>
                    <span className='me-2'><FaTwitter className='fs-4' /></span> Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item className='mt-3 Regular shadow'><span className='me-2'><FaWhatsapp className='fs-4' /></span> Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item className='mt-3 Regular shadow'><span className='me-2'><FaCcDiscover className='fs-4' /></span> Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item className='mt-3 Regular shadow'><span className='me-2'><FaFire className='fs-4' /></span> Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item className='mt-3 Regular shadow'><span className='me-2'><FaGem className='fs-4' /></span> Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel />
            </div>
        </div>
    );
};

export default RightSideNav;