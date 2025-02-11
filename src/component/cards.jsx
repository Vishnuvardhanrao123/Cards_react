import React from "react";
import { products } from "../sourceAPI/MainURL";
import "./card.css"; // Import the external CSS

const Card = () => {
  return (
    <div className="card-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.title} />
          <h2 className="card-title">{product.title}</h2>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <p className="card-price">${product.price}</p>
          <p className="card-rating">⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
