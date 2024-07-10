import React, { useContext } from "react"
import { Context } from "../store/appContext";
import { StarBackground } from '../component/StarBackground';

import "../../styles/home.css";

// import { Banner } from '../component/banner';

 
export const Home = () => {
	const { store, actions } = useContext(Context);


	    return (
			<div>
			  <StarBackground />
			  <div style={{ position: 'relative', zIndex: 1 }}>
				<h1>Welcome to My Website</h1>
				<p>This is an example of a star background that moves with the mouse in React.</p>
			  </div>
			</div>
		  );
		};


