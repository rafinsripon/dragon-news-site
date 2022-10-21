import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const {signIn, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        //Loogin
        signIn(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            setError('');
            if(user.emailVerified){
                navigate(from, { replace: true });
            }else{
                toast.error('Email is not varify, Please varify your email')
            }
            console.log('Login: ', user);
        })
        .catch(error => {
            setError(error.message);
            console.log('Login Error: ', error)
        })
        .finally(() => {
            setLoading(false);
        })
    }

    return (
        <Form onSubmit={handleSubmit} className='mt-5 Regular shadow p-5'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Text className="text-danger fw-bold">
                {error}
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Button variant="link" className='fw-bold'>Forget Password</Button>
            </Form.Group>
            <Button className='w-50 py-2 fw-bold' variant="primary" type="submit">
                Submit
            </Button>
    </Form>
    );
};

export default Login;