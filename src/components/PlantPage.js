import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plantArray, onDeleteClick, onNewPlantSubmit, onPlantSearch, onPriceChangeSubmit }) {
  return (
    <main>
      <NewPlantForm onNewPlantSubmit={onNewPlantSubmit} />
      <Search onPlantSearch={onPlantSearch} />
      <PlantList
        onDeleteClick={onDeleteClick}
        onPriceChangeSubmit={onPriceChangeSubmit}
        plantArray={plantArray} 
      />
    </main>
  );
}

export default PlantPage;
