import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { StarBackground } from '../component/StarBackground';
import { useParams } from "react-router-dom";
import { AddressAutocomplete } from "../component/AddressAutocomplete";

import "../../styles/signup.css";


export const Signup = () => {
    
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const params = useParams()
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const handleClick = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username || !email || !password || !first_name || !last_name || !address) {
      setErrorMessage('All fields are required');
      return;
    }
    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email format');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters');
      return;
    }

    setErrorMessage('');

    let result = await actions.signUp(email, password, username, first_name, last_name, address);
    if (result) {
      navigate("/signin")
    } else {
      alert("There's been an error while attempting to signup, please try agin later...")
    }
  };

  useEffect(() => {
    let authenticate = async () => {

      let result = await actions.authenticate()
      if (result) {
        navigate("/profile")
      }
    }
    authenticate()

  }, [params]);

  return (
    <>
    
    <StarBackground />
      
         <div className="auth-container1">
       
        <form onSubmit={e => e.preventDefault()}>
             <div className="card1">
             <div className="card-body1">
             <div className="signup-page text-center">
             <div className="text-center">
              <h1>Sign Up</h1>
               </div>

               <div>
           {store.signupMessage || ""}
               </div>
                           
                            {errorMessage && (
                              <div className="alert alert-danger" role="alert">
                                {errorMessage}
                              </div>
                            )}
                            
                            
                            <div className="input-group1">
                             <i className="fas fa-user fa-lg me-3 fa-fw text-warning"></i>
                             <input
                                  type="text"
                                  placeholder="Enter first name"
                                  size="30"
                                  value={first_name}
                                  onChange={e => setFirst_name(e.target.value)}
                                  required
                                />
                                </div>
                                                     
                            <div className="input-group1">
                            <i className="fas fa-user fa-lg me-3 fa-fw text-warning"></i>
                               <input
                                  type="text"
                                  placeholder="Enter last name"
                                  size="30"
                                  value={last_name}
                                  onChange={e => setLast_name(e.target.value)}
                                  required
                                />
                                
                              </div>
                          
                            <div className="input-group1">
                            <i className="fas fa-user fa-lg me-3 fa-fw text-warning"></i>
                                <input
                                  type="text"
                                  placeholder="Enter username"
                                  size="30"
                                  value={username}
                                  onChange={e => setUsername(e.target.value)}
                                  required
                                />
                               
                              </div>
                          
                           
                            <div className="input-group1">
                            <i className="fas fa-map fa-lg me-3 fa-fw text-warning"></i>
                            <AddressAutocomplete onChange={setAddress} />
                           
                              </div>
                           
                           
                            <div className="input-group1">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw text-warning"></i>
                                <input
                                  type="email"
                                  placeholder="Enter email"
                                  size="30"
                                  value={email}
                                  onChange={e => setEmail(e.target.value)}
                                  required
                                />
                               
                              </div>
                           
                           
                            <div className="input-group1">
                            <i className="fas fa-lock fa-lg me-3 fa-fw text-warning"></i>
                                <input
                                  type="password"
                                  placeholder="Enter password"
                                  size="30"
                                  minLength="6"
                                  value={password}
                                  onChange={e => setPassword(e.target.value)}
                                  required
                                />
                                
                              </div>
                                                       
                              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 mt-4">
                              <button
                                onClick={handleClick}
                                className="btn-primary1 btn-lg"
                              >Sign Up</button>
                            </div>
                          </div>
                        </div>
                        </div>
                       
                                             
                     
        </form>
        </div>
     </>   
);
}

