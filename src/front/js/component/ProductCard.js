import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, getButtonLink }) => {
  return (
    <div className="col mb-6">
      <div className="card h-100">
        <Link to={getButtonLink()} className="card-link">
          <img className="card-img-top" src={product.imageUrl} alt={product.name} />
        </Link>
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;