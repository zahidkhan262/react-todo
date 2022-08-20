import React, { useEffect, useState } from 'react'
import './Post.css';
import { faEllipsisVertical, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Image, OverlayTrigger, Popover } from 'react-bootstrap';
import { dltPost, favPost } from '../../redux/action/postAction';
import { useDispatch, useSelector } from 'react-redux';
import PROFILE_PIC from '../images/profile.jpg'
import POST_PIC from '../images/post2.jfif'
// import { useNavigate } from 'react-router-dom';
const PostCard = ({ post, id }) => {

  const { fullname, designation, companyAddress, companyName } = post
  const [isLikePost, setIsLikePost] = useState(false);
  const [isFav, setIsFav] = useState(false);
  // console.log(post, "postcard")
  const dispatch = useDispatch();
  // const navigate = useNavigate()

  // redux
  const favPosts = useSelector((state) => state.post.favouritePost);

  useEffect(() => {
    favPosts && favPosts.map((p, i) => {
      if (i === id) {
        setIsFav(true)
      }
    })
  }, [favPosts]);

  // delete post
  const deletePost = (id) => {
    dispatch(dltPost(id))
  }

  // fav post
  const addFav = (post) => {
    dispatch(favPost(post))
  }

  const popover = (
    <Popover id="popover-basic" className='pop-overs'>
      <Popover.Header onClick={() => deletePost(id)}>Delete</Popover.Header>
      <Popover.Header>Edit</Popover.Header>
      <Popover.Header onClick={() => !isFav ? addFav(post) : undefined}>Favourite</Popover.Header>
    </Popover>
  );


  return (
    <>
      <Col md={3}>
        <div className="cards">
          <div className="cards-header d-flex align-items-center justify-content-between">
            <div className="cards-user-detail d-flex align-items-center justify-content-start">
              <div className="cards-user-profile"><Image src={PROFILE_PIC} alt="profile" /></div>
              <div className="cards-user-info text-white ">
                <h6 className='mt-2 mb-0'>{fullname}</h6>
                <p className='mb-0'>{designation}</p>
              </div>
            </div>
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
              <FontAwesomeIcon icon={faEllipsisVertical} className="elipsis-icon" />
            </OverlayTrigger>
          </div>
          <div className="cards-body">
            <div className="cards-img"><Image src='' alt="post" /></div>
          </div>
          <div className='cards-footer d-flex justify-content-between align-items-center '>
            <div className="cards-about">
              <p>{companyName}</p>
              <p>{companyAddress}</p>
            </div>
            <FontAwesomeIcon icon={faHeart} style={isLikePost ? { color: 'crimson' } : { color: 'gray' }} className='heart-icon' />
          </div>
        </div>
      </Col>
    </>
  )
}

export default PostCard
