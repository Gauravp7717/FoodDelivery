import ResCards from "./ResCards";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // a local state variable

  const [listOFres, setList] = useState([]);
  const [filterRes, setfilter] = useState("");

  const [searchText, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5807719&lng=73.9787063&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilter(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOFres.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            placeholder="Enter your Choice"
            value={searchText}
            onChange={(data) => {
              setSearch(data.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // Filter the restaurant list based on search text
              const filteredresList = listOFres.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setfilter(filteredresList);
            }}
          >
            Search
          </button>
        </div>
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

      {/* here the banner will come  */}

      <div className="res-container">
        {filterRes.map((restaurant, index) => (
          <ResCards key={restaurant.info.id || index} resName={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
