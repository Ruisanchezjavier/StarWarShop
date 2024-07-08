import React, { useContext } from "react"
import { Context } from "../store/appContext";

import "../../styles/home.css";

import { Banner } from '../component/banner';


export const Home = () => {
	const { store, actions } = useContext(Context);


	return (

		<div className="background">
			
			<Banner />

		</div>
	);
};
