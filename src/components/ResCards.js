import { LOGO_URL } from "../utils/constants";

const ResCards = ({ resName }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, areaName } =
    resName?.info;
  return (
    <div className="res-cards">
      <img alt="res-logo" src={LOGO_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{areaName}</h4>

      <h4>{costForTwo}</h4>
    </div>
  );
};

// creating a higher order component

export const withpromo = (ResCards) => {
  return () => {
    return (
      <div>
        <label>promoted</label>
        <ResCards />
      </div>
    );
  };
};

export default ResCards;
