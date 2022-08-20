import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import PostCard from './PostCard'

const Post = () => {
    const { posts } = useSelector((state) => state.post)
    // console.log(posts, "getpost")
    return (
        <>
            <Container className='fixHeigth'>
                <Row>
                    {
                        posts && posts?.map((post, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <PostCard post={post} id={idx} />
                                </React.Fragment>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Post


import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { CREATEPOST } from '../../router/constant'
import PostCard from './PostCard'

const Post = () => {
    const { posts } = useSelector((state) => state.post)
    const getImage = useSelector((state) => state.post.posts);
    console.log(getImage, "//////////")
    console.log(posts[2], "getpost")
    const navigate = useNavigate()
    return (
        <>
            <Container className='fixHeigth'>
                <Row>
                    <Col md={{ span: '2', offset: '10' }} className='mt-3'>
                        <Button onClick={() => navigate(CREATEPOST)} className='fs-4'>Create Post<FontAwesomeIcon icon={faPlus} className='mx-1' /></Button>
                    </Col>
                    {
                        posts && posts?.map((post, idx) => {
                            console.log(post)
                            return (
                                <React.Fragment key={idx}>
                                    <PostCard post={post} id={idx} />
                                </React.Fragment>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Post
