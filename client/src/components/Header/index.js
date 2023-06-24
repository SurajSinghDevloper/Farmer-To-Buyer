import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { SignupModal } from '../../components/SignupModal/Index';
import { LoginModal } from '../../components/LoginModal';
import { useSelector } from 'react-redux';

export const Header = (props) => {
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const auth = useSelector(state => state.auth);
    const handleSignupClick = () => {
        setShowSignupModal(true);
    };
    const handleLoginClick = () => {
        setShowLoginModal(true);
    };

    const handleCloseSignupModal = () => {
        setShowSignupModal(false);
    };
    const isUserLoggedIn = () => {
        if (auth.authenticate) {
            return (
                <Button className="btn btn-secondary" onClick={handleLoginClick}>
                    Login
                </Button>
            )
        }
    }
    return (
        <>
            <Navbar bg="grey" expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#home">Krishi-Sahyog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ml-5">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <Nav.Link href="#link">Market Rate</Nav.Link>
                            <Button className="btn btn-secondary" onClick={handleSignupClick}>
                                Sign-up
                            </Button>&nbsp;&nbsp;
                            <Button className="btn btn-secondary" onClick={handleLoginClick}>
                                Login
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {showSignupModal && <SignupModal handleClose={handleCloseSignupModal} />}
            {showLoginModal && <LoginModal handleClose={handleCloseSignupModal} />}
        </>
    );
};
