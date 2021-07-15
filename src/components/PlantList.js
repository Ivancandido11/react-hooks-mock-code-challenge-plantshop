import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ onPriceChangeSubmit, plantArray }) {
  return (
    <ul className="cards">{
      plantArray.map(plant => 
        <PlantCard
          id={plant.id}
          image={plant.image}
          key={plant.id}
          name={plant.name}
          onPriceChangeSubmit={onPriceChangeSubmit}
          price={plant.price}
        />
      )
    }</ul>
  );
}

export default PlantList;
