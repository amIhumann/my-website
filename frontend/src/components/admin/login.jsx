import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import {Card,Container,Form,Button } from 'react-bootstrap'
import './admin.css'
import { GlobalState } from '../../index'
import Swal from "sweetalert2";

const Login = () => {
    const axios = useContext(GlobalState).axiosRequest;
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const Auth = async (e) => {
        e.preventDefault()
        try {
            await axios.post('login', {
                username: username,
                password: password
            }, { withCredentials: true })
            .then((response) => {
                if(response.data.accessToken && response.status === 200) {
                    navigate('/admin')
                    Swal.fire(
                        "Success",
                        "Anda berhasil Login",
                        "success"
                    )
                }
            })
            .catch((error) =>
              Swal.fire(
                error.response.statusText,
                error.response.data.message,
                "error"
              )
            );
        } catch (error) {
            if (error.response){
                Swal.fire(
                    "Warning",
                    error.message,
                    'error'
                );
            }
        }
    }
    return (
        <Container>
            <Card className="card__admin">
                <Card.Body className="card__body" style={{margin:'20px'}}>
                    <Form onSubmit={Auth}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="*****" value={password} onChange={(e) => setPassword(e.target.value)}/>
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