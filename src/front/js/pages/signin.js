// This page will accept a user's email and password
// Create a function in flux which will make a POST request with users info in body
// SUCCESS means:
// 1. The user is already registered and in the database
// 2. Response will include a msg stored in flux store from backend
// 3. Redirect user to /private page

// FAILURE means:
// 1. Response will return a msg stored in flux store
// 2. msg will be displayed on /login page telling the user that the email/password combo does not match
import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const SignIn = () => {
	const navigate = useNavigate()
	const { store, actions } = useContext(Context);
	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let token = sessionStorage.getItem("token");

	const handleClick = async () => {
			actions.login(email, password)
		}

	useEffect(() => {
		if(store.isLoginSuccessful) {
			navigate("/private")
		}

	}, [store.isLoginSuccessful])

	return (
		<div className="text-center mt-5">
			{(store.token && store.token !== "" && store.token !== undefined) ? (
			  <>
			    <h1>You are logged in</h1>
				<Link to="/private">
				<button>Go to your invoices</button>
				</Link>
			  </>
			):(
			<>
			<h1>Login</h1>
			<div>
                {store.signupMessage  || ""}
            </div>
			<div>
				<input 
					type="text" 
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<input 
					type="password" 
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div>
				<button onClick={handleClick}>Login</button>
			</div>
			</>
             )}
		</div>
	);
};