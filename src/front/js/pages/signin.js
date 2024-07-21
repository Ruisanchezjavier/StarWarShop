import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { StarBackground } from '../component/StarBackground';
import "../../styles/signin.css";

export const SignIn = () => {
	const navigate = useNavigate()
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let token = sessionStorage.getItem("token");

	const handleClick = async () => {
		let result = await actions.login(email, password)
		if (result) {
			navigate("/profile")
		}
	}

	useEffect(() => {
		let authenticate = async () => {
			let result = await actions.authenticate()
			if (result) {
				navigate("/profile")
			}
		}
		authenticate()
	}, []);
	return (
		<div className="auth-container">
					
				<StarBackground />
					<h2>Sign in</h2>
					<div>
						{store.signupMessage || ""}
					</div>
					<div className="input-group">
					<label htmlFor="name">Email: </label>
					
						<input
							type="text"
							placeholder=""
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					
					<div className="input-group">
					<label htmlFor="password">Password: </label>
					
						<input
							type="password"
							placeholder=""
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div>
						<button type="submit" className="btn-primary" onClick={handleClick}>Sign in</button>
						</div>
						
						<div className="or">
						--- OR ---
						</div>
						<div>
						<Link to="/signup"><button type="submit" className="btn btn-success">Sign Up</button></Link>
					</div>
				
				
		</div>
		
		
		
	);
};