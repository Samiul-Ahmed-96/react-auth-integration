import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Header from '../Header/Header';

const Register = () => {
    return (
        <div>
            <Container>
            <Header></Header>
            <h2>Register</h2>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <button variant="primary" type="submit">
              Register
            </button>
          </Form>
            </Container>
        </div>
    );
};

export default Register;