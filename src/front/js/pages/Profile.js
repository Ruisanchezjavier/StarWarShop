import React, { useState } from 'react';
import '../../styles/Profile.css';

export const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'aaaaaaa',
    email: 'aaaaaaa@aaaaaaa.com',
    bio: 'Aaaaaaaaa',
    avatar: 'https://via.placeholder.com/150'
  });

  return (
    <div className="profile-container">
      <img src={profile.avatar} alt="Avatar" className="profile-avatar" />
      <h1>{profile.name}</h1>
      <p>Email: {profile.email}</p>
      <p>{profile.bio}</p>
    </div>
  );
}


