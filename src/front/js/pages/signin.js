import React, { useState } from 'react'
import "../../styles/signin.css"

 export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Both fields are required');
            return;
        }

        console.log('Email:',  email);
        console.log('Password:', password)
    };

    return (
        <div className="sign-in">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>

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
        <button type="submit">Log In</button>
            </form>
        </div>
    );