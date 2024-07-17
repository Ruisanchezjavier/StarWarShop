import React, { useState, useContext } from "react"
import { Context } from "../store/appContext";
import { StarBackground } from '../component/StarBackground';
import "../../styles/home.css";
import { Banner } from '../component/banner';



export const Home = () => {
	  
	
	    return (
			<div className="content">
			 <section>
			  <Banner />
			  <StarBackground />
			  <div style={{ position: 'relative', zIndex: 1 }}>
			  </div>
		</section>
			
			</div>
			
		  );
		};

