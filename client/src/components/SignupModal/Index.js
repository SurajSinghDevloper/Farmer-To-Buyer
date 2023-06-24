import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions/user.action'
export const SignupModal = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [mobileError, setMobileError] = useState('');
    // const auth = useSelector(state => state.auth);
    // const user = useSelector(state => state.user);
    const handleMobileChange = (e) => {
        const inputValue = e.target.value;
        setContactNumber(inputValue);

        if (!/^\d+$/.test(inputValue)) {
            setMobileError('Please enter a valid mobile number.');
        } else {
            setMobileError('');
        }
    };
    const dispatch = useDispatch();
    const userSignup = (e) => {
        e.preventDefault();
        if (mobileError) {
            return;
        }
        const user = { firstName, lastName, contactNumber, email, password }
        console.log("👉👉👉 ~~ file: Index.js:34 ~~ handleSubmit ~~ user:", user)
        dispatch(signup(user))
    };

    return (
        <Modal show={true} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={userSignup}>
                    <Form.Group className="mb-3">
                        <Row>
                            <Col md='6'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control value={firstName} type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="Enter Your First Name" />
                            </Col>
                            <Col md='6'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control value={lastName} type="text" onChange={(e) => setLastName(e.target.value)} placeholder="Enter Your Last Name" />
                            </Col>
                            <Col md='12'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Col>
                            <Col md='6'>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Mobile No."
                                        value={contactNumber}
                                        onChange={handleMobileChange}
                                        isInvalid={!!mobileError}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">{mobileError}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md='6'>
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
                <Button variant="primary">Login</Button>
                <Button variant="success" type='submit' onClick={userSignup}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
};
