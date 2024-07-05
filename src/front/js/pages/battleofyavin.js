import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Battle_of_yavin = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
        <h1>Battle of Yavin</h1>
        </>
	);
};