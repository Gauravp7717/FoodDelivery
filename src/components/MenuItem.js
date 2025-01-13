// MenuItem.js
import React from "react";
import { MENU_URL } from "../utils/constants";

const MenuItem = ({ item }) => {
  const { name, price, imageId, itemAttribute } = item.card.info;
  const vegClassifier = itemAttribute?.vegClassifier; // Veg or Non-Veg classifier
  const vegClass = vegClassifier === "VEG" ? "veg" : "non-veg"; // Apply styles based on classifier

  return (
    <div className="menu-item">
      {imageId && (
        <img src={MENU_URL + imageId} alt={name} className="menu-item-image" />
      )}
      <div className="menu-item-details">
        <h3>{name || "Item name not available"}</h3>
        <p>{price ? `₹ ${price / 100}` : "Price not available"}</p>
        <div className={`veg-symbol ${vegClass}`} />

        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default MenuItem;
