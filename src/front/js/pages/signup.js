import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { StarBackground } from '../component/StarBackground';
import { useParams } from "react-router-dom";



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
      <form onSubmit={e => e.preventDefault()}>
        <div className="vh-100 bg-negro">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black bg-blanco" style={{ borderRadius: '25px' }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <div className="signup-page text-center">
                          <div className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4-5 text-warning">
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

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw text-warning"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                placeholder="Enter first name"
                                size="30"
                                value={first_name}
                                onChange={e => setFirst_name(e.target.value)}
                                required
                              />
                              <label className="form-label" htmlFor="form3Example1c"></label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw text-warning"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                placeholder="Enter last name"
                                size="30"
                                value={last_name}
                                onChange={e => setLast_name(e.target.value)}
                                required
                              />
                              <label className="form-label" htmlFor="form3Example1c"></label>
                            </div>
                          </div>


                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw text-warning"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                placeholder="Enter username"
                                size="30"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                              />
                              <label className="form-label" htmlFor="form3Example1c"></label>
                            </div>
                          </div>
                          
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-map fa-lg me-3 fa-fw text-warning"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                              <input
                                type="address"
                                placeholder="Enter your address"
                                size="30"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                                required
                              />
                              <label className="form-label" htmlFor="form3Example1c"></label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw text-warning"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                placeholder="Enter email"
                                size="30"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                              />
                              <label className="form-label" htmlFor="form3Example3c"></label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw text-warning"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                placeholder="Enter password"
                                size="30"
                                minLength="6"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                              />
                              <label className="form-label" htmlFor="form3Example4c"></label>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 mt-4">
                            <button
                              onClick={handleClick}
                              className="btn btn-primary btn-lg"
                            >Sign Up</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;