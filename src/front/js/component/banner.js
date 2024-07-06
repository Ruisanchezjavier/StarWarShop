import React from 'react';
import Bannar from "./styles/banner.class"

 export const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Welcome to Our Store</h1>
                <p>Find the best products here!</p>
                <button className="shop-now-button">Shop Now</button>
            </div>
        </div>
    );
};