import React, { useState } from "react";

function NewPlantForm({ onNewPlantSubmit }) {
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: ""
  })

  const handleUserInputChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    setNewPlant({
      ...newPlant,
      [key]:value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onNewPlantSubmit({
      name: newPlant.name,
      image: newPlant.image,
      price: parseFloat(newPlant.price)
    })
    setNewPlant({
      name: "",
      image: "",
      price: ""
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input 
          name="name"
          onChange={handleUserInputChange}
          placeholder="Plant name" 
          type="text" 
          value={newPlant.name}
        />
        <input 
          name="image"
          onChange={handleUserInputChange}
          placeholder="Image URL" 
          type="text"
          value={newPlant.image}
        />
        <input 
          name="price" 
          onChange={handleUserInputChange}
          placeholder="Price" 
          step="0.01" 
          type="number"
          value={newPlant.price} 
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
