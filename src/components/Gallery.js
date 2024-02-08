import React from "react";
import "./Gallery.css";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import ImageContainer from "./ImageContainer";

const Gallery = () => {
  return (
    <div className="container">
      <div>
        <SearchBar />
        <Navigation />
      </div>
      <ImageContainer />
    </div>
  );
};

export default Gallery;
