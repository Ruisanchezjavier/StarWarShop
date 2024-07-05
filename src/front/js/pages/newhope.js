import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const New_hope= () => {
	const { store, actions } = useContext(Context);

	return (
		<>
        <h1>A New Hope</h1>
        </>
	);
};