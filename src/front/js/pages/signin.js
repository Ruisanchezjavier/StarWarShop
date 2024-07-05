import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Signin = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
        <h1>Sign In</h1>
        </>
	);
};
