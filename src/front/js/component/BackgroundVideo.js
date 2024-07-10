import React from 'react';
// import '../../styles/BackgroundVideo.css';

export const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video className="background-video" autoPlay loop muted>
        <source src="../..img/loopSpace.webm" type="" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};




