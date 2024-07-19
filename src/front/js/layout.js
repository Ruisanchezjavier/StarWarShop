import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import { Profile } from "./pages/userProfile/Profile.js";
import { Billing } from "./pages/userProfile/Billing.js";
import { Security } from "./pages/userProfile/Security.js";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Shipping } from "./pages/shipping";
import { Payment } from "./pages/payment.js";
import { CardSet } from "./pages/CardSet";
import { Signup } from "./pages/signup";
import { SignIn } from "./pages/signin";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { AboutUs } from "./pages/aboutus.js";
import { Cart } from "./component/ShoppingCart/components/Cart.js";



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<SignIn />} path="/signin" />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<Profile />} path="/Profile" />
                        <Route element={<Billing />} path="/Billing" />
                        <Route element={<Security />} path="/Security" />
                        <Route element={<Payment />} path="/payment" />
                        <Route element={<Shipping />} path="/shipping" />
                        <Route element={<CardSet />} path="/CardSet" />
                        <Route element={<AboutUs />} path="/aboutus" />
                        <Route element={<Cart />} path="/Cart" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);