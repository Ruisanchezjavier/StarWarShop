import React, { useState, useContext } from "react"
import { Context } from "../store/appContext";
import { StarBackground } from '../component/StarBackground';
import "../../styles/home.css";
import { Navbar}  from '../component/navbar';
import { Banner } from '../component/banner';
import { GroundCardList } from "../component/Cards/groundCardList";
import { gCards } from "../component/Cards/gCards";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const [cart, setCart] = useState([]);
	
  const addToCart = (pcard) => {
    setCart([...cart, pcard]);
  };

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

