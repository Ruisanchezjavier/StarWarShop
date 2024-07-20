import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/banner.css';
import { useNavigate } from "react-router-dom";

export const Banner = () => {
  
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
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
    <div className="p-5 text-center bg-image rounded-3 jumbotron-bg">

      <div className="mask">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <Link to="/cardSet"><a data-mdb-ripple-init className="btn btn-outline-light btn-lg" href="/cardSet" role="button">Shop now</a></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
