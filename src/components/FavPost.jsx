import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { remFavPost } from '../../redux/action/postAction';

const FavPost = () => {
    const favPosts = useSelector((state) => state.post.favouritePost);
    const dispatch = useDispatch();


    const FavouritePost = favPosts && favPosts.map((fav, idx) => {
        const { fullname, designation, companyAddress, companyName, imgUrl } = fav

        return (
            <React.Fragment key={idx}>
                <div className="fav-cards my-2 d-flex align-items-center">
                    <div className="fav-img">
                        <Image src={imgUrl} alt="post" />
                    </div>
                    <div className="fav-info">
                        <h5><strong>Name : </strong>{fullname}</h5>
                        <h5><strong>Designation : </strong>{designation}</h5>
                        <h5><strong>Company Name : </strong>{companyName}</h5>
                        <h5><strong>Company Address : </strong>{companyAddress}</h5>
                        <div className="un-fav">
                            <Button className='col-md-12 btn-info text-white' onClick={() => dispatch(remFavPost(idx))}>
                                Remove Fav
                                <FontAwesomeIcon icon={faHeartBroken} className='heart-icon fs-6 mx-2' /></Button>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    })

    return (
        <>
            <Container className='fixHeigth'>
                {
                    FavouritePost
                }
            </Container>
        </>
    )
}

export default FavPost
