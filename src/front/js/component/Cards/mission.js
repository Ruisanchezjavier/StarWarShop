import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams } from 'react-router-dom';


export const Mission= () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	return (
		<>
        <h1>Mission</h1>
        </>
	);
};