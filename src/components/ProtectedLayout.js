import React from 'react'
import { Route } from 'react-router'
import CreatePost from '../components/post/CreatePost'
import EditPost from '../components/post/EditPost'
import FavPost from '../components/post/FavPost'
import Post from '../components/post/Post'
import TodoView from '../components/todo/TodoView'
import Home from '../layout/Home'
import { CREATEPOST, EDITPOST, FAVPOST, INDEX, POST, TODO } from './constant'

const ProtectedLayout = () => {
    return (
        <>
            <Route path={INDEX} element={<Home />} />
            <Route path={TODO} element={<TodoView />} />
            <Route path={CREATEPOST} element={<CreatePost />} />
            <Route path={POST} element={<Post />} />
            <Route path={`${EDITPOST}/:id`} element={<EditPost />} />
            <Route path={FAVPOST} element={<FavPost />} />
        </>
    )
}

export default ProtectedLayout