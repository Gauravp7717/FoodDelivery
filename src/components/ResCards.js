import { LOGO_URL } from "../utils/constants";

const ResCards = ({ resName }) => {
  const { name, cuisines, avgRating, costForTwo } = resName?.info;
  return (
    <div className="res-cards">
      <img alt="res-logo" src={LOGO_URL}></img>
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default ResCards;
