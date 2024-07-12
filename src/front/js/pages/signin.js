import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";

 export const SignIn = () => {
    const navigate = useNavigate()
	const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const [error, setError] = useState("");

  	const handleClick = async () => {
			actions.login(email, password)
		}

    useEffect(() => {
        if(store.isLoginSuccessful) {
            navigate("/Profile")
        }

    }, [store.isLoginSuccessful])

    return (
        <div className="sign-in">
            <h2>Sign In</h2>
            <form>

            <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
        <label>Password:</label>
        <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}

        />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button onClick={handleClick}>Login</button>
            </form>
        </div>
    );
};