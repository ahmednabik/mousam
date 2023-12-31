import { useState } from "react";
export default function SearchBar({ updateParentState }) {
  const [newCity, setNewCity] = useState("Lahore"); // Add state for the input field

  function handleCitySearch() {
    updateParentState(newCity); // Pass the newCity to the parent component
  }

  return (
    <div className="search-bar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCitySearch();
        }}
      >
        <input
          type="text"
          placeholder="Search city..."
          // value={newCity}
          onChange={(e) => setNewCity(e.target.value)} // Update newCity state
        />
        <button type="submit" hidden>
          Search
        </button>
      </form>
    </div>
  );
}
