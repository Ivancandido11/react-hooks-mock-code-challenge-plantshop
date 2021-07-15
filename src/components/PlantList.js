import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantArray }) {
  return (
    <ul className="cards">{
      plantArray.map(plant => 
        <PlantCard 
          image={plant.image}
          key={plant.id}
          name={plant.name}
          price={plant.price}
        />
      )
    }</ul>
  );
}

export default PlantList;
