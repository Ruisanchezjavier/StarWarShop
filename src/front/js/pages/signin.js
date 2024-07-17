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
		<div className="text-center mt-5">
			{(store.token && store.token !== "" && store.token !== undefined) ? (
				<>
					<h1>You are logged in</h1>
					<Link to="/profile">
						<button>Go to your invoices</button>
					</Link>
				</>
			) : (
				<>
					<h1>Sign in</h1>
					<div>
						{store.signupMessage || ""}
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