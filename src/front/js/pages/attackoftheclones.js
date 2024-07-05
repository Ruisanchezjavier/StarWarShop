import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Attack_of_the_clones = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
        <h1>Attack of the Clones</h1>
        </>
	);
};