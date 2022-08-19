import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import PROFILE_PIC from '../images/profile.jpg';
import POST_PIC from '../images/post2.jfif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { remFavPost } from '../../redux/action/postAction';

const FavPost = () => {
    const favPosts = useSelector((state) => state.post.favouritePost);
    const dispatch = useDispatch();


    const FavouritePost = favPosts && favPosts.map((fav, idx) => {
        const { fullname, designation, companyAddress, companyName } = fav

        return (
            <React.Fragment key={idx}>
                <Col md={6}>
                    <div className="cards">
                        <div className="cards-header d-flex align-items-center justify-content-between">
                            <div className="cards-user-detail d-flex align-items-center justify-content-start">
                                <div className="cards-user-profile"><Image src={PROFILE_PIC} alt="profile" /></div>
                                <div className="cards-user-info text-white ">
                                    <h6 className='mt-2 mb-0'>{fullname}</h6>
                                    <p className='mb-0'>{designation}</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faHeartBroken} className="heart-icon" onClick={() => dispatch(remFavPost(idx))} />
                        </div>
                        <div className="cards-body">
                            <div className="cards-img"><Image src={POST_PIC} alt="post" /></div>
                        </div>
                        <div className='cards-footer d-flex justify-content-between align-items-center '>
                            <div className="cards-about">
                                <p>{companyName}</p>
                                <p>{companyAddress}</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </React.Fragment>
        )
    })

    return (
        <>
            <Container>
                <Row>
                    {
                        FavouritePost
                    }

                </Row>
            </Container>
        </>
    )
}

export default FavPost