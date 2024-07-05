import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Battlefront = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
        <h1>Battlefront</h1>
        </>
	);
};