
import React from 'react';
import { ProductCard } from '../component/ProductCard.js';

import ANH001 from '../../img/A New Hope/ANH001_Admiral_Motti_A.png';
import ANH002 from '../../img/A New Hope/ANH002_Beru_Lars_A.png';
import ANH006 from '../../img/A New Hope/ANH006_Dannik_Jerriko_A.png';
import ANH007 from '../../img/A New Hope/ANH007_Darth_Vader_A.png';
import ANH010 from '../../img/A New Hope/ANH010_Dianoga_A.png';
import ANH013 from '../../img/A New Hope/ANH013_EG-6_Power_Droid.png';
import ANH014 from '../../img/A New Hope/ANH014_Elite_Stormtrooper_Squad.png';
import ANH015 from '../../img/A New Hope/ANH015_Figrin_D_an_A.png';
import ANH016 from '../../img/A New Hope/ANH016_Greedo_A.png';
import ANH019 from '../../img/A New Hope/ANH019_Imperial_Navy_Helmsman.png';


export const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Admiral Motti',
      description: 'A New Hope',
      price: 14.00,
      imageUrl: ANH001,
      reviews: [
        { user: 'Alice', comment: 'Great product!', rating: 0 },
        { user: 'Bob', comment: 'Not bad.', rating: 1 }
      ],
    },

    {
      id: 2,
      name: 'Product 2',
      description: 'This is product 2.',
      price: 22.00,
      imageUrl: ANH002,
      reviews: [
        { user: 'Tom', comment: 'Great product!', rating: 2 },
        { user: 'Mike', comment: 'Not bad.', rating: 5 }
      ],
    },
    {
      id: 3,
      name: 'Product 2',
      description: 'This is product 2.',
      price: 19.00,
      imageUrl: ANH006,
      reviews: [
        { user: 'Tom', comment: 'Great product!', rating: 0 },
        { user: 'Mike', comment: 'Not bad.', rating: 0 }
      ],
    },
    {
      id: 4,
      name: 'Product 2',
      description: 'This is product 2.',
      price: 36.00,
      imageUrl: ANH007,
      reviews: [
        { user: 'Tom', comment: 'Great product!', rating: 4 },
        { user: 'Mike', comment: 'Not bad.', rating: 1 }
      ],
    },
    {
      id: 5,
      name: 'Product 2',
      description: 'This is product 2.',
      price: 48.00,
      imageUrl: ANH010,
      reviews: [
        { user: 'Tom', comment: 'Great product!', rating: 4 },
        { user: 'Mike', comment: 'Not bad.', rating: 1 }
      ],
    },
    {
      id: 6,
      name: 'Product 2',
      description: 'This is product 2.',
      price: 66.00,
      imageUrl: ANH013,
      reviews: [
        { user: 'Tom', comment: 'Great product!', rating: 4 },
        { user: 'Mike', comment: 'Not bad.', rating: 1 }
      ],
    },
    {
      id: 7,
      name: 'Product 2',
      description: 'This is product 2.',
      price: 84.00,
      imageUrl: ANH014,
      reviews: [
        { user: 'Tom', comment: 'Great product!', rating: 4 },
        { user: 'Mike', comment: 'Not bad.', rating: 1 }
      ],
    },
    {
      id: 8,
      name: 'Product 2',
      description: 'This is product 2.',
      price: 29.00,
      imageUrl: ANH015,
      reviews: [
        { user: 'Tom', comment: 'Great product!', rating: 4 },
        { user: 'Mike', comment: 'Not bad.', rating: 1 }
      ],
    },
    {
      id: 9,
      name: 'Product 2',
      description: 'This is product 2.',
      price: 88.00,
      imageUrl: ANH016,
      reviews: [
        { user: 'Tom', comment: 'Great product!', rating: 4 },
        { user: 'Mike', comment: 'Not bad.', rating: 1 }
      ],
    },
    {
      id: 10,
      name: 'Product 2',
      description: 'This is product 2.',
      price: 71.00,
      imageUrl: ANH019,
      reviews: [
        { user: 'Tom', comment: 'Great product!', rating: 4 },
        { user: 'Mike', comment: 'Not bad.', rating: 1 }
      ],
    },
  
  ];

  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

