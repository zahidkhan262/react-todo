import { Card } from '@mui/material';
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class Cards extends Component {
    render() {
        return (
            <Col md={3}>
                <Card className='myCard  m-2 p-2'>
                    <h6>{ }</h6>
                </Card>
            </Col>
        )
    }
}
