import React, { useContext } from "react"
import { Context } from "../store/appContext";
import { StarBackground } from '../component/StarBackground';
import "../../styles/home.css";

import { Banner } from '../component/banner';


export const Home = () => {
	const { store, actions } = useContext(Context);


	    return (
			<div>
			  <Banner />
			  <StarBackground />
			  <div style={{ position: 'relative', zIndex: 1 }}>
				<h1>aaaaaaaaaaaaaaaaaa</h1>
				
			  </div>
			</div>
		  );
		};


