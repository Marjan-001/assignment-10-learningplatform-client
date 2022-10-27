import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const handleCheckOut = () => {
        alert('Checkout done')
    }
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>

                    <Form.Control type="email" placeholder="Enter email" value={user?.email} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="name" value={user?.displayName} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control type="text" placeholder="name" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button onClick={handleCheckOut} variant="primary" type="submit">
                    Checkout
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;