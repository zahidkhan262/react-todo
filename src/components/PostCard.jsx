import React from 'react'
import './Post.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const PostCard = () => {
  return (
    <>
      <div className="cards">
        <div className="cards-header d-flex align-items-center justify-content-start">
          <div className="cards-user-profile"></div>
          <div className="cards-user-info text-white ">
            <h6 className='mt-2 mb-0'>Zahid khan</h6>
            <p className='mb-0'>React Developer</p>
          </div>
        </div>
        <div className="cards-body">
          <div className="cards-img"></div>
        </div>
        <div className='cards-footer d-flex justify-content-between align-items-center '>
          <div className="cards-about">
            <p>Chetu India Pvt ltd.</p>
            <p>Noida UP Inida</p>
          </div>
          <FontAwesomeIcon icon={faHeart} className='card-heart' />
        </div>
      </div>

    </>
  )
}

export default PostCard
