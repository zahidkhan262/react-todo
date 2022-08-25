import React, { useState } from 'react'
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { logoutForm } from '../redux/action/authAction';
import { FAVPOST, INDEX, LOGIN, POST, REGISTER, TODO } from '../router/constant';
import './Layout.css'
const Header = () => {
    const isAuthUser = useSelector((state) => state.auth.user)
    const favPosts = useSelector((state) => state.post.favouritePost);
    const [signToggle, setSignToggle] = useState(false)
    const dispatch = useDispatch()
    return (
        <>
            <header>
                <Container>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className="logo fs-4 text-secondary"><NavLink to={INDEX}>LOGO</NavLink></div>
                        <nav>
                            {
                                isAuthUser && isAuthUser
                                    ?
                                    <>
                                        <li><NavLink to={INDEX}>Home</NavLink></li>
                                        <li><NavLink to={TODO}>CRUD</NavLink></li>
                                        <li> <NavLink to={POST}>Post</NavLink></li>
                                        {
                                            favPosts && favPosts.length
                                                ?
                                                <li> <NavLink to={FAVPOST}>Favourite</NavLink></li>
                                                : null
                                        }
                                        <div className='dropdown-profile' onClick={() => setSignToggle((prev) => !prev)}>
                                            <span className='profile-logo' title={isAuthUser.firstname + isAuthUser.lastname.charAt(0).toUpperCase()}>
                                                {isAuthUser.firstname.charAt(0).toUpperCase()}
                                                {isAuthUser.lastname.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                    </>
                                    :
                                    <div className='dropdown-profile'>{isAuthUser ? "Profile" : "Get Started"}
                                        <div className="dropdown-content">
                                            <li><NavLink to={REGISTER}>Register</NavLink></li>
                                            <li><NavLink to={LOGIN}>Login</NavLink></li>
                                        </div>
                                    </div>

                            }
                            {isAuthUser
                                &&
                                <li style={signToggle ? { display: 'none' } : null}><FontAwesomeIcon icon={faSignOut} className='logout-icon' onClick={() => dispatch(logoutForm())} /></li>
                            }
                        </nav>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header
