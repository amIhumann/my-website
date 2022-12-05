import React from 'react'
import {Card,Container,Form,Button } from 'react-bootstrap'
import './admin.css'

const Login = () => {
  return (
    <Container>
        <Card className="card__admin">
            <Card.Body className="card__body" style={{margin:'20px'}}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="*****" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default Login