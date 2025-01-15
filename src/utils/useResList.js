import { useState, useEffect } from "react";

const useRestlist = () => {
  const [listOFres, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5807719&lng=73.9787063&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  return listOFres;
};

export default useRestlist;
