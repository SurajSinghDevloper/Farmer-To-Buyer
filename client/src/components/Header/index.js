import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { SignupModal } from '../../components/SignupModal/Index';
import { LoginModal } from '../../components/LoginModal';

export const Header = (props) => {
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleSignupClick = () => {
        setShowSignupModal(true);
    };

    const handleLoginClick = () => {
        setShowLoginModal(true);
    };

    const handleCloseModals = () => {
        setShowSignupModal(false);
        setShowLoginModal(false);
    };
    return (
        <>
            <Navbar bg="grey" expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="/">Krishi-Sahyog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ml-5">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/market">Market Rate</Nav.Link>
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
            {showSignupModal && (
                <SignupModal handleClose={handleCloseModals} />
            )}
            {showLoginModal && (
                <LoginModal handleClose={handleCloseModals} />
            )}
        </>
    );
};
