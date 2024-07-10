import React, { useContext } from "react"
import { Context } from "../store/appContext";

import { BackgroundVideo } from '../component/BackgroundVideo';

import "../../styles/home.css";

// import { Banner } from '../component/banner';


export const Home = () => {
	const { store, actions } = useContext(Context);


	return (

		<div>

			{/* <Banner /> */}
			<BackgroundVideo />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1>Welcome to My Website</h1>
        <p>This is an example of a video background in React.</p>
      </div>

		</div>
	);
};
