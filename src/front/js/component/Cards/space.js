import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams } from 'react-router-dom';


export const Space = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	return (
		<>
			<h1>Space</h1>
		</>
	);
};