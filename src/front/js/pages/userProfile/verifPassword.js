
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export const VerifPassword = ({ setAccess }) => {
  const { store, actions } = useContext(Context);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    let success = await actions.verifyPassword(password);
    if (success) {
      setAccess("verified");
    } else {
      setMessage("Invalid password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="small mb-1" htmlFor="currentPassword">
          Current Password
        </label>
        <input
          className="form-control"
          id="currentPassword"
          name="current_password"
          type="password"
          placeholder="Enter current password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {message && (
          <p className="text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3">
            {message}
          </p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Save
      </button>
    </form>
  );
};