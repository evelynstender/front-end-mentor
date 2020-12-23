// import React from "react";
import LazyLoad from 'react-lazyload'
import "./ProfileCard.css";
import ProfilePicture from '../../images/image-victor.jpg'


function ProfileCard() {
    // const ProfilePicture = lazy(() => import("../../images/image-victor.jpg"));
    const profilePictureLoader = () => <div></div>;
    return (
        <div className="wrapper">
            <div className="cardWrapper">
                <div className="cardHeader" />
                <div className="cardBody">
                    {/* <Suspense fallback={profilePictureLoader()}>
                        <img
                            className="profileImg"
                            src={ProfilePicture}
                            alt="profile picture"
                        ></img>
                    </Suspense> */}
                    <LazyLoad once={true} placeholder={profilePictureLoader}>
                        <img
                            className="profileImg"
                            src={ProfilePicture}
                        ></img>
                    </LazyLoad>
                    <div className="userName">
                        Victor Crest <span className="age">26</span>
                    </div>
                    <span className="userCity">London</span>
                </div>
                <div className="cardBottom">
                    <div className="stats">
                        <span>80K</span>
                        <span className="statsTitle">Followers</span>
                    </div>
                    <div className="stats">
                        <span>803K</span>
                        <span className="statsTitle">Likes</span>
                    </div>
                    <div className="stats">
                        <span>1.4K</span>
                        <span className="statsTitle">Photos</span>
                    </div>
                </div>
            </div>
            <div className="attribution">
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    rel="noreferrer"
                >
                    Frontend Mentor
                </a>
                . Coded by{" "}
                <a href="https://evelynstender.com">Evelyn Stender</a>.
            </div>
        </div>
    );
}

export default ProfileCard;
