import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom';
import "../../styles/home.css";

export const New_hope= () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	return (
		<>
        <h1>A New Hope</h1>
        </>
	);
};