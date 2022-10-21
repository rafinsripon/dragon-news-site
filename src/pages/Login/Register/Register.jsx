import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,photoURL, email, password)

        //register
        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            setError('');
            navigate('/');
            handleUpdaeUserProfile(name, photoURL);
            handleEmailVeryfication();
            toast.success('Please Veryfy your email address.')
            console.log('Register: ', user);
        })
        .catch(error => {
            setError(error.message);
            console.log('Register Error: ', error)
        })
    }
    //update user profile
    const handleUpdaeUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name, 
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => {
        }).catch((error) => {
            console.log('Update user Profile Error: ', error)
        });
    }

    //email varification
    const handleEmailVeryfication = () => {
        verifyEmail()
        .then(() => {})
        .catch(error => {
            console.log('emailverification Error: ', error)
        })
        
    }

    //terms and condition
    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <Form onSubmit={handleSubmit} className='mt-5 Regular shadow p-5'>
            <Form.Text className="text-muted">
                
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Full Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to='/terms'>Termms & Condition</Link> </>} />
            </Form.Group>
            <Form.Text className="text-danger fw-bold">
                {error}
            </Form.Text>
            <Button disabled={!accepted} className='w-50 py-2 fw-bold' variant="primary" type="submit">
                Register
            </Button>
    </Form>
    );
};

export default Register;