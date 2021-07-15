import React, { useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantArray, setPlantArray] = useState([])
  const [search, setSearch] = useState("")
  const API = "http://localhost:6001/plants"

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => setPlantArray(data))
  }, [])

  const handleNewPlantSubmit = (newPlant) => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(newPlant)
    }
    fetch(API, configObj)
      .then(r => r.json())
      .then(data => setPlantArray([...plantArray, data]))
  }
  const handlePlantSearchChange = (search) => {
    setSearch(search)
  }
  const plantsToDisplay = plantArray.filter(plant => {
    if (search === "") return true
    else return ((plant.name.toLowerCase()).includes(search))
  })

  return (
    <div className="app">
      <Header />
      <PlantPage 
        plantArray={plantsToDisplay}
        onNewPlantSubmit={handleNewPlantSubmit}
        onPlantSearch={handlePlantSearchChange}
      />
    </div>
  );
}

export default App;
