import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const GalleryContext = createContext();

const GalleryProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputText, setInputText] = useState("");
  const [category, setCategory] = useState("mountain");
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [category]);

  /**
   * Fetches images from Flickr API based on search term or category.
   * Sets the images in the state.
   */
  const fetchImages = async () => {
    try {
      // Use searchTerm if available, otherwise use category
      const searchTag = searchTerm ? searchTerm : category;
      // Fetch images from Flickr API
      const response = await axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&format=json&nojsoncallback=1&per_page=24&sort='interestingness-desc'&tags=${searchTag}`
      );
      // Set the images in the state
      setImages(response.data.photos.photo);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  /**
   * Handles the change of the selected category.
   * @param {string} selectedCategory - The newly selected category.
   */
  const handleCategoryChange = (selectedCategory) => {
    // Update the category state
    setCategory(selectedCategory);

    // Clear the search term
    setSearchTerm("");

    // Update the input text
    setInputText(selectedCategory);
  };

  return (
    <GalleryContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        inputText,
        setInputText,
        category,
        setCategory,
        images,
        handleCategoryChange,
        fetchImages,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

const useGallery = () => {
  return useContext(GalleryContext);
};

export { GalleryProvider, useGallery };
