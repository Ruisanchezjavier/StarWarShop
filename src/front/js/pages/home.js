import React from "react"
import { StarBackground } from '../component/StarBackground';
import "../../styles/home.css";
import { Banner } from '../component/banner';



export const Home = () => {
	  
	  return (
			<div className="content">
			 <section>
			  <Banner />
			  <StarBackground />
			 
		</section>
			
			</div>
			
		  );
		};

