import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth.action';
import { Redirect } from 'react-router-dom/cjs/react-router-dom'
export const LoginModal = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const userSignin = (e) => {
        e.preventDefault();
        const user = { email, password }
        dispatch(login(user))
    }
    if (auth.authenticate) {
        return <Redirect to={'/dashboard'} />
    }
    return (
        <Modal show={true} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Row>
                            <Col md='12'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Col>
                            <Col md='12'>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary">Sign-up</Button>
                <Button variant="success" type='submit' onClick={userSignin}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}
