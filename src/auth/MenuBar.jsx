import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../context/GLobalContext';

const MenuBar = () => {

    const { user,setUser } = useContext(GlobalContext)


    const logout=()=>{
        setUser(false)
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavLink to="/">React-App</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {user ?
                            <Nav className="me-auto">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/modal">Modal</NavLink>
                                <NavLink to="/counter">Counter App</NavLink>
                                <NavLink to="/todo">Todo</NavLink>
                                <NavLink to="/table">Table</NavLink>
                                <NavLink to=""><span onClick={logout} style={{color:'crimson'}}>Logout</span></NavLink>
                            </Nav>
                        :<Nav  className='me-right'>
                            <NavLink to="/signin">SignIn</NavLink>
                            <NavLink to="/signup">SignUp</NavLink>
                        </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default MenuBar;
