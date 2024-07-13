import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams } from 'react-router-dom';


export const Character = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	return (
		<>
      mmdnfdf
        </>
	);
};