import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../store/appContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../../styles/Profile.css';
import { StarBackground } from '../../component/StarBackground';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Profile = () => {
    const { store, actions } = useContext(Context)
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
          navigate("/signin")
        }
      }
    //   authenticate()
    }, []);

return (
        <div>
            <StarBackground />
            <div className="container-xl px-4 mt-4">
                <nav className="nav nav-borders">
                    <Link className="nav-link active" to="/profile" target="__blank">Profile</Link>
                    <Link className="nav-link" to="/billing" target="__blank">Billing</Link>
                    <Link className="nav-link" to="/security" target="__blank">Security</Link>
                </nav>
                <hr className="mt-0 mb-4" />
                
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card mb-4 mb-xl-0">
                            <div className="card-header">Profile Picture</div>
                            <div className="card-body text-center">
                                <img className="img-account-profile rounded-circle mb-2" src="https://via.placeholder.com/150" alt="" />
                                <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                                <button className="btn btn-primary" type="button">Upload new image</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="card mb-4">
                            <div className="card-header">Account Details</div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputUsername">Username (how your name will appear to other users on the site)</label>
                                        <input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" value={profile.username || ''} onChange={handleChange} />
                                    </div>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                                            <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value={profile.firstName || ''} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                                            <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value={profile.lastName || ''} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputOrgName">Address</label>
                                        <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your address" value={profile.org_name || ''} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                            <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value={profile.email || ''} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <button className="btn btn-primary" type="button" onClick={handleSubmit}>Save changes</button>
                                </form>
                                <Link to='/signin'>
                                    <button onClick={() => { actions.logout() }}>Logout</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}