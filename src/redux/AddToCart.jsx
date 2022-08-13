import { faCartPlus, faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import './Cart.css'

const AddToCart = () => {
    const cartData = useSelector((state) => state.cart.carts)
    console.log(cartData, "my cart");

    const renderCart = cartData?.map((cartItem) => {
        return (
            <React.Fragment key={cartItem.id}>
                <div className='my-2 d-flex justify-content-between align-items-center cart-item'>
                    <div className="cart-img">
                        <img src={cartItem.imgPath} alt="img" />
                    </div>

                    <div className="cart-detail d-flex align-items-center">
                        <div className="detail-left">
                            <h4 className="title">{cartItem.name}</h4>
                            <p className='desc-text'>{cartItem.description}</p>
                            <h5><strong>Brand</strong> : {cartItem.brand}</h5>
                        </div>

                    </div>
                    <div className="cart-action">
                        <Button className='mx-1 btn-secondary rounded py-1 px-2'>-</Button>
                        <Button className='mx-1 btn-primary rounded py-1 px-2'>{cartItem.quantity}</Button>
                        <Button className='mx-1 btn-secondary py-1 px-2 rounded'>+</Button>
                    </div>
                    <div className="detail-right">
                        <h5 className="title"><strong>Price :</strong> {cartItem.price}</h5>
                        <div className="remove-btn">
                            <Button className='m-1 btn-danger col-lg-12 rounded'>Remove</Button>
                        </div>
                    </div>




                </div>
            </React.Fragment>
        )
    })

    return (
        <>
            <Container className='mt-2'>
                {renderCart}
            </Container>
        </>
    )
}

export default AddToCart