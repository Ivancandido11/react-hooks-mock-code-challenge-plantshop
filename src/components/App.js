import React, { useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantArray, setPlantArray] = useState([])
  const [search, setSearch] = useState("")
  const API = "http://localhost:6001/plants/"

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
  const handlePriceChangeSubmit = (newPrice, id) => {
    const newPriceObj = {
      price: newPrice
    }
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPriceObj)
    }
    fetch(`${API}${id}`, configObj)
      .then(r => r.json())
      .then(data => {
        const updatedPlants = plantArray.map(plant => {
          if(plant.id === data.id) return data
          else return plant
        })
        setPlantArray(updatedPlants)
      })
  }
  const handleDeleteClick = (id) => {
    const configObj = {
      method: "DELETE"
    }
    fetch(`${API}${id}`, configObj)
      .then(() => {
        const updatedPlants = plantArray.filter(plant => plant.id !== id)
        setPlantArray(updatedPlants)
      })
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
        onDeleteClick={handleDeleteClick}
        onNewPlantSubmit={handleNewPlantSubmit}
        onPlantSearch={handlePlantSearchChange}
        onPriceChangeSubmit={handlePriceChangeSubmit}
      />
    </div>
  );
}

export default App;
