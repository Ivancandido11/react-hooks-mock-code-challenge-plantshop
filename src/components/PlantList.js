import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ onDeleteClick, onPriceChangeSubmit, plantArray }) {
  return (
    <ul className="cards">{
      plantArray.map(plant => 
        <PlantCard
          id={plant.id}
          image={plant.image}
          key={plant.id}
          name={plant.name}
          onDeleteClick={onDeleteClick}
          onPriceChangeSubmit={onPriceChangeSubmit}
          price={plant.price}
        />
      )
    }</ul>
  );
}

export default PlantList;
