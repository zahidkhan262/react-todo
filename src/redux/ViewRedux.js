import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
import myImg from '../components/iphone.jpg'
import { addToCart } from './action'

const ViewRedux = () => {
    const cartData = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    console.log(cartData, "zahid")
    return (
        <>
            <h1>Redux add to cart</h1>
            <div className="d-flex justify-content-center">
                <Card className='my-card mb-3 p-1 d-flex justify-content-center align-items-center'>
                    <Card.Img src={myImg} alt="image" style={{ width: '20%' }} />
                    <Card.Body>
                        <div className="p-2">
                            <p>20000</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, itaque?</p>
                        <div className="text-center">
                            <Button className='text-center' onClick={() => dispatch(addToCart(5))}>Add Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default ViewRedux