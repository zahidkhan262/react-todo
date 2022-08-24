import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { logoutForm } from '../redux/action/authAction';
import { FAVPOST, INDEX, LOGIN, POST, REGISTER, TODO } from '../router/constant';
import './Layout.css'
const Header = () => {
    const user = useSelector((state) => state.auth.user)
    console.log(user, "logggg")
    const favPosts = useSelector((state) => state.post.favouritePost);
    const dispatch = useDispatch()
    return (
        <>
            <header className='d-flex justify-content-between align-items-center'>
                <div className="logo fs-4 text-secondary"><NavLink to={INDEX}>LOGO</NavLink></div>
                <nav>
                    <li>
                        <NavLink to={INDEX}>Home</NavLink></li>
                    <li><NavLink to={TODO}>CRUD</NavLink></li>
                    <li> <NavLink to={POST}>Post</NavLink></li>
                    {
                        favPosts && favPosts.length
                            ?
                            <li> <NavLink to={FAVPOST}>Favourite</NavLink></li>
                            : null
                    }
                    <div className='dropdown-profile'>Profile
                        <div className="dropdown-content">
                            <li><NavLink to={REGISTER}>Register</NavLink></li>
                            {
                                user && user
                                    ?
                                    <li><NavLink to='' onClick={() => dispatch(logoutForm())}>Logout</NavLink></li>
                                    :
                                    <li><NavLink to={LOGIN}>Login</NavLink></li>
                            }
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header