// ResturantMenu.js
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem"; // Import the MenuItem component
import { useParams } from "react-router";

const ResturantMenu = () => {
  const { resId } = useParams();
  const [resMenu, setResMenu] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]); // State for filtered items

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5807719&lng=73.9787063&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setResMenu(json.data);
    setFilteredItems(
      json.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
        ?.card?.card?.itemCards || []
    );
  };

  const filterItems = (type) => {
    if (type === "veg") {
      setFilteredItems(
        resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.filter(
          (item) => item.card.info.itemAttribute?.vegClassifier === "VEG"
        ) || []
      );
    } else if (type === "non-veg") {
      setFilteredItems(
        resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.filter(
          (item) => item.card.info.itemAttribute?.vegClassifier !== "VEG"
        ) || []
      );
    } else {
      setFilteredItems(
        resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards || []
      );
    }
  };

  if (!resMenu) return <Shimmer />;

  // Restaurant Info
  const name =
    resMenu?.cards?.[2]?.card?.card?.info?.name || "Name not available";

  const cuisines =
    resMenu?.cards?.[2]?.card?.card?.info?.cuisines?.join(", ") ||
    "Cuisines not available";

  return (
    <div className="menu-container">
      {/* Restaurant Info Section */}
      <div className="restaurant-info">
        <h1>{name}</h1>
        <p>{cuisines}</p>
      </div>

      {/* Top Picks Section */}
      <div className="top-picks">
        <h2>{filterItems.category}</h2>
        {/* Filter Buttons */}
        <div className="filter-buttons">
          <button onClick={() => filterItems("")}>All</button>
          <button onClick={() => filterItems("veg")}>Veg</button>
          <button onClick={() => filterItems("non-veg")}>Non-Veg</button>
        </div>
        <div className="menu-items">
          {filteredItems.length === 0 ? (
            <p>No items available</p>
          ) : (
            filteredItems.map((item) => {
              return <MenuItem key={resMenu?.info?.id} item={item} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ResturantMenu;
