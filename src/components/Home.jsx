import React from 'react'
import LANDING_IMG from './landing.jpg'
const Home = () => {
    return (
        <>
            <div className="home">
                <div className="landing-img">
                    <img src={LANDING_IMG} alt="landing page" />
                </div>
            </div>
        </>
    )
}

export default Home