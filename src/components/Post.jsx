import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PostCard from './PostCard'

const Post = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={3}>
                        <PostCard />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Post