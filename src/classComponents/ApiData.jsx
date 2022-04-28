import React, { Component } from 'react'
import { Box, Card, Container, Modal, Typography } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
let profileIMG = 'data:image/jpeg;base64,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'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default class ApiData extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            open: false,

        }
    }


    fetchUserData = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`).then((response) => response.json())
            .then((data) => {
                this.setState({ user: data })
                console.log(this.state.user)
            });
    }
    componentDidMount() {
        this.fetchUserData()
    }
    handleOpen = (idx) => {
        this.setState({ open: true })

    };
    handleClose = () => this.setState({ open: false });


    render() {
        return (
            <>
                <Container>
                    <Row className='center'>
                        {this.state.user.map((ele, idx) => {
                            return (
                                <Col md={3} sm={6} key={idx}>
                                    <Card className='myCard p-2' onClick={this.handleOpen}>
                                        <div className="user_profile mb-2">
                                            <img src={profileIMG} alt="profile" />
                                        </div>
                                        <p style={{ fontSize: "13px", fontWeight: 400 }}>{ele.username}</p>
                                    </Card>
                                </Col>
                            )
                        })
                        }
                    </Row>
                    <p >open</p>
                    <Modal
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <div className="myProModal" >
                            <Card className='myCard p-2' onClick={this.handleOpen} sx={style}>
                                <div className="user_profile mb-2">
                                    <img src={profileIMG} alt="profile" />
                                </div>
                                <p style={{ fontSize: "13px", fontWeight: 400 }}>zahid khan</p>
                            </Card>
                        </div>

                    </Modal>
                </Container>
            </>
        )
    }
}
