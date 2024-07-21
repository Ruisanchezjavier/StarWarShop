import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/Profile.css";
import { StarBackground } from "../../component/StarBackground";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddressAutocomplete } from "../../component/AddressAutocomplete";

export const Profile = () => {
  const { store, actions, setAddress } = useContext(Context);
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address: "",
    profile_picture: "https://via.placeholder.com/150",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = store.token; 
      if (!token) {
        console.error("Token not found");
        return;
      }
      const response = await fetch(`${process.env.BACKEND_URL}api/profile`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify(profile), 
      });
      if (response.ok) {
        
      } else {
        console.error("Error al actualizar perfil", response.status);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  useEffect(() => {
    let authenticate = async () => {
      let result = await actions.authenticate();
      if (result) {
        setProfile(store.userProfile);
      }else{navigate("/signin")}
    };
    authenticate();
  }, []);

  return (
    <div>
      <StarBackground />
        <div className="container-xl px-4 mt-4">
        <nav className="nav nav-borders">
          <Link className="nav-link active" to="/profile">
            Profile
          </Link>
         
          <Link className="nav-link" to="/security">
            Security
          </Link>
        </nav>
    
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="username">
                      Username (how your name will appear to other users on the
                      site)
                    </label>
                    <input
                      className="form-control"
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Enter your username"
                      value={profile.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="firstName">
                        First name
                      </label>
                      <input
                        className="form-control"
                        id="firstName"
                        name="first_name"
                        type="text"
                        placeholder="Enter your first name"
                        value={profile.first_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="lastName">
                        Last name
                      </label>
                      <input
                        className="form-control"
                        id="lastName"
                        name="last_name"
                        type="text"
                        placeholder="Enter your last name"
                        value={profile.last_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="address">
                      Address
                    </label>
                    <AddressAutocomplete onChange={setAddress} />
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="email">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={profile.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <button className="btn btn-primary" type="submit">
                    Save changes
                  </button>
                </form>
                <button
                  className="btn btn-secondary mt-3"
                  onClick={() => {
                    actions.logout();
                    navigate("/signin");
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};