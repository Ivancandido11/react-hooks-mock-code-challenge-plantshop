import React, { useState } from "react";

function PlantCard({ id, image, name, onDeleteClick, onPriceChangeSubmit, price }) {
  const [stock, setStock] = useState(true)
  const [isClicked, setIsClicked] = useState(false)
  const [newPrice, setNewPrice] = useState("")

  const handleButtonClick = () => {
    setStock(false)
  }
  const handlePriceClick = (e) => {
    e.preventDefault()
    setIsClicked(isClicked => !isClicked)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onPriceChangeSubmit(newPrice, id)
    setNewPrice("")
  }
  const handlePriceChange = (e) => {
    setNewPrice(parseFloat(e.target.value))
  }
  const handleDelete = () => {
    onDeleteClick(id)
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
        <button>Out of Stock</button>
      )}
      <button onClick={handlePriceClick} >Adjust Price</button>
      <button onClick={handleDelete} >Delete</button>
      <form onSubmit={handleSubmit} >
        {isClicked ?
          <>
            <input 
              name="price"
              onChange={handlePriceChange}
              placeholder="New Price"
              step="0.01"
              type="number"
              value={newPrice}
            /> <button type="submit">Change Price</button>
          </> : null
        }
      </form>
    </li>
  );
}

export default PlantCard;
