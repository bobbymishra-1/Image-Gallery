import React from "react";
import "./Gallery.css";
import { useGallery } from "../context/GalleryContext";

const ImageContainer = () => {
  const { inputText, category, images } = useGallery();

  return (
    <div>
      <div>
        <h2>{inputText ? `${inputText} Pictures` : `${category} Pictures`}</h2>

        <div className="photo-container">
          <div>
            <ul>
              {images.map((photo) => (
                <li key={photo.id}>
                  <img
                    src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                    alt={photo.title}
                    className="Image-style"
                  ></img>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
