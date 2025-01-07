import ResCards from "./ResCards";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">
        {resList.map((restaurant, index) => (
          <ResCards key={restaurant.info.id || index} resName={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
