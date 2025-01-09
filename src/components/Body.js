import ResCards from "./ResCards";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // a local state variable

  const [listOFres, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOFres.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterlist = listOFres.filter(
              (res) => res.info.avgRating > 4
            );
            setList(filterlist);
          }}
        >
          Top rated restaurant
        </button>
      </div>

      <div className="res-container">
        {listOFres.map((restaurant, index) => (
          <ResCards key={restaurant.info.id || index} resName={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
