import React, { useContext } from "react";
import { Context } from "../store/appContext";
import newHope from "../../img/A-New-Hope.jpg";
import "../../styles/home.css";
import "../../styles/shop.css";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  const getButtonLink = () => {
    if (product.name === "BATTLE") {
      return `/battle`;
    } else if (product.name === "GROUND") {
      return `/ground`;
    } else if (product.name === "CHARACTER") {
      return `/character`;
    } 
    else if (product.name === "MISSION") {
      return `/mission`;
    } 
    else {
      return `/space`;
    }
  };
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <Link to={getButtonLink()} className="card-link btn btn-outline-dark mt-auto">
        <img className="card-img-top" src={product.imageUrl} alt={product.name} />
        </Link>
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.name}</h5>
          </div>
        </div>
        {/* <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            
            <Link to={getButtonLink()}  className="btn btn-outline-dark mt-auto">
                view 
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export const CardSet = () => {
  const { store, actions } = useContext(Context);

  const products = [
    {
      id: 1,
      name: "GROUND",
      imageUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/07/A-New-Hope.jpg?q=50&fit=crop&w=1100&h=550&dpr=1.5",
      
    },
    {
      id: 2,
      name: "SPACE",
      imageUrl: "https://images.thedirect.com/media/article_full/attack-of-the-clone-wars-star-wars.jpg?imgeng=/cmpr_60/w_1280",
      
    },
    {
      id: 3,
      name: "CHARACTER",
      imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/56ea9017-f4a6-4c3f-88c2-4570f93b276f/dbqp2n6-93298c76-7be0-486a-a233-112926508b20.jpg/v1/fill/w_1192,h_670,q_70,strp/battle_of_yavin_by_digitalart4fun_dbqp2n6-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzU2ZWE5MDE3LWY0YTYtNGMzZi04OGMyLTQ1NzBmOTNiMjc2ZlwvZGJxcDJuNi05MzI5OGM3Ni03YmUwLTQ4NmEtYTIzMy0xMTI5MjY1MDhiMjAuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jTkZUYqDnpRN2L7NfwpxSwcfhw4ViBow3jL5FjGixcg",

    },
    {
      id:4,
      name: "BATTLE",
      imageUrl: "https://image.api.playstation.com/vulcan/img/rnd/202010/1520/JWxOXo2iB9ZV15vDbs5W5fRr.jpg?w=5000&thumb=false",
    },

    {
      id:5,
      name: "MISSION",
      imageUrl: "https://image.api.playstation.com/vulcan/img/rnd/202010/1520/JWxOXo2iB9ZV15vDbs5W5fRr.jpg?w=5000&thumb=false",
    },
	
    // add more products as needed
  ];

  return (
    <>
	<div className="shop-brackgound">
      <header className="bg-negro py-2">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">A New Hope Catalog</h1>
            {/* <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p> */}
          </div>
        </div>
      </header>
	  <div className="text-center mt-5">
    {/* <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle bg-dark bg-gradient" type="button" data-bs-toggle="dropdown" aria-expanded="false">
       Categories
      </button>
      <ul className="dropdown-menu bg-dark">
        <li>
        <button type="button" className="btn btn-rosado mx-5">category</button>
        </li>
        <li className="dropdown-divider"></li>
        <li>
        <button type="button" className="btn btn-verde-claro mx-5">category</button>
        </li>
        <li className="dropdown-divider"></li>
        <li>
        <button type="button" className="btn btn-azul-claro mx-5" href="#">category</button>
        </li>
      </ul>
    </div> */}
	 
	 
	  
	  </div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-5 justify-content-center">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
	  </div>
    </>
  );
};