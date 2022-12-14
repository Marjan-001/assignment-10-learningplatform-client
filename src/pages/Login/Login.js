import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const { providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {

        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const gitProvider = new GithubAuthProvider()

    const handleGitSignIn = () => {

        providerLogin(gitProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))

    }


    return (
        <div className='login-page'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="success" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
            <Button onClick={handleGoogleSignIn} className='google-btn' variant="success" type="submit">
                <FaGoogle className='me-3' ></FaGoogle>Sign in with Google
            </Button>
            <Button onClick={handleGitSignIn} className='google-btn ms-3' variant="success" type="submit">
                <FaGithub className='me-3' ></FaGithub>Sign in with Github
            </Button>

        </div>
    );
};

export default Login;