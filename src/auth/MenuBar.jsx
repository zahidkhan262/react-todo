import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../context/GLobalContext';

const MenuBar = () => {

    const { user } = useContext(GlobalContext)


    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/">React-App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {user &&
                            <Nav className="me-auto">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/modal">Modal</NavLink>
                                <NavLink to="/todo">Todo</NavLink>
                                <NavLink to="/counter">Counter App</NavLink>
                            </Nav>
                        }
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
