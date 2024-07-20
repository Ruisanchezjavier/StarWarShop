import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../store/appContext"
import "../../styles/home.css";
import { StarBackground } from '../component/StarBackground';
import { Nav, Container } from 'react-bootstrap';
import { Character } from "../component/Cards/characterCard";
import { GroundCardList } from "../component/Cards/groundCardList";
import { SpaceCardList } from "../component/Cards/spaceCardList";
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export const CardSet = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  useEffect(() => {
    let authenticate = async () => {
      let result = await actions.authenticate();
      if (result) {
        setProfile(store.userProfile);
      }else{navigate("/signin")}
    };
    authenticate();
  }, []);
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const showDetails = (pcard) => {
    setSelectedProduct(pcard);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };




  return (
    
    <div>
      <div className="container">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">A New Hope</h1>
        </div>
      </div>

      <div className="text-center mt-5">
        <StarBackground />
        
        <Container>
        
          <Nav className="me-auto">
            <Nav.Link href="#ground">Ground</Nav.Link>
            <Nav.Link href="#space">Space</Nav.Link>
            <Nav.Link href="#character">Character</Nav.Link>
            <Nav.Link href="#battle">Battle</Nav.Link>
            <Nav.Link href="#mission">Mission</Nav.Link>
          </Nav>
          
        </Container>
       
      </div>
      <div>

        <div className="container mt-3">
          <Modal show={modalIsOpen} onHide={closeModal} dialogClassName="custom-modal">

            <Modal.Body>
              {selectedProduct && (

                <div className="card-details">
                  <h3>{selectedProduct.name}</h3>
                  <p>Rating: {selectedProduct.rating}</p>
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="img-fluid" />
                  <p>Side: {selectedProduct.side}</p>
                  <p>Rarity: {selectedProduct.rarity}</p>
                  <p>Type: {selectedProduct.type}</p>
                  <p>Points: {selectedProduct.points}</p>
                  <p>Price: ${selectedProduct.price}</p>
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>

              <Button onClick={() => actions.addToCart(selectedProduct)}>Add to Cart</Button>

              <Button variant="secondary" onClick={closeModal}>
                X
              </Button>

            </Modal.Footer>
          </Modal>

          <section id="ground">

            <h2>Ground Cards</h2>
            <GroundCardList showDetails={showDetails} />

          </section>

          <div className="d-flex justify-content-center mt-4">
            <button className="btn-dark btn btn-primary" onClick={scrollToTop}>
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>

          <section id="space">
            <h2>Space Cards</h2>
            <SpaceCardList showDetails={showDetails} />

            <div className="d-flex justify-content-center mt-4">
              <button className="btn-dark btn btn-primary" onClick={scrollToTop}>
                <i className="fas fa-arrow-up"></i>
              </button>
            </div>

          </section>

          <section id="character">
            <h2>Character Cards</h2>
            <Character />

          </section>
          <section id="battle">
            <h2>Battle Cards</h2>

          </section>
          <section id="mission">
            <h2>Mission Cards</h2>

          </section>
        </div>
      </div>
    </div>
  );
};