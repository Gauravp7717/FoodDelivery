import ResCards from "./ResCards";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // a local state variable

  const [listOFres, setList] = useState(resList);

  return (
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
