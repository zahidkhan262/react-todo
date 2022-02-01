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
                            <Nav.Link><NavLink exact to="/">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/modal">Modal</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/todo">Todo</NavLink></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink to="/signin">SignIn</NavLink></Nav.Link>
                           <Nav.Link><NavLink to="/signup">SignUp</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default MenuBar;
