import React from 'react';
import '../../styles/aboutus.css'; // Adjust the path to your CSS file

export const AboutUs = () => {
  return (
    <div className="row">
      <div className="column">
        <img src="https://media.licdn.com/dms/image/D5603AQHmqvkws_NlLQ/profile-displayphoto-shrink_200_200/0/1718461131404?e=1726099200&v=beta&t=-Av9bP1cQlaunnjw2A4q57cfaRyMRaY-271Y6pCYHKE" style={{ width: '100%' }} />
      </div>
      <div className="column">
        <img src="https://avatars.githubusercontent.com/u/162181740?s=48&v=4t" style={{ width: '100%' }} />
      </div>
      <div className="column">
        <img src="img_mountains.jpg" alt="Mountains" style={{ width: '100%' }} />
      </div>
    </div>
  );
};

