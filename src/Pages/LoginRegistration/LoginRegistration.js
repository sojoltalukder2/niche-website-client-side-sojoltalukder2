import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import Navigation from '../../Components/Navigation';
import useAuth from '../../Hooks/useAuth';

const LoginRegistration = () => {
    const [isSignup, setIsSignup] = useState(false);
    const { setEmail, setPassword, error, setUser, setError, handleEmailSignIn, setIsLoading, handleCreateNewUser, verifyEmail, updateUserInfo, setUserName, setPhoto, createNewUserInDatabase } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePassChange = (event) => {
        setPassword(event.target.value)
    }
    const handleNameChange = (event) => {
        setUserName(event.target.value)
    }
    const handlePhotoChange = (event) => {
        setPhoto(event.target.value)
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();

        handleEmailSignIn()
            .then((userCredential) => {
                setUser(userCredential.user);
                setError('');
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.code);
            })
            .finally(() => setIsLoading(false))
    }

    const handleSignUpSubmit = (event) => {
        event.preventDefault();

        handleCreateNewUser()
            .then((userCredential) => {
                setUser(userCredential.user);
                setError('');
                verifyEmail();
                updateUserInfo();
                createNewUserInDatabase();
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.code);
            });
    }

    return (
        <div>
            <Navigation />
            <Container>
                <Row>
                    {
                        isSignup ? <Col className="mx-auto border shadow p-3 mt-5" xs={11} md={7} lg={6} xl={5} xxl={4}>
                            <h2 className="fw-bold pb-0">Sign Up</h2>
                            <hr className="w-25 mt-0 mb-4" />

                            <Form onSubmit={handleSignUpSubmit}>
                                <Row className="row gx-2">
                                    <Col xs={6}>
                                        <Form.Group className="mb-3" controlId="formBasicText">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control onBlur={handleNameChange} type="text" placeholder="Full Name" required />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group className="mb-3" controlId="formBasicText">
                                            <Form.Label>Profile Image</Form.Label>
                                            <Form.Control onBlur={handlePhotoChange} type="text" placeholder="Image URL (optional)" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control onBlur={handleEmailChange} required type="email" placeholder="Enter Email" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control onBlur={handlePassChange} required type="password" placeholder="Password" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Text className="text-muted">
                                    Already Have An Account? <strong onClick={() => { setIsSignup(false); setError('') }}><u style={{ cursor: "pointer" }}>Login.</u></strong>
                                </Form.Text> <br /> <br />
                                <p className="text-danger fw-bold">{error}</p>

                                <button className="btn btn-dark" type="submit">
                                    Sign Up
                                </button>
                            </Form>
                        </Col> : <Col className="mx-auto border shadow p-3 mt-5" xs={11} md={7} lg={6} xl={5} xxl={4}>


                            <h2 className="fw-bold pb-0">Login</h2>
                            <hr className="w-25 mt-0 mb-4" />

                            <Form onSubmit={handleLoginSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onBlur={handlePassChange} type="password" placeholder="Password" required minLength="6" />
                                </Form.Group>

                                <Form.Text className="text-muted">
                                    Don't Have An Account? <strong onClick={() => { setIsSignup(true); setError('') }}><u style={{ cursor: "pointer" }}>Signup.</u></strong>
                                </Form.Text> <br /> <br />
                                <p className="text-danger fw-bold">{error}</p>



                                <button className="btn btn-dark" type="submit">
                                    Log in
                                </button>
                            </Form>
                        </Col>
                    }
                </Row>
            </Container>
        </div>
    );
};

export default LoginRegistration;