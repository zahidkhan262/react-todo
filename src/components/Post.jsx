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
