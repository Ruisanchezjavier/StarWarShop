import React, { useState, useContext } from "react";
import "../../styles/home.css";
import { StarBackground } from '../component/StarBackground';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Character } from "../component/Cards/character";
import { GroundCardList } from "../component/Cards/groundCardList";
import { gCards } from "../component/Cards/gCards";
import { Modal, Button } from 'react-bootstrap';

console.log(Modal);


export const CardSet = () => {
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
        <Navbar bg="light" expand="lg">

          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#ground">Ground</Nav.Link>
                <Nav.Link href="#space">Space</Nav.Link>
                <Nav.Link href="#character">Character</Nav.Link>
                <Nav.Link href="#battle">Battle</Nav.Link>
                <Nav.Link href="#mission">Mission</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
      <div>

        <div className="container mt-5">
        <Modal show={modalIsOpen} onHide={closeModal}>
          {/* <Modal.Header closeButton>
            <Modal.Title>Product Details</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
        {selectedProduct && (
           <div className="card-details">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <h3>{selectedProduct.name}</h3>
              <p>Rating: {selectedProduct.rating}</p>
              <p>Side: {selectedProduct.side}</p>
              <p>Rarity: {selectedProduct.rarity}</p>
              <p>Type: {selectedProduct.type}</p>
              <p>Points: {selectedProduct.points}</p>
              <p>Price: ${selectedProduct.price}</p>
            </div>
          )}
 </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>  
        
          <section id="ground">

            <h2>Ground Cards</h2>
            <GroundCardList gCards={gCards} showDetails={showDetails} />
          </section>
        
          <section id="space">
            <h2>Space Cards</h2>

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