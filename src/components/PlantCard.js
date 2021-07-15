import React, { useState } from "react";

function PlantCard({ image, name, price }) {
  const [stock, setStock] = useState(true)

  const handleButtonClick = () => {
    setStock(stock => !stock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {stock ? (
        <button 
          className="primary"
          onClick={handleButtonClick}
        >In Stock</button>
      ) : (
        <button
          onClick={handleButtonClick}
        >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
