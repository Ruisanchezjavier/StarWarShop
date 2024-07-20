//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Modal from 'react-modal';


//import your own components
import Layout from "./layout";

//render your react application

ReactDOM.render(<Layout />, document.querySelector("#app"));
Modal.setAppElement('#app');