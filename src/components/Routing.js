import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoView from '../components/todo/TodoView'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { CREATEPOST, EDITPOST, FAVPOST, INDEX, LOGIN, LOGOUT, PAGENOTFOUND, POST, REGISTER, TODO } from './constant'
import Home from '../layout/Home'
import Post from '../components/post/Post'
import CreatePost from '../components/post/CreatePost'
import FavPost from '../components/post/FavPost'
import EditPost from '../components/post/EditPost'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
import Logout from '../components/auth/Logout'
import ProtectRouting from './ProtectRouting'
import PageNotFound from '../layout/PageNotFound'
const Routing = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path={REGISTER} element={<Register />} />
                <Route path={LOGIN} element={<Login />} />
                <Route path={PAGENOTFOUND} element={<PageNotFound />} />
                <Route element={<ProtectRouting />}>
                    <Route path={INDEX} element={<Home />} exact />
                    <Route path={TODO} element={<TodoView />} />
                    <Route path={CREATEPOST} element={<CreatePost />} />
                    <Route path={POST} element={<Post />} />
                    <Route path={`${EDITPOST}/:id`} element={<EditPost />} />
                    <Route path={FAVPOST} element={<FavPost />} />
                    <Route path={LOGOUT} element={<Logout />} />
                </Route>
            </Routes>
            <Footer />
        </>
    )
}

export default Routing
