import React from "react";
import { MENU_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

const MenuItem = ({ item, addToCart }) => {
  const { name, price, imageId, itemAttribute, id } = item.card.info; // Extract id
  const vegClassifier = itemAttribute?.vegClassifier;
  const dispatch = useDispatch();
  const handelitem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="menu-item">
      {imageId && (
        <img src={MENU_URL + imageId} alt={name} className="menu-item-image" />
      )}
      <div className="menu-item-details">
        <h3>{name || "Item name not available"}</h3>
        <p>{price ? `₹ ${price / 100}` : "Price not available"}</p>
        {/* <div className={`veg-symbol ${vegClass}`} /> */}

        <button onClick={() => handelitem(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default MenuItem;
