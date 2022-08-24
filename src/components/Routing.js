import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoView from '../components/todo/TodoView'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { CREATEPOST, EDITPOST, FAVPOST, INDEX, LOGIN, LOGOUT, POST, REGISTER, TODO } from './constant'
import Home from '../layout/Home'
import Post from '../components/post/Post'
import CreatePost from '../components/post/CreatePost'
import FavPost from '../components/post/FavPost'
import EditPost from '../components/post/EditPost'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
import Logout from '../components/auth/Logout'
const Routing = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path={INDEX} element={<Home />} />
                <Route path={TODO} element={<TodoView />} />
                <Route path={CREATEPOST} element={<CreatePost />} />
                <Route path={POST} element={<Post />} />
                <Route path={`${EDITPOST}/:id`} element={<EditPost />} />
                <Route path={FAVPOST} element={<FavPost />} />
                <Route path={REGISTER} element={<Register />} />
                <Route path={LOGOUT} element={<Logout />} />
                <Route path={LOGIN} element={<Login />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Routing