import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import '../../styles/Profile.css';

export const Profile = () => {
  const { store, actions } = useContext(Context)
  const [profile, setProfile] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    profilePhoto: 'https://via.placeholder.com/150'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Profile updated:', profile);
  };

  useEffect(() => {
    let authenticate = async () => {
      let result = await actions.authenticate()
      if (result) {
        navigate("/signin")
      }
    }
    authenticate()
  }, []);
  return (
    <div className="profile-container">
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="profile-photo">
          <img src={profile.profilePhoto} alt="Profile" />
          <input
            type="file"
            name="profilePhoto"
            onChange={(e) => handleChange({ target: { name: 'profilePhoto', value: URL.createObjectURL(e.target.files[0]) } })}
          />
        </div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleChange}
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}