import React from "react";
import { Link } from "react-router-dom";
import { useGallery } from "../context/GalleryContext";

const Navigation = () => {
  const { handleCategoryChange } = useGallery();
  
  return (
    <div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link
              to="/gallery"
              onClick={() => handleCategoryChange("mountain")}
            >
              Mountain
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => handleCategoryChange("beach")}>
              Beaches
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => handleCategoryChange("bird")}>
              Birds
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => handleCategoryChange("food")}>
              Food
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
