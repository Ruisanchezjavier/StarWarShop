import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom';
import "../../styles/home.css";
import "../../styles/cards.css";
import ProductCard from "../component/ProductCard"

export const Ground = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const products = [
    {
      id: 1,
      imageUrl: "https://mktg-assets.tcgplayer.com/content/star-wars-unlimited/2024/05/01/SWCCG-Jabba-min.jpg",
      name: "Card title",
      price: 36
    },

	{
		id: 2,
		imageUrl: "https://mktg-assets.tcgplayer.com/content/star-wars-unlimited/2024/05/01/SWCCG-Jabba-min.jpg",
		name: "Card title",
		price: 36
	  },

	  {
		id: 3,
		imageUrl: "https://mktg-assets.tcgplayer.com/content/star-wars-unlimited/2024/05/01/SWCCG-Jabba-min.jpg",
		name: "Card title",
		price: 36
	  },

	  {
		id: 4,
		imageUrl: "https://mktg-assets.tcgplayer.com/content/star-wars-unlimited/2024/05/01/SWCCG-Jabba-min.jpg",
		name: "Card title",
		price: 36
	  },

	  {
		id: 5,
		imageUrl: "https://mktg-assets.tcgplayer.com/content/star-wars-unlimited/2024/05/01/SWCCG-Jabba-min.jpg",
		name: "Card title",
		price: 36
	  },

	  {
		id: 6,
		imageUrl: "https://mktg-assets.tcgplayer.com/content/star-wars-unlimited/2024/05/01/SWCCG-Jabba-min.jpg",
		name: "Card title",
		price: 36
	  },

	  {
		id: 7,
		imageUrl: "https://mktg-assets.tcgplayer.com/content/star-wars-unlimited/2024/05/01/SWCCG-Jabba-min.jpg",
		name: "Card title",
		price: 36
	  },

	  {
		id: 8,
		imageUrl: "https://mktg-assets.tcgplayer.com/content/star-wars-unlimited/2024/05/01/SWCCG-Jabba-min.jpg",
		name: "Card title",
		price: 36
	  },
    // Add more products as needed
  ];

  const getButtonLink = (productId) => `/product/${productId}`;

  return (
	<div className="x">
		<div>
			<h1 className="text-warning">GROUND</h1>
		</div>
    <div className="row mx-5">
      {products.map(product => (
        <div className="col-2 mt-2 mx-5 card" key={product.id}>
          <div className="card">
            <img src={product.imageUrl} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price}</p>
              <a href={getButtonLink(product.id)} className="btn btn-primary">View</a>
            </div>
          </div>
        </div>
      ))}
    </div>
	</div>
  );
};