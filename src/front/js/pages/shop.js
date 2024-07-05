import React, { useContext } from "react";
import { Context } from "../store/appContext";
import newHope from "../../img/A-New-Hope.jpg";
import "../../styles/home.css";
import "../../styles/shop.css";


const ProductCard = ({ product }) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {product.isSale && (
          <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
            {/* Sale */}
          </div>
        )}
        <img className="card-img-top" src={product.imageUrl} alt={product.name} />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.name}</h5>
            {product.rating && (
              <div className="d-flex justify-content-center small text-warning mb-2">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className={`bi-star${index < product.rating ? '-fill' : ''}`}></div>
                ))}
              </div>
            )}
            {product.oldPrice && <span className="text-muted text-decoration-line-through">${product.oldPrice}</span>}
            <span>{product.price}</span>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button className="btn btn-outline-dark mt-auto" href="#">
              {product.isViewOption ? "View options" : "View options"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Shop = () => {
  const { store, actions } = useContext(Context);

  const products = [
    {
      name: "A New Hope",
      imageUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/07/A-New-Hope.jpg?q=50&fit=crop&w=1100&h=550&dpr=1.5",
      isViewOption: true,
    },
    {
      name: "Attack of the Clones",
      imageUrl: "https://images.thedirect.com/media/article_full/attack-of-the-clone-wars-star-wars.jpg?imgeng=/cmpr_60/w_1280",
      isSale: true,
    },
    {
      name: "Battle of Yavin",
      imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/56ea9017-f4a6-4c3f-88c2-4570f93b276f/dbqp2n6-93298c76-7be0-486a-a233-112926508b20.jpg/v1/fill/w_1192,h_670,q_70,strp/battle_of_yavin_by_digitalart4fun_dbqp2n6-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzU2ZWE5MDE3LWY0YTYtNGMzZi04OGMyLTQ1NzBmOTNiMjc2ZlwvZGJxcDJuNi05MzI5OGM3Ni03YmUwLTQ4NmEtYTIzMy0xMTI5MjY1MDhiMjAuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jTkZUYqDnpRN2L7NfwpxSwcfhw4ViBow3jL5FjGixcg",
      isSale: true,
    },
    {
      name: "Battlefront",
      imageUrl: "https://image.api.playstation.com/vulcan/img/rnd/202010/1520/JWxOXo2iB9ZV15vDbs5W5fRr.jpg?w=5000&thumb=false",
      rating: 5,
    },
	
    // add more products as needed
  ];

  return (
    <>
	<div className="shop-brackgound">
      <header className="bg-negro py-2">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Star Wars Catalog</h1>
            {/* <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p> */}
          </div>
        </div>
      </header>
	  <div className="text-center mt-5">
	  <button type="button" className="btn btn-rosado mx-5">category</button>
	  <button type="button" className="btn btn-verde-claro mx-5">category</button>
	  <button type="button" className="btn btn-azul-claro mx-5">category</button>
	  </div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
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