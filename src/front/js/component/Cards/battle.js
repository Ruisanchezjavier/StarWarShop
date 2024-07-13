import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams } from 'react-router-dom';


export const Battle= () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	return (
		<>
        <h1>Battle </h1>
        </>
	);
};