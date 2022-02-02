import React from 'react';
import {Navbar, Container,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MenuBar = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/">React-App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink  to="/">Home</NavLink>
                            <NavLink to="/modal">Modal</NavLink>
                            <NavLink to="/todo">Todo</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink to="/signin">SignIn</NavLink>
                           <NavLink to="/signup">SignUp</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default MenuBar;
