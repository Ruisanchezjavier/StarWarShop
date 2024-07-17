import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../store/appContext';
import { Link, useNavigate } from 'react-router-dom';
import '../../../styles/Profile.css';
import { StarBackground } from '../../component/StarBackground';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Profile = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
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
            // navigate("/signin")
          }
        }
        authenticate()
      }, []);

    return (
        <div>
            <StarBackground />
            <div className="container-xl px-4 mt-4">
                <nav className="nav nav-borders">
                    <Link className="nav-link active" to="/profile">Profile</Link>
                    <Link className="nav-link" to="/billing">Billing</Link>
                    <Link className="nav-link" to="/security">Security</Link>
                </nav>
                <hr className="mt-0 mb-4" />
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card mb-4 mb-xl-0">
                            <div className="card-header">Profile Picture</div>
                            <div className="card-body text-center">
                                <img className="img-account-profile rounded-circle mb-2" src={profile.profilePhoto} alt="Profile" />
                                <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                                <button className="btn btn-primary" type="button">Upload new image</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="card mb-4">
                            <div className="card-header">Account Details</div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="username">Username (how your name will appear to other users on the site)</label>
                                        <input className="form-control" id="username" name="username" type="text" placeholder="Enter your username" value={profile.username} onChange={handleChange} />
                                    </div>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="firstName">First name</label>
                                            <input className="form-control" id="firstName" name="firstName" type="text" placeholder="Enter your first name" value={profile.firstName} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="lastName">Last name</label>
                                            <input className="form-control" id="lastName" name="lastName" type="text" placeholder="Enter your last name" value={profile.lastName} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="address">Address</label>
                                        <input className="form-control" id="address" name="address" type="text" placeholder="Enter your address" value={profile.address} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="email">Email address</label>
                                        <input className="form-control" id="email" name="email" type="email" placeholder="Enter your email address" value={profile.email} onChange={handleChange} />
                                    </div>
                                    <button className="btn btn-primary" type="submit">Save changes</button>
                                </form>
                                <button className="btn btn-secondary mt-3" onClick={() => { actions.logout(); navigate('/signin'); }}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
