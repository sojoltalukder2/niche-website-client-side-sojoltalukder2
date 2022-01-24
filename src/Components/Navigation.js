import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Navigation = () => {
    const { user, handleSignOut } = useAuth();

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <NavLink to="/home" className="navbar-brand fw-bolder fs-3">KEYBOARD HUB</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {
                            user.email ? <Nav className="ms-auto">
                                <NavLink to="/home" className="nav-link fw-bold fs-5">Home</NavLink>
                                <NavLink to="/keyboards" className="nav-link fw-bold fs-5">Keyboards</NavLink>
                                <NavLink to="/dashboard" className="nav-link fw-bold fs-5 ">Dashboard
                                </NavLink>
                                <span className="nav-link fs-5 " style={{ fontFamily: "fantasy", cursor: "not-allowed", userSelect: "none" }}>User: {user.displayName}
                                </span>
                                <button onClick={handleSignOut} className="cta" style={{ marginTop: "-2px" }}>
                                    <span>Log Out</span>
                                </button>
                            </Nav> : <Nav className="ms-auto">
                                <NavLink to="/home" className="nav-link fw-bold fs-5">Home</NavLink>
                                <NavLink to="/keyboards" className="nav-link fw-bold fs-5">Keyboards</NavLink>
                                <NavLink to="/login"><button className="cta" style={{ marginTop: "-2px" }}>
                                    <span>Login</span>
                                </button></NavLink>
                            </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Navigation;