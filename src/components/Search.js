import React, { useState } from "react";

function Search({ onPlantSearch }) {
  const [userSearch, setUserSearch] = useState("")
  const handleOnChange = (e) => {
    setUserSearch(e.target.value)
    onPlantSearch(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleOnChange}
        value={userSearch}
      />
    </div>
  );
}

export default Search;
