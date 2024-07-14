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
			navigate("/profile")
		}

	}, [store.isLoginSuccessful])

	return (
		<div className="text-center mt-5">
			{(store.token && store.token !== "" && store.token !== undefined) ? (
			  <>
			    <h1>You are logged in</h1>
				<Link to="/profile">
				<button>Go to your invoices</button>
				</Link>
			  </>
			):(
			<>
			<h1>Sign in</h1>
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
				<button onClick={handleClick}>Sign in</button>
			</div>
			</>
             )}
		</div>
	);
};