import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom';
import "../../styles/home.css";

export const Battle_of_yavin = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	return (
		<>
        <h1>Battle of Yavin</h1>
        </>
	);
};