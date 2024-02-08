import React, { useState } from "react";
import "./Gallery.css";
import { useGallery } from "../context/GalleryContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm, setInputText, fetchImages } = useGallery();
  const [store, setStore] = useState("");

  /**
   * Handle search event
   * @param {Event} e - The event object
   */
  const handleSearch = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    if (searchTerm.length > 0) {
      // Set input text to the search term
      setInputText(searchTerm);
      // Set store to the search term
      setStore(searchTerm);
      // If search term is the same as store, exit the function
      if (searchTerm === store) return;
    } else {
      // If search term is empty, exit the function
      return;
    }
    // Fetch images based on the search termS
    fetchImages();
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button null">
          <svg height="32" width="32">
            <path
              d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
              fill="#ffffff"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
